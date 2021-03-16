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
export const buscarHeroe = (id) => {

    const heroe = heroes[id];

    return new Promise((resolve, reject) => {

        if (heroe) {
            resolve(heroe);
        } else {
            reject(`No existe un heroe con el id ${id}`);
        }
    });
}
