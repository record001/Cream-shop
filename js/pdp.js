// render images to PDP section



// action counter
function addToCart() {
    let minus = document.querySelector("#minus")
    let plus = document.querySelector("#plus")
    let count = document.querySelector("#count")

    plus.addEventListener("click", ()=>{
        count.innerHTML ++
    })
    minus.addEventListener("click", ()=>{
        count.innerHTML --
    })
}
addToCart()

function actionToQA() {
    let icons = document.querySelectorAll(".fa-sol1")
    
    icons.forEach(item => {
        item.addEventListener("click", (e)=> {

            e.target.parentElement.nextElementSibling.classList.toggle("opacity-1")

            
            if(!e.target.classList.contains("dn")) {
                e.target.classList.add("dn")
                e.target.nextElementSibling.classList.add("db")
                
            }else {
                e.target.classList.remove("db")
                e.target.previousElementSibling.classList.remove("dn")

            }
        })
    })


}
actionToQA()


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

