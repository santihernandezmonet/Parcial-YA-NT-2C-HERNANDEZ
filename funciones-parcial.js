//FUNCIONES EXAMEN

function sumaPares(numeros){
    let acu = 0
    let numerosPares = numeros.filter(numero => numero % 2 === 0)
    numerosPares.forEach(e => {
        acu += e
    });

    return acu;
}

function eliminarDuplicados(array){
    return [...new Set(array)]
}

function ordenarPorEdad(arrayPersonas){
    return arrayPersonas.sort((a, b) => a.edad - b.edad)
}

function contarPropiedades(objeto){
    return Object.keys(objeto).length
}

function sumarPropiedadesNumericas(objeto){
    let acu = 0;
    for(let e in objeto){
        if(typeof objeto[e] === 'number'){
            acu += objeto[e]
        }
    }
    return acu
}

function filtrarPorPropiedad(array, propiedad) {
    return array.filter(objeto => objeto.hasOwnProperty(propiedad))
}

function calcularPromedio(array){
    let acu = 0
    array.forEach(e => {
        acu += e
    })

    return acu / array.length
}

function filtrarPorLongitud(array, numero){
    let aux = []
    array.forEach(e => {
        if(e.length >= numero){
            aux.push(e)
        }  
    })

    return aux
}

function esPrimo(numero){
    let rta = true
    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i === 0) {
            rta = false; 
        }
    }
    
    return rta
}

function invertirCadena(string){
    
}

