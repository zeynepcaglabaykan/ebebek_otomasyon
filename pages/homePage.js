const BasePage = require('./basePage');

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.searchInput = '#txtSearchBox';
        this.searchButton = 'button.search-back';
    }

    async searchProduct(productName) {
        await this.fillText(this.searchInput, productName);
        await this.clickElement(this.searchButton);
    }
}

module.exports = HomePage;