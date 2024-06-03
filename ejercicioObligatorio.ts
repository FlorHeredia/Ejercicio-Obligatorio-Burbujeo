let limite:number=15
let arreglo: number[]= [5,8,9,4,5,7,1,3,2,6,10,15,12,17,18]

//cargar el arreglo
function cargar(arreglo:number[], cantidad:number){
    let i : number;
    for (i = 0 ; i<cantidad; i++){
    arreglo[i] = arreglo[i];
    }
}

// Escribir el arreglo en una linea
function escribirEnUnaLinea(arreglo:number[], cantidad:number) {
    let i:number;  
    let vector:string = "" ;
    for (i = 0 ; i<cantidad; i++) {
    vector += `${arreglo[i]} `;
    }

console.log (vector);
}
// intercambia los numeros si están desordenados, se usa dentro de la funcion burbuja
function intercambiar(arreglo:number[], i:number, j:number) {
    let aux:number;
    aux = arreglo[i] ;
    arreglo[i] = arreglo[j] ;
    arreglo[j] = aux ;
}

//compara los numeros adyacentes para saber cual es mayor, se usa dentro de la funcion burbuja
function comparar(arreglo : number[], i : number, j :
    number) : number {
    let comparacion : number;
    if (arreglo[i] === arreglo[j]) {
    comparacion = 0;
    } else if (arreglo[i] > arreglo[j]) {
    comparacion = -1;
    } else {
    comparacion = 1;
    }
    return comparacion;
    }


function burbuja(arreglo : number[], cantidad : number){
    let i : number, j : number;
        for (i = 0 ; i < cantidad; i++) {
            for (j = 0 ; j < (cantidad - 1); j++) {
                if (comparar(arreglo, j, j+1) == 1 ) {
                    intercambiar(arreglo, j, j+1) ;
    }
    }
    }
    }


   
    cargar(arreglo, limite);
    escribirEnUnaLinea(arreglo, limite);
    burbuja(arreglo, limite);
    escribirEnUnaLinea(arreglo, limite);
    