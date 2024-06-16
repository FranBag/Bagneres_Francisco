class Vehiculo{ // creación de la clase Vehiculo.
    constructor(marca, modelo, anio){ // constructor de la clase.
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    obtenerInformacion(){ // método que mostrará los atributos de la clase.
        return `Marca: ${this.marca}\nModelo: ${this.modelo}\nAño: ${this.anio}`;
    }
}

class Automovil extends Vehiculo{ // clase que hereda de la clase anterior.
    constructor(marca, modelo, anio, color, precio){ // constructor de la clase.
        super(marca, modelo, anio); // palabra reservada super, utilizada para asignar los atributos
        //del constructor que se heredarán de la clase padre.
        this.color = color;
        this.precio = precio;
    }
    obtenerInformacion(){ // se sobreescribe el método de la clase Vehiculo devolviendo
        //la concatenación del método de la clase padre más los nuevos atributos de la clase hija.
        return`${super.obtenerInformacion()}\nColor: ${this.color}\nPrecio: ${this.precio}`;
    }
}

var moto = new Vehiculo("Zanella", "Enduro", "2022");
var auto = new Automovil("Ford", "Ka", "2020", "Rojo", "5000000")
// instancian las clases en dos variables.
console.log(moto.obtenerInformacion());
console.log(auto.obtenerInformacion());