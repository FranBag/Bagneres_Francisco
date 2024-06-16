var valores = [true, false, 2, "hola", "mundo", 3, "char"]; // array dado por la consigna.
var strings = [];
var numeros = [];
//arrays que se utilizarán para el proceso de ordenamiento

for(let i = 0; i < valores.length; i++ ){
    dato = valores[i];

    if(typeof dato == "string"){
        strings.push(dato);
    }
    else if(typeof dato == "number"){
        numeros.push(dato);
    }
} // bucle for utilizado para separar en arrays diferentes los datos del array de la consigna.

for(let i = 0; i < (strings.length - 1); i++){
    if (strings[i].length <= strings[i + 1].length) {
        let temp = strings[i];
        strings[i] = strings[i + 1];
        strings[i + 1] = temp;
    }
} //ordenamiento de mayor a menor según la longitud de las cadenas de caracteres.

document.write("<H1>Palabras del array de mayor a menor</H1>");

for(let i = 0; i < strings.length; i++){
    document.write("</br>"+`${strings[i]}`)
} // se imprimen los datos del array strings, del índice 0 al último.

let num1 = numeros[0];
let num2 = numeros[1];

document.write("</br><H1>Operaciones básicas</H1>");
document.write(`
Suma: ${num1} + ${num2} = ${num1+num2}</br>
Resta: ${num1} - ${num2} = ${num1-num2}</br>
Multiplicación: ${num1} * ${num2} = ${num1*num2}</br>
División: ${num1} / ${num2} = ${num1/num2}`); // se realizan las operaciones matemáticas básicas.