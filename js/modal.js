let menu = document.querySelector("#open-modal");
let modal = document.querySelector(".modal");
let body = document.querySelector("body");
// document.querySelector(".header").addEventListener("click", () => {
//   modal.classList.remove("add-modal");
// });
menu.addEventListener("click", () => {
  console.log("ok");
  // window.onscroll = function () { window.scrollTo(0, 0); };
  // modal.style.transform = "translateX(0px)"
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

// render products
let product_wrapper =document.querySelector(".slider")

products.forEach(item => {
  product_wrapper.innerHTML += `
  <div class=" slider__item">
  <div class="product-box">
     <span class=${item.new && "product__badge--new"}>${item.new? "new" : ""}</span>
     <span class=${item.sale && "product__badge--sale"}>${item.sale? "sale" : ""}</span>
    

    <img
      class="product__image"
      src=${item.img}
      alt="smo"
    />

    <a class="product__cta" href="#!">+ Quick Shop</a>

    <div class="product__details">
    <p class="product__title">
      ${item.description}
    </p>
    <p class="product__price">${item.price} <span>${item.old_price && item.old_price}</span></p>
  </div>
  </div>
  
</div>
  `
  
});
