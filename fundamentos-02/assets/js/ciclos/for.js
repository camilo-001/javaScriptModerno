
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Acuaman'];

//CICLO FOR
console.warn('Ciclo For')
for (let i = 0; i < heroes.length; i++) { // sintaxis basica de for recorriendo un arreglo
    console.log(heroes[i]);
}

console.warn('Ciclo for in')

for(let i in heroes){ // sintaxis basica de un for in recorriendo un arreglo
    console.log(heroes[i]);
}

console.warn('ciclo for of');

for(let i of heroes){ // sintaxis basica de un for of recorriendo un arreglo 
    console.log(i)
}