import LoginPage from '../pageobjects/login.page.js'
import PageContent from '../pageobjects/validate.page.js'
import globalConfig from '../customConfig.js'


describe('Validate Split Configuration', () => {
    it('should open page with custom environments', async () => {
        await LoginPage.open(globalConfig.baseURL)
        await PageContent.validatesPageUrls(globalConfig.baseURL)
        await PageContent.validatePageContent(process.env.ENV)
    })
})
