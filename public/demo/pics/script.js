window.addEventListener('load', e=> {
  
  window.scrollTo(0, 0);
  
  search('Enter')

})
function search(key) {
  if (key == 'Enter') {
    let query = document.querySelector('.query').value;
    let limit = document.querySelector('.limit').value;
    document.querySelector('.loader').style.display = "flex";
    axios({
      method: "get",
      url: window.location.origin+'/api/public/pics/'+query+'/'+limit
    })
    .then((response) => {
      // console.log(response.data);
      let section = "";
      response.data.forEach(el => {
        section = section.concat(`<article class="article"><img src="${el.url}" alt="${el.name}" /></article>`)
      });
      document.querySelector('.section').innerHTML = section;
      document.querySelector('.loader').style.display = "none";
    })
    .catch((err) => {
      console.log(err);
      document.querySelector('.loader').style.display = "none";
    });
  }
}