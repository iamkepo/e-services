const getOnglet = () => {
  let els = document.querySelectorAll(".hdtb-mitem a");
  for (let i = 0; i < els.length; i++) {
    if (els[i].textContent == "Images") {
      return 'https://www.google.com'+els[i].attributes.href.value
    }
  }
}
async function autoScroll(page){
  await page.setViewport({ width: 1020, height: 700 })
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      var totalHeight = 0;
      var distance = 100;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if(totalHeight >= scrollHeight - window.innerHeight){
          clearInterval(timer);
          resolve();
        }
      }, 150);
    });
  });
}
const recoltImages = () => {
  const noeud = "div .isv-r.PNCib.MSM1fd.BUooTd";
  let tab = [];
  let elements = document.querySelectorAll(noeud);
  elements.forEach((element, i) => {
    element.childNodes[1].click();
    tab.push({
      url: decodeURIComponent(element.childNodes[1].href.replace("https://www.google.com/imgres?imgurl=", "").split('&')[0]),
      source: element.childNodes[2].href,
      name: element.childNodes[2].childNodes[0].textContent,
      base: element.childNodes[2].childNodes[1].textContent,
    })
  })
  return tab;
}
module.exports = { autoScroll, recoltImages, getOnglet }; 