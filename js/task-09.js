const btn = document.querySelector(".change-color");
const colorBody = document.querySelector("body");
const colorNow = document.querySelector(".color")
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16) .padStart(6, 0)}`;
}

btn.addEventListener("click", () => {
  const el = getRandomHexColor();
  colorBody.style.backgroundColor = el;
  colorNow.textContent = el;
})