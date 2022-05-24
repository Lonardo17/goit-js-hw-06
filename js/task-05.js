const textInput = document.querySelector("#name-input");
const rename = document.querySelector('#name-output');

textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value !== "") {
        rename.textContent = event.currentTarget.value
    } else{rename.textContent = "Anonymous"}
console.log(event.currentTarget.value)
});
