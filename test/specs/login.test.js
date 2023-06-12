import LoginPage from '../pageobjects/login.page.js'
import PageContent from '../pageobjects/validate.page.js'
import globalConfig from '../customConfig.js'


describe('Validate Login Page functionality', () => {

    beforeEach(async () => {
        await LoginPage.open(globalConfig.baseURL)
    })
    it('should success: Login with correct credenctials', async () => {
        await LoginPage.login(globalConfig.correctEmail, globalConfig.correctPassword)
        await expect(browser).toHaveUrlContaining('learn')
    })

})
