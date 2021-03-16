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

export const buscarHeroe = (id, callback) => { // esta función recibe dos parametros el id y un callback
    const heroe = heroes[id]; // extraemos el id 
    
    if (heroe){ // verificamos si el heroe existe
      callback(null, heroe); // si es así enviamos null en el primer argumento del callback seguido del heroe
    } else{ // de lo contrarió enviamos el error 
        callback(`No existe el heroe con el id ${id}`)
    }
    
    
}