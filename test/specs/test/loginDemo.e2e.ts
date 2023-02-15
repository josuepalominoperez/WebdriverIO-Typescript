describe('Demo login', ()=>{
    it('login with valid credentials',async () => {
       await browser.url('https://demoqa.com/login')
       await $('#userName').setValue('Anuel2023*')
       await $('#password').setValue('Anuel2023*')
       await $('#login').click()

       await expect($('.form-label')).toBeExisting()
       await expect($('.form-label')).toHaveTextContaining('Books :')
    })
})