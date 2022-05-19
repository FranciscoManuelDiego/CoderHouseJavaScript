let CelularesAccesoriosDesestructura= {
    id : 6,
    nombre : "Samsung A72",
    espacio : "128 GB",
    ram : "4 GB",
    precio : 80000 ,
    procesador : {
        Chipset : "Snapdragon 720G",
        GPU :"Adreno 618" ,
    } 
}

const {nombre, procesador : { GPU}} =  CelularesAccesoriosDesestructura

console.log(nombre)
console.log(GPU)


const CelularesAccesoriosDesestructura2 = {
    ...CelularesAccesoriosDesestructura,
    bateria : "5000mAh",
}
