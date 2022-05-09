
// Seccion clases y arrays
alert("Bienvenido a la mini-tienda en proceso!")

class Productos {
    constructor ( nombre, espacio , ram, procesador , precio) {
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


const producto1 = new Productos ("Samsung A72", "128", "8" , "Octa Core", "72000")
const producto2 = new Productos ("Moto G9", "128" , "8" , "Snapdragon 730G", "56000")
const producto3 = new Productos ("Redminote 10 Pro", "512" , "12" , "Snapdragon 732G","80000")
const producto4 = new Productos ("Samsung S22", "512", "12", "Snapdragon 8 Gen 1", "140000")
const producto5 = new Productos ("Apple iPhone 13 mini", "512", "4", "Apple A15 Bionic", "250000")
const producto6 = new Productos ("Google Pixel 6 Pro", "128", "12", "Google Tenson Octa Core", "280000")

let CelularesAccesorios = [producto1, producto2, producto3, producto4, producto5, producto6] ;

for (const Productos of CelularesAccesorios) {
   Productos.PorcentajeOferta();
}


// Seccion HTML dinamico
let divProductos = document.getElementById("divProductos")

CelularesAccesorios.forEach(ProductosenArray => {
    divProductos.innerHTML += `
    <div class="main_productos">
        <div class="main_productos_elementos">
            <h2>Modelo: ${ProductosenArray.nombre}</h2>
            <p>${ProductosenArray.espacio}GB Almacenamiento</p>
            <p>${ProductosenArray.ram}GB Ram</p>
            <p>Procesador: ${ProductosenArray.procesador}</p>
            <p>${ProductosenArray.precio}$</p>
        </div>
        <input class="btn-compra" type="submit" value="Comprar">
    </div>
    `
});

console.log(CelularesAccesorios)

// Seccion EventListeners

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
