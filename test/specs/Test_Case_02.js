const fs = require('fs')
let credentials =  JSON.parse(fs.readFileSync('./testdata/commonData.json'))
let credentials1 =  JSON.parse(fs.readFileSync('./testdata/TestData.json'))
describe('grade Test -T2',async()=>{

    var siso = require("../pageobjects/signinoutPage")
    var admin = require("../pageobjects/adminHomePage")
    var gpage = require("../pageobjects/gradePage")
    var table = require("../pageobjects/tablePage")

    var ran =Math.floor(Math.random()*1000)
    var ran1 =Math.floor(Math.random()*10000)
    var ran2 =Math.floor(Math.random()*1000)
   
    var add_fee = ran1
    var hall_chr = ran2
    
it('entering url -T2',async()=>{
        await siso.openSMSapplication() 
    })
    credentials.forEach(({username,password})=>{  
it('providing login credentials and logging in -T2',async()=>{
          await siso.usname.isDisplayed()
          await siso.usname.setValue(username)
          await siso.pswd.isDisplayed()
          await siso.pswd.setValue(password)
          await siso.loginbtn.isDisplayed()
          await siso.loginbtn.click() 
        })
          })
          credentials.forEach(({username1,password1})=>{  
it.skip('providing negative login credentials and logging in -T2',async()=>{
          await siso.usname.isDisplayed()
          await siso.usname.setValue(username1)
          await siso.pswd.isDisplayed()
          await siso.pswd.setValue(password1)
          await siso.loginbtn.isDisplayed()
          await siso.loginbtn.click()
        })
          })
credentials1.forEach(({Grade_Name,range_F,range_C,range_B,range_A,range_S,Grade_F,Grade_C,Grade_B,Grade_A,Grade_S})=>{  
it('adding grade -T2',async()=>{
        let grade_name =Grade_Name+ran
        await admin.gradeFeature.isDisplayed()
        await admin.gradeFeature.click()
        await gpage.gradename.isDisplayed()
        await gpage.gradename.setValue(grade_name)
        await gpage.admissionfee.isDisplayed()
        await gpage.admissionfee.setValue(add_fee)
        await gpage.hallcharge.isDisplayed()
        await gpage.hallcharge.setValue(hall_chr)
        await gpage.nextBtn.isDisplayed()
        await gpage.nextBtn.click()
        for(i=0;i<4;i++){
            await gpage.plusbtn.click()
        }
        await gpage.rangeF.setValue(range_F)
        await gpage.gradecharF.setValue(Grade_F)
        await gpage.rangeC.setValue(range_C)
        await gpage.gradecharC.setValue(Grade_C)
        await gpage.rangeB.setValue(range_B)
        await gpage.gradecharB.setValue(Grade_B)
        await gpage.rangeA.setValue(range_A)
        await gpage.gradecharA.setValue(Grade_A)
        await gpage.rangeS.setValue(range_S)
        await gpage.gradecharS.setValue(Grade_S)
        await gpage.SubmitBtn.click()
        await  table.searchBoxVerification()
    })
  })
it('scroll in to view -T2',async()=>{  
        await table.scrollToView.isDisplayed()
        await table.scrollToView.scrollIntoView()
    })
credentials1.forEach(({Grade_Name})=>{  
it('searching for created grade -T2',async()=>{
      let grade_name =Grade_Name+ran
      await  table.searchBoxVerification()
      await table.searchBox.isDisplayed()
      await table.searchBox.setValue(grade_name)
      var gName=await table.tableValue1.getText()
      var convert= await table.tableValue2.getText()
      var halch= await table.tableValue3.getText()
      const verifyadf = await Math.abs(Number(convert))
     if(gName==grade_name && verifyadf ==add_fee && halch== hall_chr)
      {
          console.log("grade is added and TC:pass");
      }
      else{
          console.log("grade is not added and TC:pass");
      } 
    })
  })
it.skip('deleting created grade -T2',async()=>{
        await browser.pause(1000)
        await table.deletebtn.isDisplayed()
        await table.deletebtn.click()
        await browser.pause(2000)
        await table.yesbtn.isDisplayed()
        await table.yesbtn.click()
    })
it('logout as admin -T2',async()=>{ 
        await siso.LogoutVerification()
        await siso.togglebar.isDisplayed()
        await siso.togglebar.click()
        await siso.signout.isDisplayed()
        await siso.signout.click()
    })
})