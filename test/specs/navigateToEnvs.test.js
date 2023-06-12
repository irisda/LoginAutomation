import LoginPage from '../pageobjects/login.page.js'
import PageContent from '../pageobjects/validate.page.js'
import globalConfig from '../customConfig.js'


describe('Validate Split Configuration', () => {

    beforeEach(async () => {
        await LoginPage.open(globalConfig.baseURL)
    })
    it('should validate page title with custom environments', async () => {
        await PageContent.validatesPageUrls(globalConfig.baseURL)
        await PageContent.validatePageTitle(process.env.ENV)

    })
    it('should validate page content with custom environments', async () => {
        await PageContent.validatePageContent(process.env.ENV)
    })
})
