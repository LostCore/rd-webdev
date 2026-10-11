const { test, expect } = require('@playwright/test');

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
  }
});
