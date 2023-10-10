var main = document.querySelector(".main");
var nav = document.querySelector(".bottom-nav");

window.onscroll = function () {
  if (window.pageYOffset > main.offsetHeight - nav.offsetHeight) {
    nav.classList.remove("bottom-nav");
    nav.classList.add("top-nav");
  } else {
    nav.classList.add("bottom-nav");
    nav.classList.remove("top-nav");
  }
};

function myFunction() {
  var x = document.getElementById("burger");
  if (x.classList.contains("responsive")) {
    x.classList.remove("responsive");
  } else {
    x.classList.add("responsive");
  }
}
