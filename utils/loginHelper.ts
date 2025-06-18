import { expect, Page } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export async function login(page: Page) {
  const username = process.env.USERNAME!;
  const password = process.env.PASSWORD!;

  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', username);
  await page.fill('#password', password);
  await page.click('#login-button');
  

}