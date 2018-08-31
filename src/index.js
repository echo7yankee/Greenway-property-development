//preloader
const preloader = document.querySelector(".preloader");
//navbar
const navbar = document.querySelector(".header__navbar");
const navbarBtn = document.querySelector(".menu");
const menuAnimate = document.querySelector(".menu__one");

class UiHome {
  hidePreloader() {
    preloader.classList.add("hide-preloader");
  }
  showNavbar() {
    navbar.classList.toggle("show-navbar");
    menuAnimate.classList.toggle("menu__two");
  }
}

function eventListeners() {
  const ui = new UiHome();

  //hide preloader
  window.addEventListener("load", () => ui.hidePreloader());
  //Navbar Btn
  navbarBtn.addEventListener("click", () => ui.showNavbar());
}
eventListeners();
