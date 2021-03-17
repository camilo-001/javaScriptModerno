/* 1 -- Si no usaramos el async el retorno de esta función sería un arreglo de promesas, más no los datos 
esto sucede porque el codigo está escrito de manerá sincrona, y al ejecutarse se ejecuta de manera 
más rapida que en resolver la promesa, entonces al usar el await indicamos que estamos esperando que
la promesa sea resulta y apenas esta se resuleva se continuará con el codigo. 

2-- Apenas se resuelva ela promesa pondremos el resultado en el arreglo de heroesArr, si el await no estuviese
veriamos como el arreglo estuviese lleno de promesas, más no con los datos que esperamos 

3-- Para poder utilizar el await este debe contenerse dentro de una función async, 
*/

import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];

export const obtenerHeroesArr = async () => { // 3
    const heroesArr = [];
    for (const id of heroesIds) {
        const heroe = await buscarHeroe(id) // 1
        heroesArr.push(heroe); // 2
    }
    // OPTIMIZACIÓN DEL CODIGO ANTERIOR

    // return await Promise.all(heroesIds.map(buscarHeroe));

    return heroesArr;

}
// MANEJO DE ERRORES CON EL AWAIT

// para manejar los errores usamos el try y el catch
export const obtenerHeroesAwait = async (id) => {
    try { 
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (err) {
        console.log('catch error');
        throw (err);
    }
}






