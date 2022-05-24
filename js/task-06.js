const input = document.querySelector('#validation-input')
const value = input.dataset.length
input.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length > value) {
        input.classList.add("invalid")
    }else input.classList.add("valid")
})