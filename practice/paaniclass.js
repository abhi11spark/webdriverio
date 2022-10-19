describe('createExam',async()=>{
    let ran = Math.floor(Math.random()*1000)

    it('sendurl',async()=>{
        await browser.url("http://rmgtestingserver/domain/Student_Management_System/")
        await console.log(browser.getTitle())
        await browser.maximizeWindow()
        await expect(browser).toHaveTitle('Student Management System')
    })
    it('login to the application',async()=> {
       const un=await browser.$("//input[@name='email']")
        await un.setValue("admin@gmail.com")
        const pwd=await browser.$("//input[@id='password']")
        await pwd.setValue("12345")
        await browser.$("//button[@id='btnSubmit']").click()
        console.log(await browser.getUrl());
       await expect(browser).toHaveUrlContaining("http://rmgtestingserver/domain/Student_Management_System/view/dashboard.php")
})
it('createclassroom',async()=>
{  const classroombtn=await browser.$("//span[.='Classroom']")
classroombtn.click()
const Allexamvalid=await browser.$("//h3[.='All Classroom']")
    await expect(Allexamvalid).toHaveTextContaining('All Classroom')
     const classtf=await browser.$("//input[@placeholder='Enter classroom name']")
await classtf.setValue("classroom "+ran)
const studentcount=await browser.$("//input[@placeholder='Enter student count']")
await studentcount.setValue(ran)
const submitbtn=await browser.$("//button[.='Submit']")
await submitbtn.click()

//  const inpopup=await browser.$("//h4[.='Information...!']/../following-sibling::div[1]")
//      console.log(inpopup.getText())
//      await expect(inpopup).toHaveTextContaining(' Your information has been successfully inserted in our database.')

// const Allexamvalid1=await browser.$("//h3[.='All Classroom']")
//     await expect(Allexamvalid1).toHaveTextContaining('All Classroom')
    // const showviews=await $("//select[@class='form-control input-sm']")
   
    // await showviews.selectByVisibleText('100');
    
    console.log("+++++++++++++++++++++++++++++++++++++++++++++");
var cname = "classroom "+ran
var cls_name=await browser.$(`//table[@id='example1']/tbody/tr/td[.="${cname}"]`)
var classroom_Name = await cls_name.getText();
console.log(classroom_Name);  
if(classroom_Name=="classroom "+ran){
    console.log("the classroom is created");
  }
  else {
    console.log("classroom is not created");
  }
  
  
  
  
//     //var lastid1 =  await browser.$$("//table[@id='example1']/tbody/tr[last()]/td")[1];
// //const table_Elements = await browser.$("//td[text()='class2']").getText()
//   //  console.log(table_Elements);
//    //console.log(await lastid1.getText());
    
//     // console.log(lastid1.getText());
// // var lastid=Number(lastid1)
// console.log(lastid1);

// console.log("**************************************************")
// // console.log(lastid);
   

    
// for (let j=0;j<;j++) 
//       {

//         var namelist=await $$("//div[@class='dataTables_length']/../../following-sibling::div/div/table/thead/following-sibling::tbody/tr/td[2]")[j].getText()
//         console.log("the name list are "+namelist)
//            if(namelist==classroom)
//            {
//                console.log("created classroom sucessful")
//                break;
//            }
           

//      else{
//             console.log("created classroom is not successful")
    
//            }
//        }

})
})