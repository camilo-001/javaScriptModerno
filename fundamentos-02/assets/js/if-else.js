
let a = 5;

if (a >= 10) {
    console.log('a es mayor a 10');
}
console.log('fin del programa');

const hoy = new Date();
let dia = hoy.getDay();

console.log({ dia });

if( dia === 0){
    console.log('Domingo');
} else{
    console.log('No es Domingo');
}
