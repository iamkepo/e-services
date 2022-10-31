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
const recolt = (index) => {
  console.log(index);
  const noeud = "div .isv-r.PNCib.MSM1fd.BUooTd";
  let elements = document.querySelectorAll(noeud);
  let element = index <= elements.length-1 ? elements[index] : elements[elements.length-1];
  element.childNodes[1].click();
  return ({
    url: decodeURIComponent(element.childNodes[1].href.replace("https://www.google.com/imgres?imgurl=", "").split('&')[0]),
    base64: element.childNodes[1].childNodes[0].childNodes[0].src,
    source: element.childNodes[2].href,
    name: element.childNodes[2].childNodes[0].textContent,
    base: element.childNodes[2].childNodes[1].textContent,
  })
}
const recolts = (limit) => {
  const noeud = "div .isv-r.PNCib.MSM1fd.BUooTd";
  let tab = [];
  let elements = document.querySelectorAll(noeud);
  let end = limit <= elements.length-1 ? limit : elements.length-1;
  elements.forEach((element, i) => {
    if (i <= end) {
      element.childNodes[1].click();
      tab.push({
        url: decodeURIComponent(element.childNodes[1].href.replace("https://www.google.com/imgres?imgurl=", "").split('&')[0]),
        base64: element.childNodes[1].childNodes[0].childNodes[0].src,
        source: element.childNodes[2].href,
        name: element.childNodes[2].childNodes[0].textContent,
        base: element.childNodes[2].childNodes[1].textContent,
      })
    } else {
      return tab;
    }
  })
}
module.exports = { autoScroll, recolt, recolts }; 