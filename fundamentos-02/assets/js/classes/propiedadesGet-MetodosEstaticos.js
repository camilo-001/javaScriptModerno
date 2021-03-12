//METODOS ESTATICOS

// Las propiedades estaticas como los metoodos estaticos nos permiten utilizar dichos metodos y propiedades 
// sin necesidad de instanciar la clase

class Persona {

    static _conteo = 0; // propiedad estatica conteo 
    static get conteo() { // un metodo get estatico 
        return Persona._conteo + ' instancias'
    }

    static mensaje(){
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

        // en este caso usaremos la propiedad estatica para ver cuantas veces 
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
}

const spiderman = new Persona('peter', 'spiderMan', 'el de la araña');
spiderman.quienSoy();

console.log('Conteo estatico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje(); 

coercion 
hoisting