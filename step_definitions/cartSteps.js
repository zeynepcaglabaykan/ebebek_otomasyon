const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const SearchPage = require('../pages/searchPage');

Given('Kullanıcı {string} arama sonuçları sayfasındadır', async function (searchTerm) {
    this.searchPage = new SearchPage(this.page);
    await this.searchPage.verifyElementVisible(this.searchPage.productList);
});

When('Ürün listesinden ilk ürünün "Sepete Ekle" butonuna tıklanır', async function () {
    await this.searchPage.addFirstProductToCart();
});

Then('"Ürün Sepete Eklendi" mesajı görüntülenmelidir', async function () {
    await this.searchPage.verifyElementVisible(this.searchPage.addedToCartMessage);
});