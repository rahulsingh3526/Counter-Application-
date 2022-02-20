const count = document.querySelector(".count");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const resetNum = document.querySelector(".reset");

add.addEventListener("click",increase)
subtract.addEventListener("click",negative)
resetNum.addEventListener("click",reset)
  
function increase(){
  count.innerHTML++;
  if (count.innerHTML >0){
    count.style.color = "#00ff00"; 
}
}
function negative(){
  count.innerHTML--;
  if (count.innerHTML <0){
    count.style.color = "#ffff00";  
} 
}
function reset(){
  count.innerHTML = 0;
  if (count.innerHTML ==0){
    count.style.color = "#99ffdd";
}
}

