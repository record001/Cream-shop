let menu = document.querySelector("#open-modal");
let modal = document.querySelector(".modal");
let body = document.querySelector("body");

menu.addEventListener("click", () => {
  
  modal.classList.toggle("add-modal");
  body.classList.toggle("stop-scroll");
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      document.querySelector(".header__top-color").classList.add("nav-color");
    } else {
      document.querySelector(".header__top-color").classList.remove("nav-color");
  
    }
  });



