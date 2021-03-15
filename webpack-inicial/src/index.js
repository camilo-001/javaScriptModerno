
import { saludar } from './js/componentes.js' // importamos el archivo de componentes
import './styles.css' // importando estilos GLOBALES de css

/* const saludar = (nombre) => { // Esta fraccción de codigo ha sido movida al archivo de componentes
    console.log('creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}`;
    document.body.append(h1);
}
*/

/* al visualizar los cambios en el navegador vemos como tenemos acceso a las variable nombre y al metodo saludar
lo cual es un problema, que anterior vimos como solucionarlo con el patron modulo y las clases auto invocadas esto
si dejamos la función en este archivo y quitamos la importación*/

const nombre = 'Pepito' 

saludar(nombre);
 
