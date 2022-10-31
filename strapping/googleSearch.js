const puppeteer = require("puppeteer");
const { autoScroll, recolt, recolts } = require("../helper/utile");

const getImage = async (query, index) => {
    
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  console.log("goto page: https://www.google.com/search?q="+encodeURIComponent(query));
  await page.goto('https://www.google.com/search?q='+encodeURIComponent(query), { timeout: 0 });

  const onglet = await page.evaluate(() => 'https://www.google.com'+document.querySelector(".hdtb-mitem a").attributes.href.value);

  console.log("goto page: "+onglet);
  await page.goto(onglet, { timeout: 0 });

  const  data = await page.evaluate(() => recolt(index));

  console.log(data);

	await browser.close();
};

const getImages = async (query, limit) => {
    
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  console.log("goto page: https://www.google.com/search?q="+encodeURIComponent(query));
  await page.goto('https://www.google.com/search?q='+encodeURIComponent(query), { timeout: 0 });

  const onglet = await page.evaluate(() => 'https://www.google.com'+document.querySelector(".hdtb-mitem a").attributes.href.value);

  console.log("goto page: "+onglet);
  await page.goto(onglet, { timeout: 0 });

  await autoScroll(page);

  const  data = await page.evaluate(() => recolts(limit));

  console.log(data.length);

	await browser.close();
};

module.exports = { getImage, getImages }; 