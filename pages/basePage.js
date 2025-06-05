const { expect } = require('@playwright/test');

class BasePage {
    constructor(page) {
        this.page = page;
    }

    async goto(url) {
        await this.page.goto(url);
    }

    async clickElement(selector) {
        await this.page.click(selector);
    }

    async fillText(selector, text) {
        await this.page.fill(selector, text);
    }

    async pressKey(key) {
        await this.page.keyboard.press(key);
    }

    async waitForSelector(selector) {
        await this.page.waitForSelector(selector);
    }

    async verifyElementVisible(selector) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async takeScreenshot(name) {
        await this.page.screenshot({ path: `screenshots/${name}.png` });
    }
}

module.exports = BasePage;