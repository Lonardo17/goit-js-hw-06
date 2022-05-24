const allCategory = document.querySelectorAll(".item");

console.log(`Number of categories: ${allCategory.length}`);

for (let item of allCategory) {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
}
