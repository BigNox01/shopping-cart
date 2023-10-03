var cart=document.getElementById('shopping_cart')
var re=document.getElementById('return_icon')
function cart_page(){
    window.location.href="the_cart.html";
}
cart.addEventListener("click",cart_page);
function return_page() {
    window.location.href="volkswagen_selection.html";
}
re.addEventListener("click",return_page)