const number=document.querySelectorAll(".number");
const speed=100;
//console.log(number)

number.forEach(element => {
    incNumber(element)
});

function incNumber(e){
    //console.log(typeof(+elem.innerText));

    let text =+e.innerText;
    const value =+e.getAttribute("data-target");
     //console.log(value);
    const inc=value/speed
     //console.log(inc);

     if(text<value){
        e.innerText=inc+text;
        setTimeout(() =>{
            incNumber(e)
        },20);
     }
     else{
        e.innerText=value;
     }

}