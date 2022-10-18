class loginandout {

async openSMSapplication()
{
    await browser.url("http://rmgtestingserver/domain/Student_Management_System/view/login.php")
    await browser.maximizeWindow()
    await expect(browser).toHaveTitle('Student Management System')
}
get usname()
{
    return $("[id=email]");
}
get pswd()
{
    return $("[id=password]");
}
get loginbtn()
{
    return $("[id=btnSubmit]");
}
get togglebar()
{
    return $("//img[@alt='User Image']")
}
get signout()
{
    return $("//a[text()='Sign out']") 
}
async LoginVerification(){

    await browser.waitUntil(()=>this.usname.isDisplayed(),{
        timeout:5000,timeoutMsg:"username text field is not displayed"
    })
    await browser.waitUntil(()=>this.pswd.isDisplayed(),{
        timeout:5000,timeoutMsg:"password text field is not displayed"
    })
    await browser.waitUntil(()=>this.loginbtn.isClickable(),{
        timeout:5000,timeoutMsg:"login button text field is not clickable"
    })
}
async LogoutVerification(){
    await browser.waitUntil(async()=>($("//img[@alt='User Image']").isClickable()),{
        timeout:5000,timeoutMsg:"toggle bar is not clickable"
    })
}
}
module.exports=new loginandout()