/**
 * define selectors using getter methods to validate the page content based on Urls
 */
class PageContent {
    get inputUsername() {
        return $("#username");
    }

    get inputPassword() {
        return $("#password");
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    get gmailValue() {
        return $("a=Gmail");
    }

    async validatesPageUrls(customEnv) {
        await expect(browser).toHaveUrlContaining(customEnv);
    }

    async validatePageTitle(pageUrl) {
        if (pageUrl === "prod")
            await expect(await browser.getTitle()).toEqual("Google");

        if (pageUrl === "stage")
            await expect(await browser.getTitle()).toEqual("The Internet");
    }
    //** Validating page content for different envs*/
    async validatePageContent(pageUrl) {
        if (pageUrl === "prod")
            await expect(await this.gmailValue.getText()).toEqual("gmail");

        if (pageUrl === "stage") {
            await expect(this.inputPassword).toBeDisplayed();
            await expect(this.inputUsername).toBePresent();
            await expect(this.btnSubmit).toExist();
        }
    }
}

export default new PageContent();
