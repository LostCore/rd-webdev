const { test, expect } = require('@playwright/test');

test('HTML source starts with the contact banner', async ({ request }) => {
  for (const path of ['/', '/about/', '/cv/', '/contatti/', '/terminal/', '/readme/', '/web90/', '/designs/']) {
    const response = await request.get(path);
    expect(response.ok()).toBe(true);
    const source = await response.text();
    expect(source).toMatch(/^<!doctype html>\n<!--/);
    expect(source).toMatch(/^<!doctype html>\n<!--\n  ▄▄▄▄▄   ▄▄/);
    expect(source).toContain('               ▄█▀\n  Do you have work for me?');
    expect(source).toContain('Do you have work for me? Contact me at riccardodangelo@outlook.com');
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
    await expect(page.locator('nav a[href="/contatti/"]')).toBeVisible();
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
  for (const [path, heading] of [['/', 'RICCARDO'], ['/designs/', 'Three ways'], ['/about/', 'About'], ['/cv/', 'CV'], ['/contatti/', 'Contact']]) {
    await page.goto(path);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(heading);
    await expect(page.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    if (path === '/') await expect(page.locator('body')).toHaveClass('theme-terminal');
    if (path !== '/designs/') await expect(page.locator('header nav a[href="https://github.com/LostCore"]')).toBeVisible();
    if (path === '/contatti/') await expect(page.getByRole('link', { name: /LinkedIn/ })).toHaveAttribute('href', 'https://www.linkedin.com/in/rdangelo86');
  }
});

for (const [path, title, key] of [['about', 'About', 'about'], ['cv', 'CV', 'cv'], ['contatti', 'Contact', 'contact']]) {
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
