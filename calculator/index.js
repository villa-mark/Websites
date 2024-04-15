const display = document.getElementById("display");
const displayInput = document.getElementById("displayInput");

function displayFnc(clckBtn){
    display.value += clckBtn;
    displayInput.value += clckBtn;
}

function displayFncOperator(clckBtn){
    display.value += clckBtn;
    displayInput.value = '';
}

function result(){
    displayInput.value = eval(display.value);
}

function clearDisplay(){
    display.value = '';
    displayInput.value = '';
}

function deleteOneChar(){
    display.value = display.value.toString().slice(0, -1);
    displayInput.value = displayInput.value.toString().slice(0, -1);
}