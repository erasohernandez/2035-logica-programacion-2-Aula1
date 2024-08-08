let numeroSecreto = 0;
let intentos = 0;
let numerosGenerados = [];
let numeroMaximo = 3;

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === 0){
        numerosGenerados = [];
        reiniciarJuego();            
    }
    else{
        if(numeroSecreto === numeroDeUsuario){
            //El usuario acierta
            asignarTextoElemento('p', `GANASTE!!! EN ${intentos} ${(intentos === 1) ? 'INTENTO': 'INTENTOS'}`);
            document.querySelector('#reiniciar').removeAttribute('disabled');
        }
        else{
            //El usuario no acierta
            if (numeroSecreto > numeroDeUsuario){
                asignarTextoElemento('p', 'El número secreto es mayor');
            }
            else{
                asignarTextoElemento('p', 'El número secreto es menor');
            }
            limpiarCaja();
            intentos++;
        }  
    }
     
    
    return;
}

function limpiarCaja(){ 
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego número secreto!!');
    asignarTextoElemento('P', `Escriba un número del 1 al ${numeroMaximo} o 0 para reiniciar el juego`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);    
}


function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*numeroMaximo) + 1;
   
    if(numerosGenerados.length == numeroMaximo){
        asignarTextoElemento('P', 'Todos los numeros dentro del rango han sido generados, 0 para reiniciar');        
    }
    else{
        if(numerosGenerados.includes(numeroSecreto)){
            return generarNumeroSecreto();
        }
        else{
            numerosGenerados.push(numeroSecreto); 
            console.log(numeroSecreto);
            console.log(numerosGenerados);           
            return numeroSecreto;
        }             
    }
    
}

condicionesIniciales();
