var re = document.getElementById("return-icon");
var Menu = document.getElementById("main-menu");
var Clear = document.getElementById("Clear");
const containers= document.querySelectorAll(".main-container");
var incrementButtons= document.querySelectorAll(".plus-button");
var decrementButtons= document.querySelectorAll(".minus-button");
let outputNumbers= document.querySelectorAll('.output-number');
let car_price= document.querySelectorAll('.Price');
const heart= document.querySelectorAll('.heart_icon');
let current_value=[];
function main_menu() {
    window.location.href="shopping_cart.html";
}
function last_page(){
    window.location.href="atlas.html";
}
Menu.addEventListener("click",main_menu);
re.addEventListener("click",last_page);
//change the color of the heart icons
heart.forEach(icon=>{
    icon.addEventListener("click",function(){
        const currentColors=this.getAttribute('colors');
        if (currentColors === "outline:#121331,primary:#f28ba8,secondary:#ebe6ef") {
            this.setAttribute('colors', "outline:#f28ba8,primary:#121331,secondary:#ebe6ef");
        } else {
            this.setAttribute('colors', "outline:#121331,primary:#f28ba8,secondary:#ebe6ef");
        }
    });
});

// initialize the variables of the quantity number and the prices and update the html content
outputNumbers.forEach((outputNumber,index)=> {
current_value[index]=0;
outputNumber.textContent=current_value[index];
});

car_price.forEach((price,index)=>{
current_value[index];
price.textContent=price[index];
})
// function to increment the variables
function increment(index,pricing) {
    current_value[index]++;
    outputNumbers[index].textContent=current_value[index];
    car_price[index].textContent=(current_value[index]*pricing).toFixed(2);
}
// function to decrement
function decrement(index,pricing) {
    current_value[index]--;
    outputNumbers[index].textContent=current_value[index];
    car_price[index].textContent=(current_value[index]*pricing).toFixed(2);
}
// link the increment function to the buttons
const car_image=document.querySelectorAll('.car-image')
incrementButtons.forEach((button,index)=>{
button.addEventListener('click',()=>{
    let price;
    // check the source of the image
    const car_image=button.closest('.main-container').getAttribute('id');
    // now for the commands of the pricing system based on car model
    if (car_image==="Atlas") {
    price=36.445;
    } else if (car_image==="Golf") {
    price=35.190;
    } else {
    price =50.175;
    }
    increment(index,price);
})
});
//link the decrement function to the buttons
decrementButtons.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        // check the source of the image
        const car_image=button.closest('.main-container').getAttribute('id');
        let price;
        // now for the commands of the pricing system based on car model
        if (car_image==="Atlas") {
        price=36.445;
        } else if (car_image==="Golf") {
        price=35.190;
        } else {
        price =50.175;
        }
        decrement(index,price)
    })});

// hide all the containers
function hide() {
containers.forEach(container=>{
    container.classList.remove('purchase-container');
});
};
Clear.addEventListener("click",()=>{hide();})