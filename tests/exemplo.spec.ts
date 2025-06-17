import { test, expect } from '@playwright/test';

 test('Deve validar o título da página Example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);


  
});

