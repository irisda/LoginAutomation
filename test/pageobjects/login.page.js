
/**
 * containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     * 
     * 
     */

    get emailField() {
        return $('input[name="user[login]"]')
    }

    get passwordField() {
        return $('#login__user_password')
    }

    get logInBtn() {
        return $('//button[text()="Log in"]')
    }

    get forgotPasswordBtn() {
        return $('a*=I forgot my password')
    }

    get invalidEmailPaswordText() {
        return $('span[data-testid="error-text"]')
    }

    get signUpbtn() {
        return $('a*=Sign Up')
    }

    get pageLoginTitle() {
        return $('h1*=Log in to Codecademy')
    }

    get requestPasswordResetBtn() {
        return $('//button[text()="Request Password Reset"]')
    }

    /**
     * a method to login using username and password
     */
    async addEmail(username) {
        await this.emailField.waitForDisplayed({ timeout: 2000 })
        await this.emailField.setValue(username);
    }

    async addPassword(password) {
        await this.passwordField.waitForDisplayed({ timeout: 2000 })
        await this.passwordField.setValue(password)
    }

    async login(username, password) {
        await this.addEmail(username)
        await this.addPassword(password)
        await this.logInBtn.waitForClickable({ timeout: 2000 })
        await this.logInBtn.click()
    }

    async validateErrorMessage() {
        await this.invalidEmailPaswordText.waitForDisplayed({ timeout: 9000 })
        const invalidCredentialsMessage = await this.invalidEmailPaswordText.getText()
        await expect(invalidCredentialsMessage).toBe('Invalid email or password')
    }

    async validateSignUpBtn() {
        await this.signUpbtn.waitForDisplayed({ timeout: 2000 })
    }

    async validatePageTitle() {
        await this.pageLoginTitle.waitForDisplayed({ timeout: 1000 })
        const loginTitle = await this.pageLoginTitle.getText()
        await expect(loginTitle).toBe('Log in to Codecademy')
    }
    async clickForgotPasswordBtn() {
        await this.forgotPasswordBtn.waitForDisplayed({ timeout: 1000 })
        await this.forgotPasswordBtn.click()

    }








    /**
     * a method to open the wanted url
     * @path is url variabel
     */
    open(path) {
        return browser.url(`${path}`)
    }

}

export default new LoginPage();