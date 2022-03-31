const searchCountry = () => {
    let filter = document.getElementById('myInput').value.toUpperCase();

    let ul = document.getElementById('myUl');
    let li = ul.getElementsByTagName('li');

    for(var i=0; i<li.length; i++){
        let h1 = li[i].getElementsByTagName('h1')[0];

        let textValue = h1.textContent || h1.innerHTML;
        if(textValue.toUpperCase().indexOf(filter) > -1 ){
            li[i].style.display='';
        }
        else{
            li[i].style.display='none'; 
        }
    }

}