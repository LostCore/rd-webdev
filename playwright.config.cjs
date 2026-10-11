const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://127.0.0.1:8766',
    browserName: 'chromium',
    channel: 'chrome',
  },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1440, height: 900 } } },
    { name: 'mobile', use: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } },
  ],
  webServer: {
    command: 'python3 -m http.server 8766 --bind 127.0.0.1 --directory _site',
    url: 'http://127.0.0.1:8766',
    reuseExistingServer: !process.env.CI,
  },
});
