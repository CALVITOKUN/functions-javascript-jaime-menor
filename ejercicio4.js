const input = require("prompt-sync")({sigint: true});

const numeroAleatorio = Math.floor(Math.random()*101);

let acierto = false

while (!acierto){
    const numero = input ("Introduce un numero => ")
    if (esCorrecto (numero)){
        if(numero == numeroAleatorio){
          acierto = true  
        } else if(numeroAleatorio > numero){
            console.log("Te has quedado corto")
        }  else {
            console.log("Te has pasado de largo")
        }
    } else {
        console.log("Escribe un numero")
    }
}
console.log ("Has Acertado")

function esCorrecto(incognita) {
    if (Number(incognita)){
        return true
    } else {
        return false
    }
}