
let a = 10;
let b = a; // cuando asigamos a un variable otra variable y estas son primitivos js pasa el valor como tal
// hace una copia por así decir del valor de una variable y lo pasa 
console.log(a, b);
a += 2;
b += 10;
console.log(a, b);

// pero con las funciones y objetos es diferente 

let juan = { nombre: 'Juan' };
let ana = juan; // en lugar de copiar el valor y asignarlo a la nueva variable js crea una REFERENCIA del primer objeto en el segundo
// de igual forma veremos al imprimir estos objetos que ambos llevan por nombre el Juan
console.log(juan, ana);

ana.nombre = 'Ana' // entonces, al modificar en este caso el objeto ana, renombrando el valor de ana donde el nombre ya no es juan si no es Ana

console.log(juan, ana); // y cuando imprimimos ambos objetos nos damos cuenta que ambos llevan por nombre Ana, ya que la referencia creada
// entre juan y ana indica que uno cambió por consiguiente el otro debe hacerlo igual

const cambiaNombre = (persona) => { // lo mismo pasa con las funciones. Vemos como esta función recibe un objeto como argumento
    persona.nombre = 'tony'; // y definimos su atributo nombre 
    return persona;
}

let peter = { nombre: 'Peter' }; // creamos el objeto peter que como atributi tiene nombre: Peter

console.log({ peter })

let tony = cambiaNombre(peter); // y en el objeto tony igualamos a la funcíon y enviamos a peter como argumento el cual creara una referencia

console.log({ peter, tony }); // al imprimir ambos objetos vemos como tony y peter tienen el mismo valor en el nombre 

// SOLUCIÓN EN OBJETOS

// si queremos romper esta referencia y simplemente poder copiar ese valor y que despues apunten a espacios en memoria diferentes
let pedro = { nombre: 'Pedro' };
let maria = { ...pedro }  // usamos el operador SPREAD el cual nos permite indicar que separe los elementos 
maria.nombre = 'Maria';
console.log({ maria, pedro }); // pero luego de cambiar la propiedad nombre de maría vemos como ambos mantienen su respectivo nombre sin alterar el del otro

// SOLUCION EN FUNCIONES 

const cambiaNombre2 = ({...persona2}) => { // usamos el operador SPREAD de igual forma en el parametro que recibe la función indicando la separación de elementos
    persona2.nombre2 = 'Marcos';
    return persona2;
}
let luis = { nombre2: 'Luis' };
let fer = cambiaNombre2(luis);

console.log({ luis, fer });