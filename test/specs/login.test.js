import LoginPage from '../pageobjects/login.page.js'
import PageContent from '../pageobjects/validate.page.js'
import globalConfig from '../customConfig.js'


describe('Validate Login Page functionality', () => {
    beforeEach(async () => {
        await LoginPage.open(globalConfig.baseURL)
    })
    afterEach(async () => {
        await browser.reloadSession()
    })

    it('should succeed: Login with correct credenctials', async () => {
        await LoginPage.login(globalConfig.correctEmail, globalConfig.correctPassword)
        await expect(browser).toHaveUrlContaining('learn')
    })

    it('should succeed: Valide login Page', async () => {
        await LoginPage.validateSignUpBtn()
        await LoginPage.validatePageTitle()
    })

    //Validate Forgot Password page
    it('should succeed: Valide Forgot Password', async () => {
        await LoginPage.clickForgotPasswordBtn()
        await expect(browser).toHaveUrlContaining('secret/new')
        await expect(LoginPage.requestPasswordResetBtn).toBeDisplayedInViewport()

        const getRestText = await $('div > h1')
        await expect(getRestText).toHaveText('Request Password Reset')

    })
    //On this test we are validating that login with incorrect credentials should fail
    it('should fail: Login with incorrect credenctials', async () => {
        await LoginPage.login(globalConfig.incorrectEmail, globalConfig.incorrectPassword)
        await LoginPage.validateErrorMessage()
    })



})
