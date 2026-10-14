const { test, expect } = require('@playwright/test');

test('HTML source starts with the contact banner', async ({ request }) => {
  for (const path of ['/', '/about/', '/cv/', '/contact/', '/contact/thanks/', '/terminal/', '/readme/', '/web90/', '/designs/']) {
    const response = await request.get(path);
    expect(response.ok()).toBe(true);
    const source = await response.text();
    expect(source).toMatch(/^<!doctype html>\n<!--/);
    expect(source).toMatch(/^<!doctype html>\n<!--\n  ▄▄▄▄▄   ▄▄/);
    expect(source).toContain('               ▄█▀\n  Do you have work for me?');
    expect(source).toContain('Do you have work for me? Get in touch at /contact/');
    expect(source).not.toContain('me@riccardodangelo.com');
    expect(source).not.toContain('mailto:');
    expect(source).toContain('<meta name="robots" content="noindex">');
    expect(source.indexOf('Do you have work for me?')).toBeLessThan(source.indexOf('<html'));
  }
});

for (const variant of ['readme', 'web90', 'terminal']) {
  test(`${variant}: contenuti e aspetto`, async ({ page }) => {
    await page.goto(`/${variant}/`);
    await page.evaluate(() => document.fonts.ready);

    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/riccardo/i);
    await expect(page.locator('main')).toContainText('A platform for independent personal trainers.');
    await expect(page.getByRole('heading', { name: 'Allenaria' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'RD Personal Training' })).toBeVisible();
    await expect(page.locator('nav a[href="/about/"]')).toBeVisible();
    await expect(page.locator('nav a[href="/cv/"]')).toBeVisible();
    await expect(page.locator('nav a[href="/contact/"]')).toBeVisible();
    await expect(page.locator('header nav a[href="https://github.com/LostCore"]')).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

    await expect(page).toHaveScreenshot(`${variant}.png`, {
      fullPage: true,
      animations: 'disabled',
      caret: 'hide',
    });
  });
}

test('current homepage and shared pages use English', async ({ page }) => {
  for (const [path, heading] of [['/', 'RICCARDO'], ['/designs/', 'Three ways'], ['/about/', 'About'], ['/cv/', 'CV'], ['/contact/', 'Contact']]) {
    await page.goto(path);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(heading);
    await expect(page.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    if (path === '/') await expect(page.locator('body')).toHaveClass('theme-terminal');
    if (path !== '/designs/') await expect(page.locator('header nav a[href="https://github.com/LostCore"]')).toBeVisible();
    if (path === '/contact/') await expect(page.getByRole('link', { name: /LinkedIn/ })).toHaveAttribute('href', 'https://www.linkedin.com/in/rdangelo86');
  }
});

for (const [path, title, key] of [['about', 'About', 'about'], ['cv', 'CV', 'cv'], ['contact', 'Contact', 'contact']]) {
  test(`${title}: Light Terminal design`, async ({ page }) => {
    await page.goto(`/${path}/`);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('body')).toHaveClass('theme-terminal');
    await expect(page.locator('.terminal-header nav a[aria-current="page"]')).toHaveText(key);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(title);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await expect(page).toHaveScreenshot(`${path}.png`, { fullPage: true, animations: 'disabled', caret: 'hide' });
  });
}

test('contact form validates fields and submits the Netlify payload', async ({ page, request }) => {
  await page.goto('/contact/');
  await expect(page.getByRole('link', { name: 'me@riccardodangelo.com', exact: true })).toHaveCount(0);
  await page.getByRole('button', { name: 'Show email' }).click();
  await expect(page.getByRole('link', { name: 'me@riccardodangelo.com', exact: true })).toBeFocused();
  await expect(page.getByRole('link', { name: 'me@riccardodangelo.com', exact: true })).toHaveAttribute('href', 'mailto:me@riccardodangelo.com');
  const form = page.getByRole('form', { name: 'Send a message' });
  await expect(form).toHaveAttribute('data-netlify', 'true');
  await expect(form).toHaveAttribute('netlify-honeypot', 'bot-field');
  await expect(page.locator('input[name="bot-field"]')).toBeHidden();
  expect(await form.evaluate(element => element.checkValidity())).toBe(false);
  await page.getByLabel('Email', { exact: true }).fill('invalid');
  await page.getByLabel('Message', { exact: true }).fill('A contact form test.');
  expect(await form.evaluate(element => element.checkValidity())).toBe(false);
  await page.getByLabel('Email', { exact: true }).fill('visitor@example.com');
  expect(await form.evaluate(element => element.checkValidity())).toBe(false);
  await page.getByLabel('Name', { exact: true }).fill('Visitor');
  expect(await form.evaluate(element => element.checkValidity())).toBe(true);

  await page.getByLabel('Name', { exact: true }).focus();
  await page.keyboard.press('Tab');
  await expect(page.getByLabel('Email', { exact: true })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByLabel('Message', { exact: true })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: 'Send message' })).toBeFocused();

  const confirmation = await request.get('/contact/thanks/');
  expect(confirmation.ok()).toBe(true);
  await page.route('**/contact/thanks/', async route => {
    expect(route.request().method()).toBe('POST');
    const payload = new URLSearchParams(route.request().postData());
    expect(payload.get('form-name')).toBe('contact');
    expect(payload.get('name')).toBe('Visitor');
    expect(payload.get('email')).toBe('visitor@example.com');
    expect(payload.get('message')).toBe('A contact form test.');
    expect(payload.get('bot-field')).toBe('');
    await route.fulfill({ status: 200, contentType: 'text/html', body: await confirmation.text() });
  });
  await page.getByRole('button', { name: 'Send message' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Message sent');
  await expect(page.getByRole('link', { name: /Back to contact/ })).toHaveAttribute('href', '/contact/');
});

test('contact pages fit narrow screens', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 844 });
  for (const path of ['/contact/', '/contact/thanks/']) {
    await page.goto(path);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});

test('contact remains usable without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`${baseURL}/contact/`);
  await expect(page.getByRole('button', { name: 'Show email' })).toBeHidden();
  await expect(page.getByText('Use the form or LinkedIn to get in touch.')).toBeVisible();
  await expect(page.getByRole('link', { name: /Open LinkedIn/ })).toBeVisible();
  await expect(page.getByRole('form', { name: 'Send a message' })).toBeVisible();
  await context.close();
});
