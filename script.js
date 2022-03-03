

const botonesGrid = document.querySelectorAll(".numbtn");
const pantalla = document.querySelector("#result");
let string = "";
let num1 = "";
let num2 = "";
let operacion = "";



botonesGrid.forEach(boton=>{
    boton.addEventListener("click",function(e){
        if(e.target.innerText=="+" || e.target.innerText=="*" || e.target.innerText=="-" || e.target.innerText=="÷"){
            num1 = string;
            operacion = e.target.innerText;
            string = "";
        }else if(e.target.innerText=="="){
            num2 = string;
            string="";
            operate(num1,num2,operacion);
        }else{
            string += e.target.innerText;
            pantalla.innerText = string;
        }
    });
});


function operate(numer1, numer2, operador){
    numer1 = parseInt(num1);
    numer2 = parseInt(num2);
    if(operacion == "+"){
        pantalla.innerText = String(numer1+numer2);
    }else if(operacion == "*"){
        pantalla.innerText = String(numer1*numer2);
    }else if(operacion == "-"){
        pantalla.innerText = String(numer1-numer2);
    }else{
        pantalla.innerText = String(numer1/numer2);
    }
}

function add(num1,num2){
    return num1+num2;
}

function divide(num1,num2){
    return num1/num2;
}
function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}
