let header = document.querySelector(".header");

let slideIndex = 0;
let timer = null;

showSlides();

function showSlides() {
  if (slideIndex > 4) {slideIndex = 0}
  header.style.backgroundImage = "url('./images/carroucel"+slideIndex+".svg')";
  slideIndex++;
  timer = setTimeout(showSlides, 7000); 
}
const nav = document.querySelector(".header-box");

window.addEventListener('scroll', e=> {
  
  if (window.scrollY > header.clientHeight) {
    nav.classList.add("fixed")
  } else {
    nav.classList.remove("fixed");
  }

})