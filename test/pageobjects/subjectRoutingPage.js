class subjectRoutingPage
{

    get addbtn(){

        return $("//a[@class='btn btn-success btn-sm pull-right']")
    }
    get selectGrade(){

        return $("//select[@id='grade']")
    }
    get selectSubject(){

        return $("//select[@id='subject']")
    }
    get selectTeacher(){

        return $("//select[@id='teacher']")
    }
    get selectFee(){

        return $("//input[@id='fee']")
    }
    get selectSubmitBtn(){

        return $("//button[.='Submit']")
    }
    async SubjectRoutingVerification(){
        await browser.waitUntil(()=>this.addbtn.isClickable(),{
            timeout:2000,timeoutMsg:"add button text is not clickable"
        })
    }
    async SubjectRoutingVerification1(){
        await browser.waitUntil(()=>this.selectGrade.isClickable(),{
            timeout:2000,timeoutMsg:"seclect garde dropdown is not clickable"
        })
        await browser.waitUntil(()=>this.selectSubject.isClickable(),{
            timeout:2000,timeoutMsg:"select subject dropdown is not clickable"
        })
        await browser.waitUntil(()=>this.selectTeacher.isClickable(),{
            timeout:2000,timeoutMsg:"select Teacher dropdown is not displayed"
        })
        await browser.waitUntil(()=>this.selectFee.isDisplayed(),{
            timeout:2000,timeoutMsg:"select fee text field is not displayed"
        })
        await browser.waitUntil(()=>this.selectSubmitBtn.isClickable(),{
            timeout:2000,timeoutMsg:"submit button is not clickable"
        })
    }



}
module.exports = new subjectRoutingPage()
