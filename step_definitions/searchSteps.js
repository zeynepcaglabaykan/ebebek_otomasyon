const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const SearchPage = require('../pages/searchPage');

Given('Kullanıcı e-bebek ana sayfasındadır', async function () {
    this.homePage = new HomePage(this.page);
    await this.homePage.goto('https://www.e-bebek.com/');
});

When('Arama çubuğuna {string} yazılır', async function (searchTerm) {
    await this.homePage.fillText(this.homePage.searchInput, searchTerm);
});

When('Enter tuşuna basılır', async function () {
    await this.homePage.pressKey('Enter');
});

Then('{string} arama sonuçları görüntülenmelidir', async function (searchTerm) {
    this.searchPage = new SearchPage(this.page);
    await this.searchPage.verifyElementVisible(this.searchPage.productList);
}); const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const SearchPage = require('../pages/searchPage');

Given('Kullanıcı e-bebek ana sayfasındadır', async function () {
    this.homePage = new HomePage(this.page);
    await this.homePage.goto('https://www.e-bebek.com/');
});

When('Arama çubuğuna {string} yazılır', async function (searchTerm) {
    await this.homePage.fillText(this.homePage.searchInput, searchTerm);
});

When('Enter tuşuna basılır', async function () {
    await this.homePage.pressKey('Enter');
});

Then('{string} arama sonuçları görüntülenmelidir', async function (searchTerm) {
    this.searchPage = new SearchPage(this.page);
    await this.searchPage.verifyElementVisible(this.searchPage.productList);
});