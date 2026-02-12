import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/specs',
  /* Run tests in files in parallel */
  globalTimeout: 360000,
  timeout: 200*1000, //test cases
  fullyParallel: false,
  //globalSetup: require.resolve('./globalsetup.ts'),
  //globalTeardown: require.resolve('./globalteardown.ts'),
  //testMatch: ['tests/e2e1.spec.ts'],
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://demo.evershop.io/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    headless: false,
    video: 'on',
    screenshot: 'on'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'] , channel: 'chrome'},
      //testMatch: "/tests/specs/e2e.spec.ts"
      //, baseURL: "https://google.com"
    },
    /*
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']},
    },
    */
    
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    /*
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

});
