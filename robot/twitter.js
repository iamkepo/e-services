const puppeteer = require("puppeteer");
require("dotenv").config();

const url = "https://twitter.com/i/flow/login";

const connexion = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { timeout: 0 });

  // cookie
  // await page.click(".mt3GC > button");

  // login
  // await page.waitForSelector("input[name=username]", { visible: true });
  // await page.type("input[name=username]", process.env.INSTA_USER, { delay: 100 });
  // await page.type("input[name=password]", process.env.INSTA_PASS, { delay: 100 });

  // await page.click("button[type=submit]");

  // // auto connect
  // await page.waitForSelector(".cmbtv > button", { visible: true });
  // await page.click(".cmbtv > button");

  // notif
  // await page.waitForSelector(".mt3GC > button", { visible: true });
  // await page.click(".mt3GC > button");

  //debugger;
  // await browser.close();
};

module.exports = {
  connexion: connexion
};