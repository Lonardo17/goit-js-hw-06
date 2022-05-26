const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// let massage = [];
// for (let item of ingredients) {
//   const list = document.createElement("li");
//   list.textContent = item;
//   list.classList.add("item")
//   massage.push(list);
  
// }
const newArray = ingredients.map(el => {
  const list = document.createElement("li");
  list.textContent = el;
 list.classList.add("item");
  return list
})
const ul = document.querySelector("#ingredients");
// newArray.map(el => ul.append(el));
ul.append(...newArray)


