const puppeteer = require('puppeteer');
// const fs = require('fs/promises');
var path = require('path');

// require("dotenv").config();


const screenshot = async (URL) => {
    
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: "networkidle2" });
  console.log("goto page: "+URL);
  await page.setViewport({
    width: 1500,
    height: 10000
  });
  await page.screenshot({
    path: path.join(__dirname, '../data/other/')+"image.png",
  })
	await browser.close();
};



module.exports = {
  get: screenshot
};