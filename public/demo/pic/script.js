window.addEventListener('load', e=> {
  
  window.scrollTo(0, 0);
  
  search('Enter')

})
function search(key) {
  if (key == 'Enter') {
    
    let query = document.querySelector('.query').value;
    let index = document.querySelector('.index').value;
    let img = document.querySelector('.article img');

    img.src = window.location.origin+'/api/public/pic/'+query+'/'+index;
    img.alt = query+' '+index
  }
}