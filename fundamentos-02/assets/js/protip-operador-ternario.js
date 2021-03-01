
const elMenor = (a, b) => { // el operador ternario puede ser usado en un return
    return (a < b) ? a : b
}

const elMayor = (a, b) => (a > b) ? a : b; // abreviando si solo está return

console.log(elMenor(12, 32));
console.log(elMayor(33, 12));

const tieneMembresia = (miembro) => (miembro) ? '2 usd' : '10 usd';
console.log(tieneMembresia(true));

// el operador ternario tambien puede ser usado dentro de un objeto o arreglo evaluando condiciones

const amigo = true; // 
const amigosArr = [
    'peter',
    'tony',
    'manuel',
    amigo ? 'thor' : 'loki',// si amigo es = a true dentro del arreglo se almacenara thor de lo contrario loki
]
    ;
console.log(amigosArr);


// usando el operador ternario en más de una condicion
const nota = 65; // 
const grado = nota >= 95 ? 'A+' :
    nota >= 90 ? 'A' :
        nota >= 85 ? 'B+' :
            nota >= 80 ? 'B' : 'F';

console.log({ grado, nota });
