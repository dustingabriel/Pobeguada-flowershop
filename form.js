const loader = document.querySelector('.loader');

// select inputs
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const notification = document.querySelector('#notification');

submitBtn.addEventListener('click', () =>{
    if(name.value.length < 3 ){
        showAlert('name must be 3 letters long');
    }  else if(!email.value.length){
        showAlert('enter your email');
    } else if(password.value.length < 8){
        showAlert('password must be 8 characters long');
    } else if(!number.value || number.value.length < 10){
        showAlert('invalid number, please enter a valid one');
    } else if(!tac.checked){
        showAlert('you must agree to our terms and conditions');
    } else{
        //submit form
        loader.style.display = 'block';
    }
})
  
//alert function
const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}