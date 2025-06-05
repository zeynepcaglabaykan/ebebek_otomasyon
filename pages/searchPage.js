const BasePage = require('./basePage');

class SearchPage extends BasePage {
    constructor(page) {
        super(page);
        this.productList = '.cx-product-container';
        this.addToCartButton = '#addToCartBtn';
        this.addedToCartMessage = 'text=Ürün Sepete Eklendi!';
    }

    async addFirstProductToCart() {
        await this.clickElement(this.addToCartButton);
        await this.verifyElementVisible(this.addedToCartMessage);
    }
}

module.exports = SearchPage;