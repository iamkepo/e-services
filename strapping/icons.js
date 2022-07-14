const puppeteer = require('puppeteer');
const fs = require('fs/promises');

const baseURL = `https://react-icons.github.io/react-icons/icons?name=`;

let tags = ["ai","bs","bi","di","fi","fc","fa","gi","go","gr","hi","im","io","io5","md","ri","si","tb","ti","vsc","wi","cg"];
let browser = null;
let page = null;

const geticons = async () => {
    
  browser = await puppeteer.launch({headless: true});
  page = await browser.newPage();

  let data = [];

  // for (let i = 0; i < tags.length; i++) {
  //   data[i] = await getlist(tags[i]);
  // }
  data[0] = await getlist(tags[0]);
	
	console.log("ok");
  await fs.writeFile("icons.json", JSON.stringify(data))
	await browser.close();
};

const getlist = async (tag) => {
  await page.goto(baseURL+tag);
  const icons = await page.evaluate(() => {
    let infos = {
      name: document.querySelector(".main")?.textContent.trim(),
      licence: document.querySelectorAll(".iconset--info td a")[0]?.textContent.trim(),
      source: document.querySelectorAll(".iconset--info td a")[1]?.textContent.trim()
    };
    let tab = [];
    let elements = document.querySelectorAll(".icons .item");
    for (element of elements) {
      tab.push({
        svg: element.querySelector('svg'),
        name: element.querySelector('.name')?.textContent.trim()
      })
    }
    return {... infos, icons: tab};
  });
  
  return icons;
}

module.exports = {
  get: geticons
};