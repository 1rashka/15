
const burger = document.querySelector('.nav__burger');
const menuActive = document.querySelectorAll('.list__menu');

burger.addEventListener('click', e => {
    burger.classList.toggle('nav__burger-active')
    menuActive.forEach((e) => {
        e.classList.toggle('active');

    });

})

const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')
const buttonModalActive = document.querySelector('.map__button')

buttonModalActive.addEventListener ('click', ()=>{
    modal.classList.toggle('modal__active');    
})

modalClose.addEventListener('click', ()=>{
    modal.classList.remove('modal__active');
}) 

//FORMS




let form = document.querySelector('.form'),
    formInputs = document.querySelectorAll('.form__required'),
    inputEmail = document.querySelector('.form__mail'),
    inputPhone = document.querySelector('.form__phone');
    const emailMes = document.getElementById("mail");

emailMes.addEventListener("input", function (event) {
  if (emailMes.validity.typeMismatch) {
    emailMes.setCustomValidity("I am expecting an e-mail address!");
  } else {
    emailMes.setCustomValidity("");
  }
});
   

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function validateCountry(country) {
    let re = new RegExp('.co$');
    return re.test(String(country).toLowerCase());
}

function validatePhone(phone) {
    let re = /^[+0-9\s]*$/;
    return re.test(String(phone));
}

form.onsubmit = function () {
    let emailVal = inputEmail.value,
        phoneVal = inputPhone.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('form__incorrect');

        } else {
            input.classList.remove('form__incorrect');
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('inputs not filled');
        return false;
    }

    if(!validateEmail(emailVal)) {
        console.log('email not valid');
        inputEmail.classList.add('form__incorrect');
        return false;
    } else {
        inputEmail.classList.remove('form__incorrect');
    }

  

    if (!validatePhone(phoneVal)) {
        console.log('phone not valid');
        inputPhone.classList.add('form__incorrect');
        return false;
    } else {
        inputPhone.classList.remove('form__incorrect');
    }




}