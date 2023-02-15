describe('Learning locator', ()=>{
    beforeEach(async () => {
        await browser.url('https://demoqa.com/links')
    })



    it('Xpath Example',async () => {
        const badRequestLink = await $('//*[@id="bad-request"]')
        const responseLink = await $('#linkResponse')
        
        //scrollIntoView() nos sirve para deslizar hasta encontrar el elemento
        badRequestLink.scrollIntoView()
        badRequestLink.click()

        responseLink.scrollIntoView()
        await expect(responseLink).toHaveTextContaining('Link has responded with staus 400 and status text Bad Request')

    })
})