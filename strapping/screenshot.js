const puppeteer = require('puppeteer');
var path = require('path');
// require("dotenv").config();


const screenshot = async (URL, size) => {
    
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto("https://"+URL, { waitUntil: "networkidle2" });
  console.log("goto page: "+URL);
  await page.setViewport(size);
  await page.screenshot({
    path: path.join(__dirname, '../data/other/')+URL+size.width+"."+size.height+".png",
  });
	await browser.close();
  return path.join(__dirname, '../data/other/')+URL+size.width+"."+size.height+".png";
};



module.exports = {
  get: screenshot
};