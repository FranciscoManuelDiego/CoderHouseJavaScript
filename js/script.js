
// Seccion clases y arrays
alert("Bienvenido a la mini-tienda en proceso!")

class Productos {
    constructor (id, nombre, espacio , ram, procesador , precio) {
        this.id = id;
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


const producto1 = new Productos (1, "Samsung A72", "128", "8" , "Octa Core", "72000")
const producto2 = new Productos (2, "Moto G9", "128" , "8" , "Snapdragon 730G", "56000")
const producto3 = new Productos (3, "Redminote 10 Pro", "512" , "12" , "Snapdragon 732G","80000")
const producto4 = new Productos (4, "Samsung S22", "512", "12", "Snapdragon 8 Gen 1", "140000")
const producto5 = new Productos (5, "Apple iPhone 13 mini", "512", "4", "Apple A15 Bionic", "250000")
const producto6 = new Productos (6, "Google Pixel 6 Pro", "128", "12", "Google Tenson Octa Core", "280000")

let CelularesAccesorios = [producto1, producto2, producto3, producto4, producto5, producto6] ;

for (const Productos of CelularesAccesorios) {
   Productos.PorcentajeOferta();
}


// Seccion HTML dinamico
let divProductos = document.getElementById("divProductos")

CelularesAccesorios.forEach(ProductosenArray => {
    divProductos.innerHTML += `
    <div class="main_productos" id="producto${ProductosenArray.id}">
        <div class="main_productos_elementos">
            <h2>Modelo: ${ProductosenArray.nombre}</h2>
            <p>${ProductosenArray.espacio}GB Almacenamiento</p>
            <p>${ProductosenArray.ram}GB Ram</p>
            <p>Procesador: ${ProductosenArray.procesador}</p>
            <p>${ProductosenArray.precio}$</p>
        </div>
        <input id="btn${ProductosenArray.id}" class="btn-compra" type="submit" value="Añadir al Carrito">
    </div>
    `
});

console.log(CelularesAccesorios)

// Seccion EventListeners

// Seccion Listener-Carrito

let carrito =[]

CelularesAccesorios.forEach(ProductosenArray => {
    document.getElementById(`btn${ProductosenArray.id}`).addEventListener('click', () => {
    carrito.push(ProductosenArray)
    localStorage.setItem("ProductosCarrito" , JSON.stringify(carrito))
    })
})

// Seccion Listen-Buscador

let inputTexto = document.getElementById("btn-busqueda")
let divProductosBusqueda = document.getElementById("divProductos-busqueda")

inputTexto.addEventListener('change', () =>{ 
    let buscador = inputTexto.value
    console.log(buscador.toUpperCase)
    let celularesFiltro = CelularesAccesorios.filter(productos => productos.nombre.includes(buscador.toUpperCase()))

    celularesFiltro.forEach (ProductosenArray => {
        divProductosBusqueda.innerHTML += `
            <div class="main_busqueda_productos">
                <div class="main_busqueda_productos_elementos">
                <h2>Modelo: ${ProductosenArray.nombre}</h2>
                <p>${ProductosenArray.espacio}GB Almacenamiento</p>
                <p>${ProductosenArray.ram}GB Ram</p>
                <p>Procesador: ${ProductosenArray.procesador}</p>
                <p>${ProductosenArray.precio}$</p>
                </div>
            </div>
        `
    })
})

// Seccion de JSON y Storage

let CelularesAccesoriosJSON = JSON.stringify(CelularesAccesorios)
// console.log(CelularesAccesoriosJSON)

localStorage.setItem("Productos y Caracterisiticas" , CelularesAccesoriosJSON)

