let display=document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');

let displayValue='';

let buttonarr=Array.from(buttons);

buttonarr.forEach(function(button){
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='DEL'){
            displayValue=displayValue.substring(0,displayValue.length-1);
            display.value=displayValue;
        }
        else if(e.target.innerHTML=='AC'){
            displayValue='';
            display.value=displayValue;
        }
        else if(e.target.innerHTML=='='){
            displayValue=eval(displayValue);
            display.value=displayValue;
        }
        else{
            displayValue+=e.target.innerHTML;
            display.value=displayValue;
        }
    });

});