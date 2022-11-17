// Crear un objeto carro haciendo de la abstracción de sus atributos y un objeto anidado. 
let carro = {
    modelo: "Rapido y furioso",
    marca: "Ford",
    anio: 2015,
    precio: 4000,
    color: "Verde oscuro",
    caja: "Manual",
    puertas: 4,
    fabricacion:{
        pais: "China",
        ensamblaje: "España",
    },
}

// Crear una función que devuelva la cantidad de puertas que tiene el carro.
const cantidadPuertas = (parametrocarro) => {
    let numpuertas = `El carro modelo ${parametrocarro.modelo} tiene ${parametrocarro.puertas} puertas` 
    console.log(numpuertas)
}
cantidadPuertas(carro);

// Crear una función que devuelva un atributo del objeto anidado.
const fabricacion = (parametrofabrica) => {
    let fabrica = `El modelo ${parametrofabrica.modelo} fue fabricado en ${parametrofabrica.fabricacion.pais} y fue emsamblado en ${carro.fabricacion.ensamblaje}`
    console.log(fabrica)
}

fabricacion(carro)