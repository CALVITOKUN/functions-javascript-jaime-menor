const input = require("prompt-sync")({ sigint: true });

let variable = false;

while (!variable) {
    const numero = input("Introduce tu número de DNI o escribe cancelar=> ");
    
    if (numero.toLowerCase() === "cancelar") {
        break;
    }

    const letraUsuario = input("Introduce la letra de tu DNI => ").toUpperCase();

    console.log(numero + letraUsuario);
    console.log("¿Has escrito solo números o son solo números? ", isNumber(numero));
    console.log("¿Es una letra? ", isNaN(letraUsuario));

    const operacion = numero % 23;
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const letraEsperada = letras.charAt(operacion);

    

    if (letraUsuario === letraEsperada) {
        console.log("¡El número y la letra del DNI son correctos!");
        variable = true;
    } else {
        console.log("La letra proporcionada no coincide con la esperada.");
        console.log("La letra esperada era => ", letraEsperada)
    }
}

function isNumber(variable) {
    return !isNaN(variable);
}

