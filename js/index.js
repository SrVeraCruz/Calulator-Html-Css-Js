let display = document.querySelector('#display');
let numeric = document.querySelectorAll('.numeric');
let AC = document.querySelector('#AC');
let DE = document.querySelector('#DE');
let equal = document.querySelector(".equal");

for(i=0;i<numeric.length;i++){
    let element = numeric[i];

    element.addEventListener('click', ()=> {
        display.value += element.value;
    });
}

AC.addEventListener('click', ()=> {
    display.value = "";
});

DE.addEventListener('click', ()=> {
    //display.value = display.value.substring(0,display.value.length-1);
    display.value = display.value.toString().slice(0,-1);
});

equal.addEventListener('click', ()=> {
    if(display.value == ""){
        display.value = "";
    }
    else{
        display.value = eval(display.value);
    }
});