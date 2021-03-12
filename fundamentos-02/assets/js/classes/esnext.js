// PROPIEDADES PRIVADAS (NO ACEPTADO POR ALGUNOS NAVEGADORES )

class Rectangulo {
    #area = 0; // para evitar cambios en esta propiedad usaremos el #
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }
}

const rectangulo = new Rectangulo(10, 15);

//Rectangulo.#area = 100; 
 /*Estamos afectando una propiedad calculada, suponiendo que no lo queremos hacer 
si dejamos el # en la propiedad area, no tomará nunca el valor que intentemos reasignarle y nos aparecera
  un error " Private field '#area' must be declared in an enclosing class " no podemos modificar una propiedad privada */
console.log(rectangulo);