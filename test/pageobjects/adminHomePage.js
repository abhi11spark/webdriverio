class adminHomePage {

    get gradeFeature()
    {
        return $("//span[text()='Grade']")
    }
    get classroomFeature()
    {
        return $("//span[text()='Classroom']")
    }
    get subjectFeature()
    {
        return $("//span[text()='Subject']")
    }
    get subjectRoutingFeature()
    {
        return $("//span[text()='Subject Routing']")
    }
    async AdminVerification(){

        await browser.waitUntil(()=>this.gradeFeature.isDisplayed(),{
            timeout:2000,timeoutMsg:"grade text field is not displayed"
        })
        await browser.waitUntil(()=>this.classroomFeature.isDisplayed(),{
            timeout:2000,timeoutMsg:"classroom text field is not displayed"
        })
        await browser.waitUntil(()=>this.subjectFeature.isDisplayed(),{
            timeout:2000,timeoutMsg:"subject text field is not displayed"
        })
        await browser.waitUntil(()=>this.subjectRoutingFeature.isDisplayed(),{
            timeout:2000,timeoutMsg:"subject routing text field is not displayed"
        })
    }
   
    }
    module.exports =new adminHomePage()