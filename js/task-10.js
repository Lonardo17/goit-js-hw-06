const values = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const result = document.querySelector("#boxes");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
function createBoxes(amount) {
  const step = 10;
   for (let i = 0; i < amount; i++){
    const box = document.createElement("div");
    box.style.width = `${30 + step*i}px`;
    box.style.height = `${30 + step * i}px`;
     box.style.backgroundColor = getRandomHexColor();
    result.append(box)    
  }
  
}

function removeBoxes() {
  const del = result.querySelectorAll("div");
  for (let i of del) {
     i.remove();
  }
}
create.addEventListener("click",()=> createBoxes(values.value))
destroy.addEventListener("click", ()=> removeBoxes())