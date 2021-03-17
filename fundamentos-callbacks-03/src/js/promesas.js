const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar golpes'
    },
    iron: {
        nombre: 'IronMan',
        poder: 'Tener mucho dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Arañas'
    }
}
// BUSCAR HERORE CON ASYNC
export const buscarHeroeAsync = async (id) => { // el async retorna una promesa. Así que no debemos utilizar el new promise

    const heroe = heroes[id];
    if (heroe) {
        return heroe;
    } else {
        throw Error(`No existe un heroe con el id ${id}`);
    }
};
// BUSCAR HERORE SIN ASYNC
//
export const buscarHeroe = (id) => {
    const heroe = heroes[id];
    return new Promise((resolve, reject) => { // declaración de una promesa
        if (heroe) { // evaluamos si el heroe recibido existe
            resolve(heroe); // resolvemos o devolvemos el heroe literal
        } else {
            reject(`No existe un heroe con el id ${id}`); // de lo contrario enviamos un error
        }
    });
}



