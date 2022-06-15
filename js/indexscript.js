
// Seccion clases y arrays
Swal.fire("Bienvenido a la mini-tienda en proceso!")

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

// console.log(CelularesAccesorios)
// Seccion HTML dinamico y Fetch
// CelularesAccesorios.forEach(ProductosenArray => {
//     divProductos.innerHTML += `
//     <div class="main_productos" id="producto${ProductosenArray.id}">
//         <div class="main_productos_elementos">
//             <h2>Modelo: ${ProductosenArray.nombre}</h2>
//             <p>${ProductosenArray.espacio}GB Almacenamiento</p>
//             <p>${ProductosenArray.ram}GB Ram</p>
//             <p>Procesador: ${ProductosenArray.procesador}</p>
//             <p>${ProductosenArray.precio}$</p>
//         </div>
//         <input id="btn${ProductosenArray.id}" class="btn-compra" type="submit" value="Añadir al Carrito">
//     </div>
//     `
// });
// Este es el carrito de Array que se manda 
let carrito =[]
let divProductos = document.getElementById("divProductos")
// Aqui agregue un fetch donde retorno mis elementos de un json
fetch('./json/celulares.json')
.then(response => response.json())
.then(celulares => {
    let {id,  nombre, img, espacio, ram, procesador, precio} = celulares
    celulares.forEach((celulares) => {  
        divProductos.innerHTML += `
        <div class="main_productos" id="producto${celulares.id}">
        <img src="${celulares.img}">
            <div class="main_productos_elementos">
                <h2>Modelo: ${celulares.nombre}</h2>
                <p>${celulares.espacio}GB Almacenamiento</p>
                <p>${celulares.ram}GB Ram</p>
                <p>Procesador: ${celulares.procesador}</p>
                <p>${celulares.precio}$</p>
            </div>
            <input id="btn${celulares.id}" class="btn-compra" type="submit" value="Añadir al Carrito">
        </div>
        `
    })
    celulares.forEach(celulares => {
        document.getElementById(`btn${celulares.id}`).addEventListener('click', () => {
        alertify.success('Agregaste un producto al carrito🤩');
        console.log(celulares)
        carrito.push(celulares)
        localStorage.setItem("ProductosCarrito" , JSON.stringify(carrito))
        })
    })
})
// Seccion EventListeners

// Seccion Menu hamburguesa
const Menu = document.getElementById("hamburger") ;
const navbar = document.getElementById("nav-ul");

Menu.addEventListener('click', () => {
    navbar.classList.toggle('show');
})

// Seccion Listener-Carrito

// CelularesAccesorios.forEach(ProductosenArray => {
//     document.getElementById(`btn${ProductosenArray.id}`).addEventListener('click', () => {
//     console.log(ProductosenArray)
//     carrito.push(ProductosenArray)
//     localStorage.setItem("ProductosCarrito" , JSON.stringify(carrito))
//     })
// })

// Seccion Listen-Buscador

let inputTexto = document.getElementById("btn-busqueda")
let divProductosBusqueda = document.getElementById("divProductos-busqueda")

// inputTexto.addEventListener('input', () =>{ 
//     let buscador = inputTexto.value
//     // console.log(buscador.toUpperCase)
//     let celularesFiltro = CelularesAccesorios.filter(productos => productos.nombre.includes(buscador.toUpperCase()))
//         if (inputTexto.value === ""){ 
//             divProductosBusqueda.innerHTML ="";
//         } else {
//             celularesFiltro.forEach (ProductosenArray => {
//                 divProductosBusqueda.innerHTML +=` 
//                     <div class="main_busqueda_productos">
//                         <div class="main_busqueda_productos_elementos">
//                         <h2>Modelo: ${ProductosenArray.nombre}</h2>
//                         <p>${ProductosenArray.precio}$</p>
//                         </div>
//                     </div>
//                 `
//             })
//         }
// })
fetch('./json/celulares.json')
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
                alertify.error('Link no encontrado😶 . Estamos Trabajando sobre esta sección😅')
                })
            })
        }
    })
})
