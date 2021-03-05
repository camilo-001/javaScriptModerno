//GETS Y SETS 

class Persona {

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    // set establece el valor de una propiedad. Esto puede ayudar en todos los casos
    // que desees que las obtención y/o modificaciones de las propiedades sean limitadas o controladas. 
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase(); // ejemplo recibir la propiedad en mayuscula
    }
    // con get podemos obtener alguna propiedad de una clase incluso en un ejemplo como el que tenemos dos
    // esto es util ya que si necesitaramos retornar más de una propiedad se utilizaria un solo metodo
    get getComidaFavorita() {
        return ` la comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }
}


const spiderman = new Persona('peter', 'spiderMan', 'el de la araña');
spiderman.quienSoy();

spiderman.setComidaFavorita = 'La pizza'; // utilizando el metodo set
console.log(spiderman.getComidaFavorita);
console.log(spiderman);