//extends --> herencia

class Persona { // Clase que extenderemos


    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias'
    }

    static mensaje() {
        console.log('Hola desde un metodo estatico');
    }
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita() {
        return ` la comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

/* Al extender una clase nos encontramos que la clase hija, hereda todo de la clase padre, metodos, propiedades
pero la clase hija puede tener metodos propios y propiedades de si misma.*/

class Heroe extends Persona { // extendemos la clase persona en la clase heroes
    clan = '';// una propiedad de la clase hija
    constructor(nombre, codigo, frase, clan = 'sin clan') { // constructor de la clase hija
        super(nombre, codigo, frase); // super, extiende el constructor de la clase padre
        this.clan = clan;
    }
    quienSoy() {
        super.quienSoy(); // con super podemos utilizar tambien sus metodos dentro de un metodo propio de la clase hija
        console.log(`. Mi clan es ${this.clan}`);
    }
}

//instanciando la clase heroe que es heredada de la clase persona 
const spiderman = new Heroe('peter parker', 'Spiderman', 'el de la araña', 'the avengers');
console.log(spiderman);

spiderman.quienSoy(); // vemos que también podemos usar los metodos de la clase padre.
