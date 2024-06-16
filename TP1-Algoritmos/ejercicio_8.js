let ingresado;
let letra;
let letras = []; // array donde se guardarán los caracteres del string ingresado.
ingresado = prompt("Ingrese texto que desee")
longitud_ingresado = ingresado.length // se guarda la longitud del string.

let encontrado = 0; // variable utilizada para verificar si se encuentra una vocal.

buclefor: //se le pone la etiqueta "buclefor" al for para luego salir de el
//a traves de un break dentro del switch.
for(let i = 0; i < (longitud_ingresado); i++){
    letra = ingresado.slice(i, i+1);

    switch(letra){
        case "a":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        case "e":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        case "i":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        case "o":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        case "u":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        case "á":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        case "é":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        case "í":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        case "ó":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        case "ú":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        case "A":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        case "E":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        case "I":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        case "O":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        case "U":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        case "Á":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        case "É":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        case "Í":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        case "Ó":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        case "Ú":{
            letras[i] = letra;
            encontrado = 1;
            break buclefor
        }
        default:{
            letras[i] = letra;
        }
    }
}

if(encontrado == 1){
    document.write(`En la palabra <b>${ingresado}</b>, 
    la primer vocal es <b>${letras.slice(-1)}</b>; 
    y es la letra n° <b>${letras.length}</b>`)
} // se evalúa si se encontró una vocal utilizando la variable encontrado declarada anteriormente.
else{
    document.write("No se ha encontrado ninguna vocal dentro de la palabra ingresada.")
}
