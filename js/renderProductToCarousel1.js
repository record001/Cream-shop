function renderProductsToCarousel1() {
    let owl_carousel =document.querySelector(".owl-carousel")
    console.log(owl_carousel);
    products.forEach(item => {
      owl_carousel.innerHTML += `
      <div class="item">
        <div class="product-box">
            <span class=${item.new && "product__badge--new"}>${item.new? "new" : ""}</span>
            <span class=${item.sale && "product__badge--sale"}>${item.sale? "sale" : ""}</span>
        
    
            <img
            class="product__image"
            src=${item.img}
            alt="smo"
            />
    
            <a class="product__cta" href="#!">+ Quick Shop</a>

       </div>
    
            <div class="product__details">
                <p class="product__title">
                    ${item.description}
                </p>
                <p class="product__price">${item.price} <span>${item.old_price && item.old_price}</span></p>
            </div>
      
      
    </div>
      `
      
      
    });
  }
  
  renderProductsToCarousel1()
  