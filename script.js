

const botonesGrid = document.querySelectorAll(".numbtn");
const pantalla = document.querySelector("#result");
const borrar = document.querySelector("#delete");
let string = "";
let num1 = "";
let num2 = "";
let operacion = "";
let result = "";
const clear = document.querySelector("#clear");
clear.addEventListener("click",limpiarPantalla);

borrar.addEventListener("click",borrarDigito);

function limpiarPantalla(){
    string = "";
    num1="";
    num2="";
    operacion="";
    result = "";
    pantalla.innerText = "0";
}

function borrarDigito(){
    string = string.split("");
    string.pop();
    string  = string.join("");
    pantalla.innerText = string;
}

// 9+9
// result = 18
//18-9
//result = 9

botonesGrid.forEach(boton=>{
    boton.addEventListener("click",function(e){
        if(e.target.innerText=="+" || e.target.innerText=="*" || e.target.innerText=="-" || e.target.innerText=="÷"){
            num1 = string;
            operacion = e.target.innerText;
            string = "";
        }else if(e.target.innerText=="="){
            if(result == ""){
                num2 = string;
                string="";
                operate(num1,num2,operacion);
            }else{
                num1 = result;
                num2 = string;
                string = "";
                operate(num1,num2,operacion);

            }
        }else{
            string += e.target.innerText;
            pantalla.innerText = string;
        }
    });
});


function operate(numer1, numer2, operador){
    numer1 = parseInt(num1);
    numer2 = parseInt(num2);
    if(numer1==0 && numer2==0 && operacion=="÷"){
        pantalla.innerText = "Error";
        result="";
    }else{
        if(operacion == "+"){
            pantalla.innerText = String(numer1+numer2);
            result = String(numer1 + numer2);
        }else if(operacion == "*"){
            pantalla.innerText = String(numer1*numer2);
            result = String(numer1*numer2);
        }else if(operacion == "-"){
            pantalla.innerText = String(numer1-numer2);
            result= String(numer1 - numer2);
        }else{
            pantalla.innerText = String(parseFloat(numer1/numer2).toFixed(6));
            result = String(parseFloat(numer1/numer2).toFixed(6));
        }
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
