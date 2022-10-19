
describe('spice jet booking',async()=>{
    
    it('enter url',async()=>{
        
        await browser.url("https://www.spicejet.com")
        await browser.maximizeWindow()
        await expect(browser).toHaveTitle("SpiceJet - Flight Booking for Domestic and International, Cheap Air Tickets")
    
    })
    it('booking for the trip',async()=>{
     

      var rounttrip=await browser.$("//div[@data-testid='round-trip-radio-button']//*[local-name()='svg']")
      await rounttrip.click()
      var returnDatecalander=await browser.$("//div[@data-testid='return-date-dropdown-label-test-id']")
      await returnDatecalander.click()
      var returnDate= await browser.$("//div[@data-testid='undefined-month-November-2022']//div[@data-testid='undefined-calendar-day-1']")

      await returnDate.click()
      await browser.$("//div[text()='Armed Forces']").click()
      await browser.$("//div[text()='Search Flight']").click()

    
    })
})