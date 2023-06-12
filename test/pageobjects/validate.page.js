
/**
    * define selectors using getter methods to validate the page content based on Urls
    */
class PageContent {

    get contentHeading() {
        return $('#content > h3')
    }
    get btnAddElement() {
        return $('//button[@onclick]')
    }

    async validatesPageUrls(customEnv) {
        await expect(browser).toHaveUrlContaining(customEnv)
    }

    async validatePageContent(pageUrl) {
        if (pageUrl === 'stage') {
            console.log('asdf')
        }
    }

}

export default new PageContent();