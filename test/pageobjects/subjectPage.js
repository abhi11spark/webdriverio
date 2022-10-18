class subjectPage{

get subjectName(){

    return $("//input[@placeholder='Enter Subject name']")
}
get submitBtn(){

    return $("//button[.='Submit']")
}
async subjectVerification(){
    await browser.waitUntil(()=>this.subjectName.isDisplayed(),{
        timeout:2000,timeoutMsg:"subject name text field is not displayed"
    })
    await browser.waitUntil(()=>this.submitbtn.isClickable(),{
        timeout:2000,timeoutMsg:"submit button text field is not clickable"
    })
}
}
module.exports= new subjectPage()

