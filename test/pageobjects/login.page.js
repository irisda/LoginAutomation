
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
        return $('#user_login')
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

    /**
     * a method to open the wanted url
     * @path is url variabel
     */
    open(path) {
        return browser.url(`${path}`)
    }

}

export default new LoginPage();