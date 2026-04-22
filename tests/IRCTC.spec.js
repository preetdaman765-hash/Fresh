const {test,expect}=require('@playwright/test')
test('IRCTC',async({page})=>{


  await page.goto('https://www.irctc.co.in/nget/train-search')
  await page.getByRole("searchbox").first().fill('Delhi')
  
await page.waitForTimeout(1000)   // dropdown aawan layi
await page.keyboard.press('ArrowDown')
await page.keyboard.press('Enter')

  await page.getByRole("searchbox").nth(1).fill('Budhlada')
  
await page.waitForTimeout(1000)   // dropdown aawan layi
await page.keyboard.press('ArrowDown')
await page.keyboard.press('Enter')

  await page.getByText(' Search Trains ').click()
await page.waitForTimeout(3000)
   // await page.locator("//*[@id='origin']").fill('Delhi')
  // await page.locator("//*[@id='destination']").fill("budhlada")

})