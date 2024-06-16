let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];//se inicializa un array con los meses del año.

while(true){
    elegir = prompt("Ingrese número del mes", "(1 - 12)"); // se pide al usuario que ingrese un número.

    if (elegir < 1 || elegir > 12){
        alert("Número ingresado inválido") // se evalúa si el número ingresado está entre los valores esperados.
    }
    else{
        break
    }
}
alert(`El mes correspondiente al número ${elegir} es ${meses[(elegir-1)]}`); // se imprime el valor correspondiente dentro del array al mes elegido.