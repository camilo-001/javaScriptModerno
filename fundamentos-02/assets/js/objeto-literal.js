// objeto que tiene pares de valores 

let personaje = {
    nombre: 'tony', // propiedades (nombre = key toni = value)
    codeName: 'ironman',
    itsLife: false,
    age: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    suits: ['Mark I', 'Mark V', 'Hulkbuster']
};

console.log(personaje); // imprimiendo el objeto
console.log('Nombre', personaje.nombre) // imprimiendo una propiedad especifica 
console.log('latitud ', personaje.coords.lat) // imprimiendo propiedad con una subpropiedad de ese objeto
console.log('Trajes', personaje.suits.length) // imprimiendo la longitud del arreglo que esta por atributo
console.log('Ultimo traje', personaje.suits.length - 1)// imprimiendo el ultimo elemento de ese arreglo 

// MAS DETALLES 

delete personaje.age; // borrar propiedad de un objeto

personaje.casado = true; // agregando una propiedad nueva al objeto

Object.freeze(personaje) // para imposibilitar cambios en el objeto como el borrar, agregar o editar una propiedad del objeto
// Object.freeze imposibilita lo anterior pero al objeto como tal, pero no lo hace a las propiedades de un objeto que este como propiedad de otro
// en este caso el objeto de coords que es propiedad del objeto personajes. Las propiedades de coords si son alterables.

const entriePares = Object.entries(personaje); // manejando un objeto como arreglo con Object.entries
console.log(entriePares);

const propiedades = Object.getOwnPropertyNames(personaje); // trae las keys de las propiedades del objeto personaje 
const values = Object.values(personaje); // trae los values de las propiedades del objeto personaje
console.log(propiedades, values);