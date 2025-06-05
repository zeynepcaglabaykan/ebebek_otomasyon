const BasePage = require('./basePage');

class AccountPage extends BasePage {
    constructor(page) {
        super(page);
        this.accountDropdown = '.header__menu-account-dropdown';
        this.logoutButton = '#lnkSignOutNavNode';
    }

    async logout() {
        await this.clickElement(this.accountDropdown);
        await this.clickElement(this.logoutButton);
    }
}

module.exports = AccountPage;