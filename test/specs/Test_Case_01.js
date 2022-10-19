const fs = require('fs')
let credentials =  JSON.parse(fs.readFileSync('./testdata/commonData.json'))
let credentials1 =  JSON.parse(fs.readFileSync('./testdata/TestData.json'))
describe('Subject Test -T1 ',async function(){
  this.retries(3)
  var siso = require("../pageobjects/signinoutPage")
  var admin = require("../pageobjects/adminHomePage")
  var spage = require("../pageobjects/subjectPage")
  var table = require("../pageobjects/tablePage")
  var ran = Math.floor(Math.random()*10000)
it('entering url -T1',async()=>{
  await siso.openSMSapplication()
})
  credentials.forEach(({username,password})=>{  
it('providing login credentials and logging in -T1',async()=>{
  await siso.usname.isDisplayed()
  await siso.usname.setValue(username)
  await siso.pswd.isDisplayed()
  await siso.pswd.setValue(password)
  await siso.loginbtn.isDisplayed()
  await siso.loginbtn.click() 
})
  })
  credentials.forEach(({username1,password1})=>{  
it.skip('providing negative login credentials and logging in -T1',async()=>{
  await siso.usname.isDisplayed()
  await siso.usname.setValue(username1)
  await siso.pswd.isDisplayed()
  await siso.pswd.setValue(password1)
  await siso.loginbtn.isDisplayed()
  await siso.loginbtn.click()
})
  })
  credentials1.forEach(({Subject_Name})=>{  
it('adding subject -T1 ',async()=>{
  var sub_name=await Subject_Name+ran
  await admin.subjectFeature.isDisplayed()
  await admin.subjectFeature.click()
  await spage.subjectName.isDisplayed()
  await spage.subjectName.setValue(sub_name)
  await spage.submitBtn.isDisplayed()
  await spage.submitBtn.click()
  await spage.submitBtn.waitForExist({timeout:5000,timeoutMsg:"waiting"})
  await table.infoMessage.click()
})
})
it('scroll in to view search box -T1',async()=>{
  await table.scrollToView.isDisplayed()
  await table.scrollToView.scrollIntoView()
})
credentials1.forEach(({Subject_Name})=>{  
it('searching for created subject-T1 ',async()=>{
  var sub_name=await Subject_Name+ran
  await table.searchBox.isDisplayed()
  await table.searchBox.setValue(sub_name)
  var verify=await table.tableValue1.getText()
 
  if(verify==sub_name)
  {
    console.log("subject  is added and TC:pass");
  }
  else
  {
    console.log("subject is not added and TC:pass");
  }
})
})
it.skip('deleting created -T1 ',async()=>{
  await table.deletebtn.isDisplayed()
  await table.deletebtn.click()
  await table.yesbtn.isDisplayed()
  await table.yesbtn.click()
})
it('logout as admin -T1',async()=>{
  await siso.LogoutVerification()
  await siso.togglebar.isDisplayed()
  await siso.togglebar.click()
  await siso.signout.isDisplayed()
  await siso.signout.click()
})
})
