const popup = document.querySelector('.popup');
var imgClose = document.querySelector('.close');

imgClose.addEventListener('click', () =>{
  popup.style.display = "none";
  console.log('clicked');
})

window.onload = function(){
  setTimeout(function(){
    popup.style.display = "block";
  },2000);
}


