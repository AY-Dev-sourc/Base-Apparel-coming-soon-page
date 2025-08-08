let form = document.getElementById('form');
let emailInput = document.getElementById("emailInput");
let errorIcon = document.getElementById("Error");
let validMessage = document.getElementById("valid");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = emailInput.value.trim()
    if (value == "") {
        valid.classList.add('show');
        errorIcon.classList.add('show');
        validMessage.classList.add('invalid');
        // emailInput.focus()
    } else {
        valid.classList.remove('show');
        errorIcon.classList.remove('show');
        validMessage.classList.remove('invalid');
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.classList.contains('invalid')) {
        validMessage.classList.remove('show');
        errorIcon.classList.remove('show');
        emailInput.classList.remove('invalid');
    }
});
