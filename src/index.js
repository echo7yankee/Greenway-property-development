//preloader
const preloader = document.querySelector(".preloader");
//navbar
const navbar = document.querySelector(".header__navbar");
const navbarBtn = document.querySelector(".menu");
const menuAnimate = document.querySelector(".menu__one");
//about
const leftAbout = document.querySelector(".hide-left");
let leftAboutTop = leftAbout.getBoundingClientRect().top;
const rightAbout = document.querySelector(".hide-right");
let rightAboutTop = rightAbout.getBoundingClientRect().top;
//dynamic date
const footerDate = document.getElementById("footer__date");

class UiHome {
  hidePreloader() {
    preloader.classList.add("hide-preloader");
  }
  showNavbar() {
    navbar.classList.toggle("show-navbar");
    menuAnimate.classList.toggle("menu__two");
  }

  showAbout() {
    console.log(window.scrollY);
    if (window.scrollY > leftAboutTop / 1.25) {
      leftAbout.classList.add("show-about");
      rightAbout.classList.add("show-about");
    }
  }
}

function eventListeners() {
  const ui = new UiHome();

  //hide preloader
  window.addEventListener("load", () => ui.hidePreloader());
  //Navbar Btn
  navbarBtn.addEventListener("click", () => ui.showNavbar());
  //show about
  window.addEventListener("scroll", () => ui.showAbout());
}
eventListeners();

//dynamic date
const date = new Date().getFullYear();
footerDate.textContent = date;
