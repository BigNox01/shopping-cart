var re = document.getElementById("return-icon");
var Menu = document.getElementById("main-menu");
var Clear = document.getElementById("Clear");
const containers= document.querySelectorAll(".main-container");
var incrementButtons= document.querySelectorAll(".plus-button");
var decrementButtons= document.querySelectorAll(".minus-button");
let outputNumbers= document.querySelectorAll('.output-number');
let current_value=[];
function main_menu() {
    window.location.href="shopping_cart.html";
}
function last_page(){
    window.location.href="atlas.html";
}
Menu.addEventListener("click",main_menu);
re.addEventListener("click",last_page);

// initialize the variables and update the html content
outputNumbers.forEach((outputNumber,index)=> {
current_value[index]=0;
outputNumber.textContent=current_value[index];
});
// function to increment the variables
function increment(index) {
    current_value[index]++;
    outputNumbers[index].textContent=current_value[index];
}
// function to decrement
function decrement(index) {
    current_value[index]--;
    outputNumbers[index].textContent=current_value[index];
}
// link the increment function to the buttons
incrementButtons.forEach((button,index)=>{
button.addEventListener('click',()=>increment(index))
});
//link the decrement function to the buttons
decrementButtons.forEach((button,index)=>{
button.addEventListener('click',()=>decrement(index));
});

// hide all the containers
function hide() {
containers.forEach(container=>{
    container.classList.remove('purchase-container');
});
};
Clear.addEventListener("click",()=>{hide();})