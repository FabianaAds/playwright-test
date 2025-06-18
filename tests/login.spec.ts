import { test, expect } from '@playwright/test';
import { login } from '../utils/loginHelper';

test.describe('Teste de Login', () => {

  test('deve realizar login com sucesso', async ({ page }) => {
   await login(page);


  });

  test('não deve logar com senha inválida', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'usuario_teste');
    await page.fill('#password', 'senha_errada');
    await page.click('#login-button');
     await expect(page.locator('text=Epic sadface: Username and password do not match any user in this service')).toBeVisible();
  });
});
