const puppeteer = require('puppeteer');
const { ObjectId } = require('mongodb');
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
      tab.push({
        name: element.textContent.trim(),
        licence: "",
        source: "",
        link:element.attributes.href.value
      })
    }
    return tab;
  });
  await connect.db.collection("group_icons").insertMany(tags);
  console.log(tags);
  tags.forEach(async (tag) => {
    await page.goto(`https://react-icons.github.io${tag.link}`, { timeout: 0 });
    console.log("goto page: "+`https://react-icons.github.io${tag.link}`);
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
          group_id: tag._id
        })
      }
      return {tab, infos};
    });
    
    await connect.db.collection("icons").insertMany(data.tab).then((response)=>{
      console.log(response);
    });
    await connect.db.collection("group_icons")
    .updateOne({_id: ObjectId(tag._id)},
    { $set: { name: data.infos.name, licence: data.infos.licence, source: data.infos.source, link: `https://react-icons.github.io${tag.link}` } })
    .then((response)=>{
      console.log(response);
    });
  });
	await browser.close();
};



module.exports = {
  get: geticons
};