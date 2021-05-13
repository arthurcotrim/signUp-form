// VEIFY IF THE FORMS WAS SUBMITTED
document.querySelector('form').addEventListener('submit', (event)=>{
    console.log('enviar o formulario');

    // I CAN'T SEND THE FORMS
    event.preventDefault()
})

const inputs = document.querySelectorAll('input')
const btn = document.querySelector('.btn')
const error = document.querySelectorAll('.error')
const emailInput = document.querySelector('.email')

btn.onclick = () => {
    if (inputs.values === undefined) {

    }else{
        for (let i = 0; i < error.length; i++) {
            if(inputs[i].value !== ''){
                error[i].classList.add('invisible')
                inputs[i].classList.remove('border-error')
                continue
            }else{
                error[i].classList.remove('invisible')
                inputs[i].classList.add('border-error')
            }
        }
        emailInput.innerHTML = 'Email cannot be empty'
    }
}











