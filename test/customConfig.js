/**
   * define all the custom configurations and credentials
   **** Explanations: 
   * For the second task (split configuration) we are supposing to have two different urls, For production we select "https://www.google.com/"
   * For stage  we suppose to use https://the-internet.herokuapp.com/add_remove_elements/
   * For the first taske (Login Functionaity) I plan to use https://www.codecademy.com/login refered here as QA env.
   */

function getEnvironment(BUILD_URL) {
    switch (BUILD_URL) {
        case 'prod':
            return {
                mainBaseUrl: 'https://www.google.com/',
            }
        case 'stage':
            return {
                mainBaseUrl: 'https://the-internet.herokuapp.com/login',
            }
        case 'qa':
        default:
            return {
                mainBaseUrl: 'https://www.codecademy.com/login',
            }
    }
}

//I am supposing to setup qa as a main env becuase I will run the first login functionalty tests cases on this env.
const env = getEnvironment(process.env.ENV ?? 'qa')

const globalConfig = {
    baseURL: env.mainBaseUrl
}

export default globalConfig