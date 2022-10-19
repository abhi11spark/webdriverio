describe('createExam',async()=>{
    const exam="Js"+""+Math.round(Math.random()*10000)
    
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

it('click on exam',async()=> { 
const un=await browser.$("//span[.='Exam']")
await un.click()
const ce1=await browser.$("//a[.='Create Exam']")
await ce1.click()
const elem = await $("//h3[.='All Exam']")
await expect(elem).toHaveTextContaining('All Exam')


})
it('Add Exam and validation',async()=>{
    const addbn=await browser.$("//a[.='Add ']")
    addbn.click()
    const addexam=await browser.$("//h3[text()='Add Exam']")
    await expect(addexam).toHaveText('Add Exam')
    const enterexamname=await browser.$("//input[@placeholder='Enter exam name']")
  
    
    await enterexamname.setValue(exam)
    const submitbtn=await browser.$("//button[@type='submit']")
    await submitbtn.click()
    
    // const inpopup=await browser.$("//h4[.='Information...!']/../following-sibling::div[1]")
    // console.log(inpopup.getText())
    // await expect(inpopup).toHaveTextContaining(' Your information has been successfully inserted in our database.')

    const Allexamvalid=await browser.$("//h3[.='All Exam']")
    await expect(Allexamvalid).toHaveText('All Exam')
    
   
    
   for(let i=0;i<3;i++)
    {
    var header = await $$("//div[@class='dataTables_length']/../../following-sibling::div/div/table/thead/tr/th")[i].getText()
    console.log(header)
   
           if(header=="Name")
      {
     for (let j=0;j<10;j++) 
      {

        var namelist=await $$("//div[@class='dataTables_length']/../../following-sibling::div/div/table/thead/following-sibling::tbody/tr/td[2]")[j].getText()
        console.log("the name list are "+namelist)
           if(namelist==exam)
           {
               console.log("created exam sucessful")
               break;
           }
           

     else{
            console.log("created exam is not successful")
    
           }
       }

       }
      }
    

    
     
})
})
