const input = require("prompt-sync")({ sigint: true });
console.log("Esto es un programa para comprobar si es par");

let variable = false;

while (!variable) {
    const num = input("Introduce un numero o si quieres para escribe cancelar => ");
    console.log("¿Es un numero?: ", isNumber(num));
    
    
    if (num.toLowerCase() === "cancelar") {
        break;
    }

    if (esPar(num)) {
        console.log("es par");
    } else {
        console.log("no es par");
    }
}

function isNumber(variable) {
    if (!isNaN(variable)) {
        return true;
    } else {
        return false;
    }
}

function esPar(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
