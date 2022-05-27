const input = document.querySelector('#validation-input')
const value = Number(input.dataset.length)
input.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === value) {
      
        change("valid","invalid")
    } else {
        change("invalid", "valid")
    }
})
function change(add, remove){
input.classList.add(add)
input.classList.remove(remove)
}