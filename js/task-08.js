const form = document.querySelector(".login-form")
const btn = document.querySelector("button")
function submitForm(ev) {

    ev.preventDefault();
    const {elements: { email, password }} = ev.currentTarget;
     if (email.value === "" || password.value === "") {
    return alert("Bсі поля повинні бути заповнені.");
  }
    console.log(email.value, password.value);
    ev.currentTarget.reset();
 //const formData = new FormData(ev.currentTarget)
}
form.addEventListener("submit",submitForm)

