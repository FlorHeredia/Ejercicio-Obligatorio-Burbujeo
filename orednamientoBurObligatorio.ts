//ORDENAMIENTO BURBUJA  

/* Este método permite cargar un arreglo “arreglo” de
dimensión “cantidad” y llenarlo de valores generados al
azar entre 0 y “numAzar” (parámetro)*/

function cargar(arreglo:number[], cantidad:number, numAzar:number){
    let i : number;
    for (i = 0 ; i<cantidad; i++){
    arreglo[i] = Azar(numAzar);
    }
}

/*Este método permite mostrar un arreglo “arreglo” de
dimensión “cantidad” en una única línea, separando los
valores con un espacio*/

function escribirEnUnaLinea(arreglo:number[], cantidad:number) {
    let i:number;  
    let vector:string = "" ;
    for (i = 0 ; i<cantidad; i++) {
    vector += `${arreglo[i]} `;
    }

console.log (vector);
}

/* Este método permite intercambiar los valores en las
posiciones “i” y “j” de un arreglo “arreglo” utilizando una
variable auxiliar */

function intercambiar(arreglo:number[], i:number, j:number) {
    let aux:number;
    aux = arreglo[i] ;
    arreglo[i] = arreglo[j] ;
    arreglo[j] = aux ;
}

/* Este método permite comparar
los valores en las posiciones “i”
y “j” del arreglo “arreglo”

• Devuelve 0 si son iguales,

• 1 si lo que hay en “i” es
mayor a lo que hay en “j”

• -1 si lo que hay en “i” es
menor a lo que hay en “j” */

function comparar(arreglo : number[], i : number, j :
number) : number {
let comparacion : number;
if (arreglo[i] === arreglo[j]) {
comparacion = 0;
} else if (arreglo[i] < arreglo[j]) {
comparacion = -1;
} else {
comparacion = 1;
}
return comparacion;
}

// FUNCION BURBUJEO
function burbuja(arreglo : number[], cantidad : number){
    let i : number, j : number;
    for (i = 2 ; i < cantidad; i++) {
        for (j = 0 ; j < (cantidad - 1); j++) {
            if (comparar(arreglo, j, j+1) == 1 ) {
                intercambiar(arreglo, j, j+1) ;
}
}
}
}
/* Desde 2 hasta n (el primer elemento esta ordenado en la ultima vuelta)
Desde 0 hasta n – 1 (vamos achicando el rango a medida que se ubican los valores
al final del arreglo) Si los adyacentes j y j + 1 no están
ordenados, intercambiarlos */


//Algoritmo Orden

let lim : number = 10;
let a : number[]= new Array(lim);
cargar(a, lim, 100);
escribirEnUnaLinea(a, lim);
burbuja(a, lim);
escribirEnUnaLinea(a, lim);
