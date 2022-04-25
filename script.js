// Simulador Sencillo e Interactivo Calculadora

/* alert("Simulador básico de Cacluadora y un bucle incluido!- Coderhouse")
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
} */

// Estaba pensando en hacer alguna lista de productos para agregar
alert("Bienvenido a la mini-tienda en proceso!")

class Productos {
    constructor (nombre, espacio , ram, procesador , precio) {
        this.nombre = nombre.toUpperCase();
        this.espacio = parseInt(espacio);
        this.ram = parseInt(ram);
        this.procesador = procesador.toUpperCase();
        this.precio = parseInt(precio);
    }
    PorcentajeOferta() {
        this.precio =  this.precio - this.precio * 0.10
    }
}

const CelularesAccesorios = [] ;
CelularesAccesorios.push(new Productos("samsunga72", "128", "8" , "Octa Core", "72000"));
CelularesAccesorios.push(new Productos("motoG9", "128" , "8" , "Snapdragon 730G", "56000"));
CelularesAccesorios.push(new Productos("redminote10pro", "512" , "12" , "Snapdragon 732G","80000" ));

for (const Productos of CelularesAccesorios) {
   Productos.PorcentajeOferta();
}

console.log(CelularesAccesorios)
// console.log(CelularesAccesorios)
/*alert("Tus productos a elegir son:")
alert("0) Sansung A72 128GB Almacenamiento 8GBRAM Octacore Precio $72000" )
alert("1) MotoG9 128GB Almacenamiento 8GBRAM Snapdragon 730G Precio $5600")
alert("2) Redminote10Pro 128GB Almacenamiento 12GBRAM Snapdragon 732G Precio $80000 ")
let OpcionElegir= parseInt(prompt("Elegí tu producto, este sera mostrado con un descuento del 10%"))

if (OpcionElegir === 0) {
     document.write("Tu opción es :" + CelularesAccesorios.indexOf("samsunga72"))
} else if (OpcionElegir === 1) {
     document.write("Tu opción es :" + CelularesAccesorios.indexOf("motoG9"))
} else if (OpcionElegir === 2) {
    document.write("Tu opción es :" +CelularesAccesorios.indexOf("redminote10pro") )
} else  {
    alert("No elegiste ninguna opción válida")
} */

// Aca diagmos que trate de mezclar estos objetos y realizar un menu simple ! Pero bueno no me salio jajajaja