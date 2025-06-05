const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

Given('Kullanıcı e-bebek login sayfasına gider', async function () {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.goto('https://www.e-bebek.com/login');
});

When('"E-posta ile giriş" seçeneği seçilir', async function () {
    await this.loginPage.clickElement(this.loginPage.emailLoginButton);
});

When('"E-posta adresiniz" alanına {string} girilir', async function (email) {
    await this.loginPage.fillText(this.loginPage.emailInput, email);
});

When('"Giriş Yap/Hesap Oluştur" butonuna tıklanır', async function () {
    await this.page.getByRole('button', { name: 'Giriş Yap / Hesap Oluştur' }).click();
});

When('"Şifre" alanına {string} girilir', async function (password) {
    await this.loginPage.fillText(this.loginPage.passwordInput, password);
});

When('"Giriş Yap" butonuna tıklanır', async function () {
    await this.loginPage.clickElement(this.loginPage.loginButton);
});

Then('Kullanıcı giriş yapmış olmalıdır', async function () {
    await this.loginPage.verifyElementVisible(this.loginPage.accountIcon);
});