const firstname = document.querySelector('#firstname')
const lastname = document.querySelector('#lastname')
const email = document.querySelector('#email')
const pwd = document.querySelector('#password')

document.querySelector('#form').addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    // TRIM -> THE INPUT CANNOT BE FILL WITH SPACE
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = pwd.value.trim();

    if (firstnameValue === '')
        inputError(firstname, 'First Name cannot be empty');
    else
        inputSuccess(firstname);

    if (lastnameValue === '')
        inputError(lastname, 'Last Name cannot be empty');
    else
        inputSuccess(lastname);

    if (emailValue === '') {
        inputError(email, 'Email cannot be empty');
    } else if (!checkEmail(emailValue)) {
        inputError(email, 'Looks Like this is not an email');
    } else {
        inputSuccess(email);
    }

    if (passwordValue === '')
        inputError(pwd, 'Password cannot be empty');
    else
        inputSuccess(pwd);
}

function inputError(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    formControl.classList.add('error')
    small.innerText = message
}

function inputSuccess(input) {
    const formControl = input.parentElement

    formControl.classList.remove('error')
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}