
const burger = document.querySelector('.nav__burger');
const menuActive = document.querySelectorAll('.list__menu');

burger.addEventListener('click',  e => {
    burger.classList.toggle('nav__burger-active')
     menuActive.forEach((e)=>{
        e.classList.toggle('active');
        
    });
    
})

 const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')
const buttonModalActive = document.querySelector('.map__button')

buttonModalActive.addEventListener ('click', e=>{
    modal.classList.toggle('modal__active');    
})

modalClose.addEventListener('click', e=>{
    modal.classList.remove('modal__active');
}) 

//FORMS
let form = document.querySelector('.form');
let phone = document.querySelector('.form__phone');
let mail = document.querySelector('.form__mail');
let firstName = document.querySelector('.form__first-name');
let lastName = document.querySelector('.form__last-name');

form.onsubmit = function(){
 let emailVal = mail.value,
    phoneVal = phone.value;

    forInputs.forEach( function (input) {

        if(input.value ===''){
            input.classList.add('form__error')
        }
    })

    return false;
}

