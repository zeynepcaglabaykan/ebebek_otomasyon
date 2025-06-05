const BasePage = require('./basePage');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.emailLoginButton = '#btnLoginWithEmail';
        this.emailInput = '#txtEmail';
        this.continueButton = 'button:has-text("Giriş Yap / Hesap Oluştur")';
        this.passwordInput = '#txtPassword';
        this.loginButton = '#btnSubmitPassword';
        this.accountIcon = '#btnMyAccount';
    }

    async login(email, password) {
        await this.clickElement(this.emailLoginButton);
        await this.fillText(this.emailInput, email);
        await this.clickElement(this.continueButton);
        await this.fillText(this.passwordInput, password);
        await this.clickElement(this.loginButton);
        await this.waitForSelector(this.accountIcon);
    }
}

module.exports = LoginPage;