let following = document.querySelectorAll("button._acan._acap._acat"); 

let index = 0;
let timer = null;

function unfollow() {
  following[index].click();
  setTimeout(confirm, 500);
}
function confirm() {
  if (index === following.length) {
    console.log("end");
    return false;
  } else {
    document.querySelector("button._a9--._a9-_").click();
    timer = Math.floor(Math.random() * (30000 - 500) ) + 500;
    setTimeout(unfollow, timer);
    console.log("following: ["+(index)+"] -> timer: "+(timer)+" milliseconds ");
    index++;
  }
}

console.log(following.length);
unfollow();