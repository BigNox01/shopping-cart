var Golf=document.getElementById('golf-button');
var arteon=document.getElementById('arteon-button');
var atlas=document.getElementById('atlas-button');
var re=document.getElementById('return_icon');
function golf_page(){
    window.location.href="volkswagen_details.html"
}
function arteon_page(){
    window.location.href="arteon.html"
}
function atlas_page(){
    window.location.href="atlas.html"
}
function return_page() {
    window.location.href="shopping_cart.html";
}
Golf.addEventListener("click",golf_page);
arteon.addEventListener("click",arteon_page);
atlas.addEventListener("click",atlas_page);
re.addEventListener("click",return_page);