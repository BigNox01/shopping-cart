let re = document.getElementById('return_icon');
let cart=document.getElementById('cart_icon')
function return_page() {
    window.location.href="volkswagen_selection.html";
}
re.addEventListener("click",return_page)
function cart_page() {
    window.location.href="the_cart.html";
}
cart.addEventListener('click',cart_page);