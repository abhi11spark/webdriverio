const fs = require('fs')
let credentials =  JSON.parse(fs.readFileSync('./testdata/commonData.json'))
let credentials1 =  JSON.parse(fs.readFileSync('./testdata/TestData.json'))
describe('Subject Routing Test -T4',async()=>{
  var siso = require("../pageobjects/signinoutPage")
  var admin = require("../pageobjects/adminHomePage")
  var srpage = require("../pageobjects/subjectRoutingPage")
  var table = require("../pageobjects/tablePage")
  var gpage = require("../pageobjects/gradePage")
  var spage = require("../pageobjects/subjectPage")
  var ran1 =Math.floor(Math.random()*1000)
  var ran2 =Math.floor(Math.random()*10000)
  var ran3 =Math.floor(Math.random()*10000)
  
  var add_fee = ran2
  var hall_chr = ran3
  var fee = ran3

  it('entering url -T4',async()=>{
      await siso.openSMSapplication() 
    })
    credentials.forEach(({username,password})=>{  
      it('providing login credentials and logging in -T4',async()=>{
        await siso.usname.isDisplayed()
        await siso.usname.setValue(username)
        await siso.pswd.isDisplayed()
        await siso.pswd.setValue(password)
        await siso.loginbtn.isDisplayed()
        await siso.loginbtn.click() 
      })
        })
  credentials.forEach(({username1,password1})=>{  
      it.skip('providing negative login credentials and logging in -T4',async()=>{
        await siso.usname.isDisplayed()
        await siso.usname.setValue(username1)
        await siso.pswd.isDisplayed()
        await siso.pswd.setValue(password1)
        await siso.loginbtn.isDisplayed()
        await siso.loginbtn.click()
      })
        })
  credentials1.forEach(({Grade_Name,range_F,range_C,range_B,range_A,range_S,Grade_F,Grade_C,Grade_B,Grade_A,Grade_S})=>{  
          it('adding grade -T4',async()=>{
              let grade_name =Grade_Name+ran1
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
              await browser.pause(2000)
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
              await browser.pause(4000)  
          })
        })
  it('scroll in to view -T4',async()=>{
      await table.scrollToView.scrollIntoView()
    })
    credentials1.forEach(({Grade_Name})=>{  
  it('searching for created grade -T4',async()=>{
    let grade_name =Grade_Name+ran1
      await browser.pause(4000)
      await table.searchBox.isDisplayed()
      await table.searchBox.setValue(grade_name)
      var gName=await table.tableValue1.getText()
      var convert= await table.tableValue2.getText()
      var halch= await table.tableValue3.getText()
     const verifyadf = await Math.abs(Number(convert))
    if(gName==grade_name && verifyadf ==add_fee && halch== hall_chr)
    {
    console.log("grade is added");
    }
    else{
    console.log("grade is not added");
    } 
    })
  })
  credentials1.forEach(({Subject_Name})=>{  
    it('adding subject -T4 ',async()=>{
      var sub_name=await Subject_Name+ran1
      await admin.subjectFeature.isDisplayed()
      await admin.subjectFeature.click()
      await browser.pause(2000)
      await spage.subjectName.isDisplayed()
      await spage.subjectName.setValue(sub_name)
      await spage.submitBtn.isDisplayed()
      await spage.submitBtn.click()
      await browser.pause(2000)
    })
      })
    it('scroll in to view search box -T4',async()=>{
      await table.scrollToView.isDisplayed()
      await table.scrollToView.scrollIntoView()
    })
    credentials1.forEach(({Subject_Name})=>{  
    it('searching for created subject-T4 ',async()=>{
      await browser.pause(4000)
      var sub_name=await Subject_Name+ran1
      await table.searchBox.isDisplayed()
      await table.searchBox.setValue(sub_name)
      var verify=await table.tableValue1.getText()
      if(verify==sub_name)
      {
        console.log("subject  is added ");
      }
      else
      {
        console.log("subject is not added ");
      }
    })
  })
    credentials1.forEach(({Grade_Name,Subject_Name,Teacher_Name1})=>{  
  it('creating the routing for the subject -T4',async()=>{
        await browser.pause(1000)
        let grade_name =Grade_Name+ran1
        var sub_name=await Subject_Name+ran1
        await admin.subjectRoutingFeature.isDisplayed()
        await admin.subjectRoutingFeature.click()
        await srpage.addbtn.isDisplayed()
        await srpage.addbtn.click()
        await srpage.selectGrade.isDisplayed()
        await srpage.selectGrade.selectByVisibleText(grade_name)
        await srpage.selectSubject.isDisplayed()
        await srpage.selectSubject.selectByVisibleText(sub_name)
        await srpage.selectTeacher.isDisplayed()
        await srpage.selectTeacher.selectByVisibleText(Teacher_Name1)
        await srpage.selectFee.isDisplayed()
        await srpage.selectFee.setValue(fee)
        await srpage.selectSubmitBtn.isDisplayed()
        await srpage.selectSubmitBtn.click()
        await browser.pause(4000)     
      })
    })
  it('scroll in to view -T4',async()=>{
        await table.scrollToView.isDisplayed()
        await table.scrollToView.scrollIntoView()
      }) 
      credentials1.forEach(({Grade_Name,Subject_Name,Teacher_Name1})=>{  
  it('searching for created routing -T4',async()=>{
        let grade_name =Grade_Name+ran1
        var sub_name=await Subject_Name+ran1
        let teacher = Teacher_Name1
        await table.searchBox.isDisplayed()
        await table.searchBox.setValue(grade_name)
        await browser.pause(1000)
        var verify = await table.tableValue1.getText()
        await console.log(verify);
        var verify1 = await table.tableValue2.getText()
        await console.log(verify1);
        var verify2 = await table.tableValue3.getText()
        await console.log(verify2);
        var verify3 = await table.tableValue4.getText()
        await console.log(verify3);
        if(verify==grade_name && verify1 ==sub_name && verify2 ==teacher && verify3 == fee)
        {
            console.log("subject routing is success fully done and TC:pass");
        }
        else{
              console.log("subject routing is not having data entered and TC:Fail");
        }
      })
    })
  it.skip('deleting created subject routing -T4',async()=>{
    await browser.pause(1000)
    await table.deletebtn.isDisplayed()
    await table.deletebtn.click()
    await browser.pause(2000)
    await table.yesbtn.isDisplayed()
    await table.yesbtn.click() 
  })
  it('logout as admin -T4',async()=>{
    await siso.LogoutVerification()
    await siso.togglebar.isDisplayed()
    await siso.togglebar.click()
    await siso.signout.isDisplayed()
    await siso.signout.click()
    })

  })

