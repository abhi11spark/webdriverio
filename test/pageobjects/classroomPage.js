class classroomPage {

    get classroomName()
        {
            return $("//input[@placeholder='Enter classroom name']")
        }
    
    get studentCount(){
        return  $("//input[@placeholder='Enter student count']")

    }
    get submitbtn(){

        return  $("//button[@id='btnSubmit']")

    } 
    async ClassRoomVerification(){
        await browser.waitUntil(()=>this.classroomName.isDisplayed(),{
            timeout:2000,timeoutMsg:"classroom name text field is not displayed"
        })
        await browser.waitUntil(()=>this.studentCount.isDisplayed(),{
            timeout:2000,timeoutMsg:"student count text field is not displayed"
        })
        await browser.waitUntil(()=>this.submitbtn.isClickable(),{
            timeout:2000,timeoutMsg:"submit button text field is not clickable"
        })
    }
   
}
 module.exports=new classroomPage()