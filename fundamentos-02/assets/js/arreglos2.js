let juegos = ['warcraft', 'mario', 'cod', 'apex'];
console.log('largo:', juegos.length) // .leng nos da el largo del arreglo 

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1]; // una forma de obtener el ultimo elemento
console.log({ primero, ultimo });

juegos.forEach((elemento, indice, arr) => { // recorrer todo un arreglo 
    console.log({ elemento, indice, arr })
})

let nuevaLongitud = juegos.push('skyrim'); // el metodo push añade un nuevo elemento al arreglo
console.log({nuevaLongitud,juegos}); // y retorna el nuevo valor del length, asi que lo imprimimos junto con el arreglo juegos


nuevaLongitud =  juegos.unshift('Shadow'); // unshift añade un nuevo elemento al inicio del arreglo
console.log({nuevaLongitud,juegos}); // tambien retorna un nuevo length

let juegoBorrado = juegos.pop(); // pop elimina el ultimo elemento del arreglo  
console.log({juegoBorrado, juegos}); // retorna el nombre del elemento borrado

let juegosBorrados = juegos.splice(1, 1); // splice elimina elementos de un array, recibe dos valores
                                          // la posición de donde empieza a borrar y la cantidad que borrara despues de ese inicio                                          
console.log({juegosBorrados, juegos}); // retorna un arreglo con los elementos borrados 

