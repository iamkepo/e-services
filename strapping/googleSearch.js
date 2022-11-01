const puppeteer = require("puppeteer");
const { autoScroll, recoltImages } = require("../helper/utile");

const getGoogleImages = async (query, callback) => {
    
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

  try {

    console.log("goto page: https://www.google.com/search?q="+encodeURIComponent(query));
    await page.goto('https://www.google.com/search?q='+encodeURIComponent(query), { timeout: 0 });
      
    const onglet = await page.evaluate(() => 'https://www.google.com'+document.querySelector(".hdtb-mitem a").attributes.href.value);

    try {

      console.log("goto page: "+onglet);
      await page.goto(onglet, { timeout: 0 });

      await autoScroll(page);

      const data = await page.evaluate(recoltImages);
  
      await browser.close();
      callback(false, data);
  
    } catch (error1) {
      await browser.close();
      callback(error1, false);
    }

  } catch (error) {
    await browser.close();
    callback(error, false);
  }

};

module.exports = { getGoogleImages }; 