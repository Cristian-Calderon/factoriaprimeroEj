// Crear función que determine si un número es par o impar.

let paroImpar = (parametro) => {
    
    if(parametro % 2 == 0){
        console.log("Es par",parametro)
    }else{
        console.log("Es impar", parametro)
    }
}

paroImpar(2)