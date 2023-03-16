/*
    Dada una matriz y un valor adicional, inserta este valor al principio de la 
    matriz. Haz esto sin utilizar ningún método de matriz incorporado.
*/
function pushFunction(array, value) {
    let newArray = new Array(array.length + 1);
    newArray[0] = value;
    for (let i = 0; i < array.length; i++) {
        newArray[i + 1] = array[i];
    }
    return newArray;
}
let array = [1, 2, 3, 4, 5];
let value = 0;
console.log(pushFunction(array, value));
/*
    Dada una matriz, elimina y devuelve el valor al principio de la matriz. 
    Haz esto sin utilizar ningún método de matriz incorporado, excepto pop().
*/
let array2 = [1, 2, 3, 4, 5];
let value2 = array2.pop();
console.log(pushFunction(array2, value2))
/*
    Dado una matriz, índice y valor adicional, inserta el valor en la matriz en el 
    índice dado. Haz esto sin utilizar métodos de matriz integrados. Puedes pensar 
    en pushFront(arr, val) como equivalente a insertAt(arr, 0, val).
*/
function insertAt(matriz, indice, value3) {
    let newArray = new Array(matriz.length + 1);
    for (let i = 0, j = 0; i < matriz.length; i++, j++) {
        if (i === indice) {
            newArray[j] = value3;
            j++;
        }
        newArray[j] = matriz[i];
    }
    if (indice >= matriz.length) {
        newArray[indice] = value3;
    }
    return newArray;
}

let array3 = ['a', 'b', 'c'];
let indice = 4;
let value3 = 'd';
console.log(insertAt(array3, indice, value3));
/*
    Dada una matriz y un índice en una matriz, elimina y devuelve el valor de la matriz
    en ese índice. Haz esto sin usar métodos de matriz integrados, excepto pop(). 
    Piensa en popFront(arr) como equivalente a removeAt(arr, 0).
*/
function removeAt(array, indice) {
    for (let i = indice; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
    array.length = array.length - 1;
    return array;
}
let array4 = ['a', 'b', 'c'];
let indice2 = 0;
console.log(removeAt(array4, indice2));
/*
    Intercambia posiciones de pares sucesivos de los valores de una matriz dada. 
    Si la longitud es impar, no cambies el elemento final. Para [1,2,3,4], 
    devuelve [2,1,4,3]. Por ejemplo, cambia la entrada ["Brendan", verdadero, 42] 
    a [verdadero, "Brendan", 42]. Al igual que con todos los desafíos de arreglos,
    hazlo sin utilizar ningún método de arreglo incorporado.
*/
function change(array5) {
    let tam = 0;
    if (array5.length % 2 === 0) {
        tam = array5.length
    } else {
        tam = array5.length - 1;
    }
    for (let i = 0; i < tam; i += 2) {
        let temp = array5[i];
        array5[i] = array5[i + 1];
        array5[i + 1] = temp;
    }
    return array5;
}
let array5 = ["Marcos", true, 27];
console.log(change(array5));
/*
    Sara está buscando contratar a un desarrollador web increíble y ha recibido postulaciones
    de varias fuentes. Su asistente los ordenó alfabéticamente, pero notó algunos duplicados.
    Dada una matriz ordenada, elimina los valores duplicados. Debido a que los elementos 
    de la matriz ya están en orden, todos los valores duplicados se agruparán. Al igual que 
    con todos estos desafíos de arreglos, hazlo sin utilizar ningún método de arreglo incorporado. 
*/
function deleteDuplicate(array6) {
    let newArray6 = [];
    newArray6[0] = array6[0];
    for (let i = 1; i < array6.length; i++) {
        if (array6[i] != newArray6[newArray6.length - 1]) {
            let j = newArray6.length;
            newArray6[j] = array6[i];
        }
    }
    return newArray6;
}
let array6 = [1, 2, 2, 3, 3, 3, 4, 4, 5];
console.log(deleteDuplicate(array6));