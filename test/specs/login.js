const fs = require('fs')
let credentials =  JSON.parse(fs.readFileSync('./test/specs/testdata/login.json'))

describe('using json for login',async()=>{

credentials.forEach(({url})=>{
    it('url',async()=>{
        await browser.url(url)
        await browser.maximizeWindow()

})
})
    
credentials.forEach(({username,password})=>{
    it('login credentials',async()=>{ 
    await browser.$("[id=email]").setValue(username)
    await browser.$("[id=password]").setValue(password)

 })
})


})