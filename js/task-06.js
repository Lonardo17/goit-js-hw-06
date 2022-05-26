const input = document.querySelector('#validation-input')
const value = Number(input.dataset.length)
console.log(value)
input.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length !== value) {
        console.log(event.currentTarget.value.length)
        input.classList.add("invalid")
        input.classList.remove("valid")
    } else {
        console.log(event.currentTarget.value.length)
        input.classList.add("valid")
        input.classList.remove("invalid")
    }
})