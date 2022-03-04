function scrollAppear(){
    
 var introText = document.querySelector('.intro-text');
 var introPosition = introText.getBoundingClientRect().top;
 //console.log(introPosition);
 var screenPosition = window.innerHeight/1.3;

 if(introPosition < screenPosition){
    introText.classList.add('intro-appear')
}

 var introImg = document.querySelector('.intro-img')
 var introImgPosition = introImg.getBoundingClientRect().top;
 var screenImgPosition = window.innerHeight/1.3;

 if(introImgPosition < screenImgPosition){
    introImg.classList.add('intro-img-appear')
}
 
}
window.addEventListener('scroll',scrollAppear);