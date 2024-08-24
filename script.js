var form = document.getElementById("registrationForm");
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var submitBtn = document.getElementById('submitBtn');

var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var passwordError = document.getElementById('passwordError');

function validatename()
{
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name cannot be empty.';
        nameError.style.display = 'block';
        return false;
    } else {
        nameError.style.display = 'none';
        return true;
    }
}

function validateemail()
{
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Invalid email address.';
        emailError.style.display = 'block';
        return false;
    } else {
        emailError.style.display = 'none';
        return true;
    }
}

function validatepassword()
{
    if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        passwordError.style.display = 'block';
        return false;
    } else {
        passwordError.style.display = 'none';
        return true;
    }
}

function validateForm() {
    const isNameValid = validatename();
    const isEmailValid = validateemail();
    const isPasswordValid = validatepassword();
    submitBtn.disabled = !(isNameValid && isEmailValid && isPasswordValid);
}

nameInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});