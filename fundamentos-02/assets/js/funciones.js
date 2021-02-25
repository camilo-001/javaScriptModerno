
const saludar2 = function() { // manera recomendada: Es asignar a una constante la funcion anonima por temas de seguridad que no se repetirá el nombre
    console.log('HELLO WORLD!!!')
}

const saludarNombre = function ( nombre ) { // función recibiendo argumentos 
console.log('Hola ' + nombre)
}

saludar2();
saludarNombre('Parcero'); // llamando la función y enviando el argumento 

// FUNCION DE FLECHA FAT ARROW FUNCTION

const saludaFlecha = () => {
    console.log('Hola desde una funcion de flecha')
}

const saludaFlecha2 =( nombre ) =>{
    console.log('Hola desde una fatArrowFunction ' + nombre)
}

saludaFlecha();
saludaFlecha2('parceros'); 

