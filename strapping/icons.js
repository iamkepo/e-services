const puppeteer = require('puppeteer');
var connect = require('../helper/connect');

require("dotenv").config();

const baseURL = `https://react-icons.github.io`;
const home = "/react-icons/";

const geticons = async () => {
    
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto(baseURL+home, { waitUntil: "networkidle2" });
  console.log("goto page: "+baseURL+home);
  const tags = await page.evaluate(() => {
    let tab = [];
    let elements = document.querySelectorAll("li a");
    for (element of elements) {
      tab.push(element.attributes.href.value)
    }
    return tab;
  });
  for (let i = 1; i < tags.length; i++) {
    await page.goto(baseURL+tags[i], { timeout: 0 });
    console.log("goto page: "+baseURL+tags[i]);
    const  data = await page.evaluate(() => {
      let infos = {
        name: document.querySelector(".main")?.textContent.trim(),
        licence: document.querySelectorAll(".iconset--info td a")[0]?.textContent.trim(),
        source: document.querySelectorAll(".iconset--info td a")[1]?.textContent.trim()
      };
      let tab = [];
      let elements = document.querySelectorAll(".icons .item");
      for (element of elements) {
        tab.push({
          svg: element.querySelector('.icon')?.innerHTML,
          name: element.querySelector('.name')?.textContent.trim(),
          group: infos
        })
      }
      return tab;
    });
    
    await connect.db.collection("icons").insertMany(data).then((response)=>{
      console.log(response);
    });
  }
	await browser.close();
};



module.exports = {
  get: geticons
};