const input = document.querySelector('#validation-input')
const value = input.dataset.length
input.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length != value) {
        input.classList.add("invalid")
        input.classList.remove("valid")
    } else {
        input.classList.add("valid")
        input.classList.remove("invalid")
    }
})