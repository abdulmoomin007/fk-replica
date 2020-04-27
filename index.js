document.getElementById("electronics").addEventListener("mouseover",function(){
    console.log("Electronics Clicked")
})

document.getElementById("tv-appliances").addEventListener("mouseover",function(){
    console.log("TVs and Appliances Clicked")
})

document.getElementById("men").addEventListener("mouseover",function(){
    console.log("Men Clicked")
})

document.getElementById("women").addEventListener("mouseover",function(){
    console.log("Women Clicked")
})

document.getElementById("baby").addEventListener("mouseover",function(){
    console.log("Baby and Kids Clicked")
})

document.getElementById("sports").addEventListener("mouseover",function(){
    console.log("Sports, Books and More Clicked")
})

document.getElementById("login").addEventListener("click",function(){
    console.log("login clicked")
})

document.getElementById("cart").addEventListener("click",function(){
    console.log("cart clicked")
})

document.getElementById("search").addEventListener("click",function(){
    console.log("search icon clicked")
    console.log(document.getElementsByClassName("search-bar")[0].value)
})