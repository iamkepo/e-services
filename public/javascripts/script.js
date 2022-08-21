window.addEventListener('load', (e) => { window.scrollTo(0, 0) })
let header = document.querySelector(".header");

let slideIndex = 0;
let timer = null;

showSlides();

function showSlides() {
  if (slideIndex > 3) {slideIndex = 0}
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

const send = (data) => {
  axios({
    method: "post",
    url: 'http://localhost:3000/api/public/stock/post', 
    data: {
      data: data,
      table: "messages"
    }
  })
  .then((response) => {
    document.querySelector(".nom").value = "";
    document.querySelector(".email").value = "";
    document.querySelector(".message").value = "";
    alert("Votre message été envoyer avec succès");
    document.querySelector(".close").click();
  })
  .catch((err) => {
    console.log(err);
    alert("Désolé votre message ne peut être envoyer")
  });
}
function isEmpty() {
  let data = {
    nom: document.querySelector(".nom").value,
    email: document.querySelector(".email").value,
    message: document.querySelector(".message").value
  };
  for (const key in data) {
    if (data[key] === "") {
      alert("Le champ "+key+" est vide");
      return;
    }
  }
  send(data);
}