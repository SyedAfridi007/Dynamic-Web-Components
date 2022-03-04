
//user operation
var form = document.querySelector('form')
var email = form.querySelector('#email');
var password = form.querySelector('#password');

var checkPassword = 18385452;


var opbtn = document.querySelector('.btn');
var popup = document.querySelector('.popup');
var details = document.querySelector('.details');

var clsbtn = document.querySelector('.cls-btn');
var homebtn = document.querySelector('.home-btn');


form.addEventListener('submit',formHandler)
var text = document.querySelectorAll('p')

function formHandler(e){
    e.preventDefault();
    popup.classList.add('active');
    details.classList.add('active')
    clsbtn.style.display= "none";
    homebtn.style.display= "none";


    if(checkPassword == password.value){
      text[0].innerText = "Login Success"; 
      homebtn.style.display= "block";

    }
    else{
      text[0].innerText = "Login Failed"; 
      clsbtn.style.display= "block";

    }

    email.value = "";
    password.value = "";
}

homebtn.addEventListener('click', function(){
  popup.classList.remove('active');
  details.classList.remove('active');
})

clsbtn.addEventListener('click', function(){
    popup.classList.remove('active');
    details.classList.remove('active');
 })
 























 

