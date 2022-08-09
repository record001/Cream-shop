function addToCart() {
    let plus  = document.querySelectorAll(".fa-plus")
    let minus  = document.querySelectorAll(".fa-minus")
    let count = document.querySelectorAll(".count")
    let price = ""
    plus.forEach(item => {
        item.addEventListener("click", e => {
            e.target.previousElementSibling.innerHTML ++
            let a = e.target.previousElementSibling.textContent
          
            
            e.target.parentElement.nextElementSibling.nextElementSibling.innerHTML  = `$${28*a}.00`

             
        })

      
    })
    minus.forEach(item => {
        item.addEventListener("click", e => {
            e.target.nextElementSibling.innerHTML --
            let b =  e.target.nextElementSibling.textContent
            
            e.target.parentElement.nextElementSibling.nextElementSibling.innerHTML  = `$${28*b}.00`



        })
    })

   console.log(price);
   
}
addToCart()