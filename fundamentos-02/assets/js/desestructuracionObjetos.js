let tony = {
    nombre: 'tony', // propiedades (nombre = key toni = value)
    codeName: 'ironman',
    itsLife: false,
    age: 40,
    suits: ['Mark I', 'Mark V', 'Hulkbuster']
};

const imprimePropiedades = ({ nombre, codeName, itsLife, suits }) => { // esta es la desestructuración del objeto debemos tener en cuenta que 
    // estamos recibiendo un objeto con las propiedades de nombre, codeName etc... y apartir de ahí tomamos sus propiedades
    console.log(nombre)
    console.log(codeName)
    console.log(itsLife)

    console.log(suits)
}

imprimePropiedades(tony); // enviamos el objeto tony 

const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    edad: 50,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}
// supongamos que necesito extraer propiedades del objeto de la manera habitual

// const nombre = deadpool.nombre
// const apellido = deadpool.apellido
// const poder = deadpool.poder

// destructurando el objeto deeadpool


const { apellido, nombre, poder, edad = 0 } = deadpool; // dentro de los {} colocamos las propeidades que queremos extraer del objeto
// tambien podemos asignar valores por defecto

console.log(nombre, apellido, poder, edad)

// tambien podemos destructurar en los argumentos de una función que recibe a un objeto como argumento
// function imprimirHeroe({nombre, apellido,poder,edad =0}){
//     console.log(nombre,apellido,poder,edad);
// }
//
// imprimirHeroe(deadpool);

// destructurción de Arreglos

const heroes = ['Super Man', 'Batman', 'Flash'];

// const [h1,h2,h3] = heroes;
//
// console.log(h1,h2,h3)

// si solo quisieramos a batman o sea un dato especifico del arreglo

// const[ , h2 , ] = heroes;
//
// console.log(h2);