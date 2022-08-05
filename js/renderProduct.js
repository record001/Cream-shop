let productFrag = document.createDocumentFragment();

function renderProduct() {
  productList.forEach((product, index) => {
    if (index === 6) {
      let productBannerWrapper = document.createElement("div");
      productBannerWrapper.classList.add("product__banner-wrapper");

      productBannerWrapper.innerHTML += `
        <div class="product__banner">
        <h4>At vero eos et accusamus et iusto odio dignissimos</h4>
        <p>Winnie Harlow</p>
      </div>

    
    </div>
        `;

      productFrag.appendChild(productBannerWrapper);
    } else {
      let productBox = document.createElement("div");
      productBox.classList.add("product__box");

      // here is rendering
      productBox.innerHTML += `
            <div class="product__info">
           
            <div class="product__label-wrapper">
             ${
               product.new
                 ? `<span class="product__label product__label--new ">new</span>`
                 : ""
             }
             ${
               product.sale
                 ? `<span class="product__label product__label--sale ">sale</span>`
                 : ""
             }
             </div>
             
            <img
              src=${product.img}
              alt="product__image"
              class="product__image"
            />

            <a href="#!" class="product__cta">+ Quick Shop</a>
          </div>
          <div class="product__details">
            <h2 class="product__title">
              ${product.description}
            </h2>
            <h4 class="product__price">${product.price} <span>${
        product.old_price && product.old_price
      }</span></h4>
      

          </div>
            
            `;

      productFrag.appendChild(productBox);
    }
  });

  document.querySelector(".product__wrapper").appendChild(productFrag);
}

renderProduct();
