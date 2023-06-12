/**
 * containing specific selectors and methods for a specific page
 */
class ForgetPassword {
    /**
     * define selectors using getter methods
     * 
     * 
     */
    get forgotPasswordBtn() {
        return $('a*=I forgot my password')
    }
    get requestPasswordResetBtn() {
        return $('//button[text()="Request Password Reset"]')
    }
    async clickForgotPasswordBtn() {
        await this.forgotPasswordBtn.waitForDisplayed({ timeout: 1000 })
        await this.forgotPasswordBtn.click()

    }
}

export default new ForgetPassword();

