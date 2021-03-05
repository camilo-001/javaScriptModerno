// CLASES BASISCAS Y METODOS 

class Persona {
    // propiedades de la clase 
    nombre = '';
    codigo = '';
    frase = '';
    // consturctor de la clase es un metodo que se ejecuta en el momento que se cra una instancia de la clase persona
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {

        // si no inicializamos los argumentos en el constructor podríamos usar un if como el siguiente 
        // if(!nombre )  throw Error('No puedes instanciar sin enviar argumentos porque retornaria undefine')

        // refrencias a la instancia de esa clase
        this.nombre = nombre;
        this.codigo = codigo;// para poder usar las propiedades en el constructor usamos el this
        this.frase = frase;
    }
    // definir metodos dentro un clase 
    quienSoy() { // podemos definir metodos que no reciban parametros(depende de lo que se quiera)
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }
}

// Creamos una instancia nueva de la clase persona 
const spiderman = new Persona('peter', 'spiderMan', 'el de la araña'); 
console.log(spiderman);

// para llamar un metodo de una clase

spiderman.quienSoy(); 