const fs = require('fs')
let credentials =  JSON.parse(fs.readFileSync('./testdata/commonData.json'))
let credentials1 =  JSON.parse(fs.readFileSync('./testdata/TestData.json'))
describe('classroom Test -T3',async function(){
  this.retries(3)
  var siso = require("../pageobjects/signinoutPage")
  var admin = require("../pageobjects/adminHomePage")
  var cRoom = require("../pageobjects/classroomPage")
  var table = require("../pageobjects/tablePage")
  var ran = Math.floor(Math.random()*10000)   
it('entering url -T3',async()=>{
      await siso.openSMSapplication()
    })   
    credentials.forEach(({username,password})=>{  
      it('providing login credentials and logging in -T3',async()=>{
        await siso.usname.isDisplayed()
        await siso.usname.setValue(username)
        await siso.pswd.isDisplayed()
        await siso.pswd.setValue(password)
        await siso.loginbtn.isDisplayed()
        await siso.loginbtn.click() 
      })
        })
        credentials.forEach(({username1,password1})=>{  
      it.skip('providing negative login credentials and logging in -T3',async()=>{
        await siso.usname.isDisplayed()
        await siso.usname.setValue(username1)
        await siso.pswd.isDisplayed()
        await siso.pswd.setValue(password1)
        await siso.loginbtn.isDisplayed()
        await siso.loginbtn.click()
      })
        })
        credentials1.forEach(({ClassRoom_Name})=>{  
it('adding classroom -T3',async()=>{
    let class_name = await ClassRoom_Name+ran
    await admin.AdminVerification()
    await admin.classroomFeature.click()
    await cRoom.classroomName.isDisplayed()
    await cRoom.classroomName.setValue(class_name)
    await cRoom.studentCount.isDisplayed()
    await cRoom.studentCount.setValue(ran)
    await cRoom.submitbtn.isDisplayed()
    await cRoom.submitbtn.click()
    await table.infoMessage.click()
  })
})
it('scroll in to view -T3',async()=>{
  await table.scrollToView.isDisplayed()  
  await table.scrollToView.scrollIntoView()   
})
credentials1.forEach(({ClassRoom_Name})=>{  
it('searching for created classroom -T3',async()=>{
    let class_name = await ClassRoom_Name+ran
    await table.searchBox.setValue(class_name)
    var cName=await table.tableValue1.getText()
    var count= await table.tableValue2.getText()
    if(class_name==cName && count==ran){
      console.log("classroom is created TC:Pass");
    }
    else{
      console.log("classroom is not created TC:Fail");
    }
})
})
it.skip('deleting created classroom -T3',async()=>{
    await table.deletebtn.isDisplayed()
    await table.deletebtn.click()
    await table.yesbtn.isDisplayed()
    await table.yesbtn.click()  
})
it('logout as admin -T3',async()=>{
    await siso.LogoutVerification()
    await siso.togglebar.isDisplayed()
    await siso.togglebar.click()
    await siso.signout.isDisplayed()
    await siso.signout.click()
})
})