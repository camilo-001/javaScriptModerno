
// const arr = new Array(10); // forma poco comun de hacer un arreglo 

let videoJuegos = ['Mario 3', 'Megaman', 'NeedForSpeed'] // creando un arreglo llamado videojuegos
console.log(videoJuegos) // imprimimos todo el arreglo 

console.log(videoJuegos[0]); // imprimiendo primera posición

let arregloCosas = [ // un arreglo puede contener cualquier cosaa, incluso funciones
    true,
     123, 
     'carlos', 
     1 + 2,
     function(){},
     ['x','Megaman','Zero', 'Dr.light'] // incluso otro arreglo
    ]; 

console.log(arregloCosas[5][3]); // imprimiendo el ultimo dato del arreglo que esta dentro del arregloCosas
