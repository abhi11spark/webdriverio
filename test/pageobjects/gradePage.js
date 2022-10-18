class gradePage {

    get gradename()
    {
        return $("//input[@placeholder='Enter name']")
    }
    get admissionfee()
    {
        return $("//input[@id='admission_fee']")
    }
    get hallcharge()
    {
        return $("//input[@id='hall_charge']")
    }
    get nextBtn()
    {
        return $("//button[text()='Next']")
    }
    get plusbtn()
    {
        return $("//span[@class='glyphicon glyphicon-plus']")
    }
    get rangeF()
    {
        return $("//input[@id='mark_range_text_1']")
    }
    get rangeC()
    {
        return $("//input[@id='mark_range_text_2']")
    }
    get rangeB()
    {
        return $("//input[@id='mark_range_text_3']")
    }
    get rangeA()
    {
        return $("//input[@id='mark_range_text_4']")
    }
    get rangeS()
    {
        return $("//input[@id='mark_range_text_5']")
    }
    get gradecharF()
    {
        return $("//input[@id='mark_grade_text_1']")
    }
    get gradecharC()
    {
        return $("//input[@id='mark_grade_text_2']")
    }
    
    get gradecharB()
    {
        return $("//input[@id='mark_grade_text_3']")
    }
    
    get gradecharA()
    {
        return $("//input[@id='mark_grade_text_4']")
    }
    
    get gradecharS()
    {
        return $("//input[@id='mark_grade_text_5']")
    }
    get SubmitBtn()
    {
        return $("//button[@id='btnSubmit1']")
    }
    async GradeVerification1(){
        await browser.waitUntil(()=>this.gradename.isDisplayed(),{
            timeout:2000,timeoutMsg:"grade name text field is not displayed"
        })
        await browser.waitUntil(()=>this.admissionfee.isDisplayed(),{
            timeout:2000,timeoutMsg:"admission fee text field is not displayed"
        })
        await browser.waitUntil(()=>this.hallcharge.isDisplayed(),{
            timeout:2000,timeoutMsg:"hallcharge text field is not displayed"
        })
        await browser.waitUntil(()=>this.nextBtn.isClickable(),{
            timeout:2000,timeoutMsg:"next button text field is not clickable"
        })
    }
    async GradeVerification2(){
        await browser.waitUntil(()=>this.plusbtn.isClickable(),{
            timeout:2000,timeoutMsg:"plus button text field is not clickable"
        })
        await browser.waitUntil(()=>this.rangeF.isDisplayed(),{
            timeout:2000,timeoutMsg:"range text field is not displayed"
        })
        await browser.waitUntil(()=>this.rangeC.isDisplayed(),{
            timeout:2000,timeoutMsg:"range text field is not displayed"
        })
        await browser.waitUntil(()=>this.rangeB.isDisplayed(),{
            timeout:2000,timeoutMsg:"range text field is not displayed"
        })
        await browser.waitUntil(()=>this.rangeA.isDisplayed(),{
            timeout:2000,timeoutMsg:"range text field is not displayed"
        })
        await browser.waitUntil(()=>this.rangeS.isDisplayed(),{
            timeout:2000,timeoutMsg:"range text field is not displayed"
        })
        await browser.waitUntil(()=>this.gradecharF.isDisplayed(),{
            timeout:2000,timeoutMsg:"grade text field is not displayed"
        })
        await browser.waitUntil(()=>this.gradecharC.isDisplayed(),{
            timeout:2000,timeoutMsg:"grade text field is not displayed"
        })
        await browser.waitUntil(()=>this.gradecharB.isDisplayed(),{
            timeout:2000,timeoutMsg:"grade text field is not displayed"
        })
        await browser.waitUntil(()=>this.gradecharA.isDisplayed(),{
            timeout:2000,timeoutMsg:"grade text field is not displayed"
        })
        await browser.waitUntil(()=>this.gradecharS.isDisplayed(),{
            timeout:2000,timeoutMsg:"grade text field is not displayed"
        })
    }

    }
    module.exports = new gradePage()