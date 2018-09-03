//preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});

function dynamicDate() {
  //dynamic date
  const footerDate = document.getElementById("footer__date");

  const date = new Date().getFullYear();
  footerDate.textContent = date;
}

function navbarInit() {
  //navbar
  const navbar = document.querySelector(".header__navbar");
  const navbarBtn = document.querySelector(".menu");
  const menuAnimate = document.querySelector(".menu__one");

  class UiNav {
    showNavbar() {
      navbar.classList.toggle("show-navbar");
      menuAnimate.classList.toggle("menu__two");
    }
  }

  function navEventListeners() {
    const ui = new UiNav();
    //Navbar Btn
    navbarBtn.addEventListener("click", () => ui.showNavbar());
  }
  navEventListeners();
  dynamicDate();
}

function indexInit() {
  //about
  const leftAbout = document.querySelector(".hide-left");
  let leftAboutTop = leftAbout.getBoundingClientRect().top;
  const rightAbout = document.querySelector(".hide-right");

  class UiHome {
    showAbout() {
      if (window.scrollY > leftAboutTop / 1.25) {
        leftAbout.classList.add("show-about");
        rightAbout.classList.add("show-about");
      }
    }
  }

  function indexEventListeners() {
    const ui = new UiHome();
    //show about
    window.addEventListener("scroll", () => ui.showAbout());
  }
  indexEventListeners();
  navbarInit();
  dynamicDate();
}
