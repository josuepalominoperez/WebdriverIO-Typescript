/*Fourth .ts file calling our methods and setting data ,
  and calling saveScreenshot() just to save images*/
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await browser.saveScreenshot('./imagenDemo1.png');
        await LoginPage.introduceCredentials('tomsmith', 'SuperSecretPassword!')
        await browser.saveScreenshot('./imagenDemo2.png');
        await LoginPage.clicksOnLoginButton()
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
            await browser.saveScreenshot('./imagenDemo3.png');
    })

    
})


