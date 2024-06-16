var num1 = 3;
var num2 = 7;
//se inicializan las variables num1 y num2.
if(num1 < num2) { //evalúa si la condición de que num1 sea menor a num2 se cumpla.
console.log("num1 no es mayor que num2");
}
if(num2 > 0) { //evalúa si el num2 es mayor a 0.
console.log("num2 es positivo");
}
if(num1 < 0 || num1 != 0) { //evalúa si num1 es negativo o diferente de 0.
console.log("num1 es negativo o distinto de cero");
}
if((num1 + 1) < num2) { //evalúa si num1 mas 1 es menor a num2.
console.log("Incrementar en 1 unidad el valor de num1 no lo hace mayor o igual que num2");
}