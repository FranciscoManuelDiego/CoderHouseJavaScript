// Simulador Sencillo e Interactivo Calculadora

alert("Simulador básico de Cacluadora y un bucle incluido!- Coderhouse")
let num1 = parseInt(prompt("Ingrese tu nímero menor a 10"))
let operacion = prompt("Ingrese su operación: + / - *")
let num2 = parseInt(prompt("Ingrese tu segundo nímero menor a 10 "))
let resultado;

if (operacion == "+" ) {
    resultado = num1 + num2
} else if (operacion == "*" ) {
    resultado = num1 * num2
} else if (operacion == "-") {
    resultado = num1 - num2
} else if (operacion == "/") {
    resultado = num1 / num2
} else {
    alert("No ingresaste una operación válida")
}

alert("Este es tu resultado:  " + " " + resultado)
alert("Bueno y si le aplicamos un bucle de incremento? 🤓" + "Tranqui, no te voy a romper la compu ")
let operacion2 = parseInt(prompt("Ingrese 1 si quiere proceder a el bucle o ingrese 2 si lo quiere denegar"))

if (operacion2 === 1) { 
    for (resultado ; resultado < 100; resultado++) {
        document.write(resultado)
    }
}

