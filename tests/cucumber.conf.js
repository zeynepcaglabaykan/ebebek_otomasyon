const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');

setDefaultTimeout(60000);

BeforeAll(async function () {
    this.browser = await chromium.launch({
        headless: false,
        slowMo: 100,
    });
});

Before(async function ({ pickle }) {
    this.testName = pickle.name.replace(/\s+/g, '-').toLowerCase();
    this.context = await this.browser.newContext({
        viewport: { width: 1280, height: 720 },
        recordVideo: { dir: 'videos/' },
    });
    this.page = await this.context.newPage();
});

After(async function ({ result }) {
    if (result.status === 'FAILED') {
        await this.page.screenshot({ path: `screenshots/${this.testName}.png` });
    }
    await this.page.close();
    await this.context.close();
});

AfterAll(async function () {
    await this.browser.close();

    // Generate Allure report
    if (fs.existsSync('allure-results')) {
        const { exec } = require('child_process');
        exec('allure generate allure-results -o allure-report --clean', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error generating Allure report: ${error}`);
                return;
            }
            console.log(`Allure report generated: ${stdout}`);
        });
    }
});