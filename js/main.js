const btnMenu = document.querySelector("#header__menu");
const menu = document.querySelector(".header__links");
const overlay = document.querySelector("#overlay");
const header = document.querySelector(".header");
const backToTop = document.querySelector(".top");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
  if (window.pageYOffset > 100) {
    backToTop.classList.add("showtop");
  } else {
    backToTop.classList.remove("showtop");
  }
});

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("bx-x");
  menu.classList.toggle("showlinks");
  overlay.classList.toggle("showoverlay");
});

window.onscroll = () => {
  btnMenu.classList.remove("bx-x");
  menu.classList.remove("showlinks");
  overlay.classList.remove("showoverlay");
};

overlay.addEventListener("click", () => {
  btnMenu.classList.toggle("bx-x");
  menu.classList.toggle("showlinks");
  overlay.classList.toggle("showoverlay");
});
