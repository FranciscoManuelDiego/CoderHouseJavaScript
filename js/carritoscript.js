
// Seccion clases y arrays

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

// Seccion EventListeners
// Seccion Menu hamburguesa
const Menu = document.getElementById("hamburger") ;
const navbar = document.getElementById("nav-ul");

Menu.addEventListener('click', () => {
    navbar.classList.toggle('show');
})

// Seccion Listen-Buscador

let inputTexto = document.getElementById("btn-busqueda")
let divProductosBusqueda = document.getElementById("divProductos-busqueda")


fetch('../json/celulares2.json')
.then(response => response.json())
.then(celulares => {
    let {id,  nombre, img, precio, link} = celulares
    inputTexto.addEventListener('input', () =>{ 
    let buscador = inputTexto.value
    // console.log(buscador.toUpperCase)
    let celularesFiltro = celulares.filter(celulares => celulares.nombre.includes(buscador.toUpperCase()))
    if (inputTexto.value === ""){ 
        divProductosBusqueda.innerHTML ="";
    } else {
        celularesFiltro.forEach((celulares) => {
            divProductosBusqueda.innerHTML =` 
                <div class="main_busqueda_productos">
                    <div class="main_busqueda_productos_elementos">
                    <h2>Modelo: ${celulares.nombre}</h2>
                    <p>${celulares.precio}$</p>
                    <img src="${celulares.img}">
                    <a id="busqueda_pages" href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i>Ver más</a>
                    </div>
                </div>
            `
            document.getElementById('busqueda_pages').addEventListener('click', ()=>{ 
                alertify.error('Link no encontrado😶. Estamos Trabajando sobre esta sección😅')
                })
            })
        }
    })
})

// Seccion carrito

let divPrdouctosCarrito = document.getElementById("carritoelementos")
let carritoStorage = JSON.parse(localStorage.getItem("ProductosCarrito")) 
console.log(carritoStorage)

carritoStorage.forEach((carritoStorage) => {
    divPrdouctosCarrito.innerHTML += `
        <div class="productos_carrito">
            <div class="productos_carrito_tarjetas">
                <h3>Modelo: ${carritoStorage.nombre}</h3>
                <p>Precio: $${carritoStorage.precio}</p>
                <img class="image_contain" src="../images/phoneSymbol.png">
            </div>
        </div>
    `
})

let productosCompra = document.getElementById("mainCompra")
carritoStorage.forEach((producto) => {
    let sumaProductos = carritoStorage.reduce((sum, value) => (typeof value.precio == "number" ? sum + value.precio : sum), 0) ;
    productosCompra.innerHTML = `
        <div class="precio">
            <h2>Seccion Compra</h2>
            <p>Precio total: ${sumaProductos}</p>
        </div>
    `
})