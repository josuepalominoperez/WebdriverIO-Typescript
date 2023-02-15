describe('mocha js demo - main suite',()=>{
    before(async () => {
        console.log('Hola soy un BEFORE HOOK')
    })
    beforeEach(async () => {
        console.log('Hola soy un BEFORE EACH HOOK')
    })
    it('Soy el primer test utilizando IT',async () => {
        console.log('Primer test')
    })
    it('Soy el segundo test utilizando IT',async () => {
        console.log('Segundo test')
    })
    it('Soy el tercer test utilizando IT',async () => {
        console.log('Tercer test')
    })
    //Cuando se le pone only correra solamente ese test
    it.only('Soy el cuarto test utilizando IT',async () => {
        console.log('Cuarto test')
    })
    //Cuando se le pone skip , se saltara y NO CORRERA solamente ese test
    it.skip('Soy el quinto test utilizando IT',async () => {
        console.log('Quinto test')
    })
    afterEach(async () => {
        console.log('Hola soy un AFTER EACH HOOK')
    })
    after(async () => {
        console.log('Hola soy un AFTER HOOK')
        await browser.debug()
    })
})