const menuliderbar = document.querySelectorAll(".site-nav")
menuliderbar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
       menu.classList.toggle("block")
    })
})

const itemsliderbar = document.querySelectorAll(".cartegory-left-li")
itemsliderbar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
       menu.classList.toggle("block")
    })
})

const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem,X){
   imgItem.addEventListener("click",function(){
        bigImg.src= imgItem.src
    })
})