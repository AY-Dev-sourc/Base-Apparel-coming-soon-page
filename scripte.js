let form = document.getElementById('form');
let emailInput = document.getElementById("emailInput");
let Error = document.getElementById("Error");
let valid = document.getElementById("valid");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = emailInput.value.trim()
    if (value == "" || value.includes('A')) {
        valid.classList.add('show');
        Error.classList.add('show');
        emailInput.style.backgroundColor = "hsl(0%,90%,40%)";
        emailInput.focus()
    } else if(emailInput.value.trim() !== "") {
        valid.classList.remove('show');
        Error.classList.remove('show');
    }
});