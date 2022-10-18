class tablePage {

    get scrollToView()
    {
        return $("//input[@type='search']")
    }
    get searchBox()
    {
        return $("//input[@type='search']")
    }
    get tableValue1()
    {
        return $(`//table[@id='example1']/tbody/tr[last()]/td[2]`)
    }
    get tableValue2()
    {
        return $(`//table[@id='example1']/tbody/tr[last()]/td[3]`)
    }
    get tableValue3()
    {
        return $(`//table[@id='example1']/tbody/tr[last()]/td[4]`)
    }
    get tableValue4()
    {
        return $(`//table[@id='example1']/tbody/tr[last()]/td[5]`)
    }
    set tableValue(commonname)
    {
        return $(`//table[@id='example1']/tbody/tr/td[.="${commonname}"]`)
    }
    get deletebtn()
    {
        return $("//a[.='Delete']")
    }
    get yesbtn()
    {
        return $("//a[@id='btnYes']") 
    }
    async searchBoxVerification(){
        await browser.waitUntil(()=>this.searchBox.isDispalyed(),{
            timeout:4000,timeoutMsg:"search box text field is not Displayed"
        })
    }
    async DeleteVerification(){
        await browser.waitUntil(()=>this.deletebtn.isClickable(),{
            timeout:2000,timeoutMsg:"delete button is not clickable"
        })
        await browser.waitUntil(()=>this.yesbtn.isClickable(),{
            timeout:2000,timeoutMsg:"yes button text field is not clickable"
        })
    }
}
module.exports =new tablePage()