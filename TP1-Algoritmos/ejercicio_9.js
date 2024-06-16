var notas = [];
let nota = 0;
let suma = 0;
// incialización de variables utilizadas para el cálculo

i = 0
while(i < 5){ // bucle while con el que se restringe los valores ingresados por el usuario.

    nota = parseInt(prompt(`Ingrese nota n°${i+1}`))
    if(nota > 0 && nota < 11){ // se verifica si el valor está dentro de lo esperado.
        notas[i] = nota;
        i = i + 1;
    }
    else{
        alert("La nota ingresada no es válida, pruebe con un valor numérico entre 1 y 10.")
    }
}

for(let i = 0; i < 5; i++){ // suma de las notas dentro del array.

    suma = suma + notas[i];

}

promedio = suma / 5; // se realiza el cálculo del promedio

if(promedio <= 5){ // según el valor del promedio se asigna la condición del alumno.
    condicion = "Desaprobado";
}
else if(promedio >= 6 && promedio <= 8){
    condicion = "Aprobado";
}
else if(promedio > 8){
    condicion = "Sobresaliente";
}

document.write(`El promedio es de <b>${promedio}</b>
por lo tanto la condición del alumno es <b>${condicion}</b>`);
