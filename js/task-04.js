const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const result = document.querySelector("#value");
let counterValue = 0;

function decrementFun(){
    counterValue -= 1
    result.textContent=counterValue;
};
function incrementFun(){
    counterValue += 1
    result.textContent=counterValue;
};
decrement.addEventListener("click", decrementFun)
increment.addEventListener("click", incrementFun)
