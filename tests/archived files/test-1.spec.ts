import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
await page.goto('https://www.youtube.com/');
})