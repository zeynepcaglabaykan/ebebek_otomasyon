const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const AccountPage = require('../pages/accountPage');

Given('Kullanıcı giriş yapmış durumdadır', async function () {
    this.accountPage = new AccountPage(this.page);
    await this.accountPage.verifyElementVisible(this.accountPage.accountDropdown);
});

When('"Hesabım" simgesine tıklanır', async function () {
    await this.accountPage.clickElement(this.accountPage.accountDropdown);
});

When('"Çıkış Yap" seçeneğine tıklanır', async function () {
    await this.accountPage.clickElement(this.accountPage.logoutButton);
});

Then('Kullanıcı çıkış yapmış olmalıdır', async function () {
    await expect(this.page).toHaveURL('https://www.e-bebek.com/');
});