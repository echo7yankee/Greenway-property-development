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
  const scrollDivide = 2.5;

  class UiHome {
    showAbout() {
      if (window.scrollY > leftAboutTop / scrollDivide) {
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

function contactInit() {
  const form = document.querySelector(".contact__form");
  const inputName = document.getElementById("input-name");
  const inputEmail = document.getElementById("input-email");
  const inputMessage = document.querySelector(".input-msg");
  const inputSubject = document.getElementById("input-subject");
  const parentMesage = document.querySelector(".contact__form-alertContainer");
  console.log(inputMessage);

  const alertMessage = document.createElement("p");
  alertMessage.classList.add("contact__form-alert");
  parentMesage.appendChild(alertMessage);

  function alertText(type) {
    if (type === "success") {
      alertMessage.classList.remove("error");
      alertMessage.classList.add("success");
      alertMessage.textContent = "Proceed further to confirm your message";
    } else if (type === "error") {
      alertMessage.classList.remove("success");
      alertMessage.classList.add("error");
      alertMessage.textContent = "Please complete all the fields";
    }
  }

  form.addEventListener("submit", e => {
    if (
      inputName.value === "" &&
      inputEmail.value === "" &&
      inputSubject.value === "" &&
      inputMessage.value === ""
    ) {
      e.preventDefault();
      alertText("error");
    } else if (inputEmail.value === "") {
      e.preventDefault();
      alertText("error");
    } else if (inputName.value === "") {
      e.preventDefault();
      alertText("error");
    } else if (inputSubject.value === "") {
      e.preventDefault();
      alertText("error");
    } else if (inputMessage.value === "") {
      e.preventDefault();
      alertText("error");
    } else {
      alertText("success");
    }
  });

  navbarInit();
}

function whatWeDo() {
  const capabilitiesLeft = document.querySelectorAll(".capabilities__leftSide");
  const capabilitiesRight = document.querySelectorAll(
    ".capabilities__rightSide"
  );
  const scrollDivide = 2;

  capabilitiesLeft.forEach(capability => {
    const capabalityTop = capability.getBoundingClientRect().top;
    window.addEventListener("scroll", () => {
      if (window.scrollY > capabalityTop / scrollDivide) {
        capability.classList.add("show-capabilities");
      }
    });
  });

  capabilitiesRight.forEach(capability => {
    const capabalityTop = capability.getBoundingClientRect().top;
    window.addEventListener("scroll", () => {
      if (window.scrollY > capabalityTop / scrollDivide) {
        capability.classList.add("show-capabilities");
      }
    });
  });

  navbarInit();
}

function experience() {
  navbarInit();
}

function ourTeam() {
  /*   const cards = document.querySelectorAll(".team__card"); */
  const cards = document.querySelectorAll(".team__card-column");

  function enterHandler() {
    this.classList.add("active-card");
    this.classList.add("active-about");
    this.classList.add("active-img");
  }
  function leaveHandler() {
    this.classList.remove("active-card");
    this.classList.remove("active-about");
    this.classList.remove("active-img");
  }

  cards.forEach(card => {
    card.addEventListener("mouseenter", enterHandler);
    card.addEventListener("mouseleave", leaveHandler);
  });

  navbarInit();
}
