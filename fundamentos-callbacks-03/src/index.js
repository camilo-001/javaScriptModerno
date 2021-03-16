// import { buscarHeroe as buscarHeroCallback} from './js/callbacks'; // importamos la función y usamos el alias
import { buscarHeroe, buscarHeroeAsync } from './js/promesas'
import './styles.css';

const heroeId = 'capi';
const heroeId2 = 'iron2'

// CALLBACKS 

/* buscarHeroe(heroeId, (err, heroe) => { // esta función recibe un heroe seguido de un callback con dos parametros
    if (err){ // si el error existe o es diferente de null retornará el error
        console.error(err)
    } else{ // de lo contrario el heroe
         console.log(heroe)
    }
});
 */

// CALLBACK HELL

/* buscarHeroe(heroeId,(err,heroe1)=>{
    if(err){return console.error(err);}

    buscarHeroe(heroeid2,(err,heroe2)=>{
        if(err){ return console.log(err);}
        console.log(`Enviando a ${heroe1.nombre} y ${ heroe2.nombre}`);
    });
}); */

// PROMESAS 

// buscarHeroe(heroeId2).then(heroe =>{ // el then indica lo que se ejecutará al resolverse la promesa si sale bien
//     console.log(`Enviando a ${heroe.nombre} a la mision`);
// }); 

// RESOLVIENDO EL CALLBACK HELL CON PROMISE.ALL

// el promise.all dispara las promesas simultaneamente y luego estas son retornadas en un arreglo 
/* Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeId2)]) // podemos aplicar n promesas
.then(([heroe1,heroe2]) => {
    // console.log('promise.all',heroe1,heroe2);
    console.log(`Enviando a ${heroe1.nombre} y ${ heroe2.nombre}`);
}).catch(err => {
    confirm(err);
}).finally(()=>{
    console.log('Se terminaron las prmesas');
}) */

// USANDO EL ASYNC

buscarHeroe('capi')
    .then(heroe => console.log(heroe))
    .catch(console.warn);

buscarHeroeAsync('iron2')
    .then(heroe => console.log(heroe))
    .catch(console.warn);
