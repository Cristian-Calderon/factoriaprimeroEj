// Crear un array de 10 números

let cadena = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let recorrer = (parametro) => {

    let nuevaCadena = [];
    for (let index = 0; index < parametro.length; index++) {
        const elementos = parametro[index];
        nuevaCadena.push(elementos + " :D");
    }
    console.log(nuevaCadena)
}

recorrer(cadena)