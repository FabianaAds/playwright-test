import { test, expect } from '@playwright/test';

test.describe('Teste de Login', () => {
  test('deve realizar login com sucesso', async ({ page }) => {
    // Acessa a página de login
    await page.goto('https://www.saucedemo.com/');

    // Preenche o campo de usuário (exemplo: input com id "username")
    await page.fill('#user-name', 'standard_user');

    // Preenche o campo de senha (exemplo: input com id "password")
    await page.fill('#password', 'secret_sauce');

    // Clica no botão de login (exemplo: botão com id "login-button")
    await page.click('#login-button');

    // Espera a navegação pós-login
    await page.waitForURL('https://www.saucedemo.com/inventory.html');


  });

  test('não deve logar com senha inválida', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'usuario_teste');
    await page.fill('#password', 'senha_errada');
    await page.click('#login-button');

    // Verifica se mensagem de erro aparece
     await expect(page.locator('text=Epic sadface: Username and password do not match any user in this service')).toBeVisible();
  });
});
