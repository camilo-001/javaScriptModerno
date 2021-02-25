
function sumar(a, b) {
    return a + b; // el return nos regresa un dato, a diferencia de usar el console.log como lo vimos en el archivo de funciones
    // este dato que regresa el return podemos utilizarlo como una variable posteriormente ejecutada la función lo veremos mas abajo
}
// en una función de felcha

const sumar2 = (a, b) => a + b; // en este caso al tener solamente una linea de codigo despues del "=>" y esa linea sea el return
// podemos escribir la funcion de esta manera sin usar las {} si tuvieramos más de dos lineas si tendriamos que usar la palabra return
// y usando las {}

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

// console.log(sumar(3, 5));
// console.log(sumar2(3, 3));

// console.log(getAleatorio());
// console.log(getAleatorio2());

// USANDO EL RETURN PARA TRABAJAR CON LOS VALORES DE LAS FUNCIONES 

function crearPersona(nombre, apellido) {
    return { // con el return podemos retornar objetos literales
        nombre, // si la key de la propiedad es igual al value en este caso "nombre = nombre" podemos colocarlo de esta manera
        apellido,
    }
}

const crearPersona2 = (nombre, apellido) => ({ nombre, apellido }); // tenemos que usar los () para indicar a js que es un objeto no
// el cuerpo de la función 

const persona = crearPersona('marco', 'aurelio'); // llamamos la función y almacenamos el retorno dentro de esta constante 


const persona2 = crearPersona2('julio', 'cesar');

// console.log(persona); // imprimimos el objeto 
// console.log(persona2);

function imprimeArgumentos() {
    console.log(arguments);  // en las funciones tradcionales el metodo arguments nos muestra todos los argumentos que le envamos
    // a una función asi no se hayan definido estos argumentos en la misma como en este caso.
}

const argumentos = imprimeArgumentos(12, true, 'perro', false, 'gato'); // enviamos n cantidad de argumentos y la función los mostrara

const imprimeArgumentos2 = (...args) => args;// en las funciones de flecha el metodo "arguments" como tal no existe pero el "..." hace referencia
// a un parametro rest que indica que todos los argumentos que sean enviados a la función retornalos en un arreglo


// const argumentos2  = imprimeArgumentos2(12, true , 'caballo', false , 'vaca');
// console.log({ argumentos2 });

// BONUS  si quisieramos almacenar todos esos argumentos que retornan en ese arreglo con el ...args en variables para su posterior uso 

const [edad, vivo, mascota1, muere, mascota2] = imprimeArgumentos2(12, true, 'caballo', false, 'vaca');
console.log({edad, vivo, mascota1, muere, mascota2}); // imprimimos todas las variables 

const personaEdad = edad; // campturamos el valor de una de esas variables en otras
console.log('la edad de la persona es ' + personaEdad) 