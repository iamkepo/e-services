const puppeteer = require('puppeteer');
const month = '09';
const year = '2020';
(async () => {
	const browser = await puppeteer.launch({headless: true});
	const page = await browser.newPage();
	await page.goto(`https://www.imdb.com/movies-coming-soon/${year}-${month}`);
	const movies = await page.evaluate(() => {
		let movies = [];
		let elements = document.querySelectorAll('div.list_item');
		for (element of elements) {
			movies.push({
				img: element.querySelector('img.poster')?.src,
				title: element.querySelector('td.overview-top a')?.text.trim(),
				time: element.querySelector('p.cert-runtime-genre time')?.textContent,
				description: element.querySelector('div.outline')?.textContent.trim()
			})
		}
		return movies;
	});
	console.log(movies);
	await browser.close();
})();