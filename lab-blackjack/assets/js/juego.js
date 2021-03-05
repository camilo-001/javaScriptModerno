const miModulo = (() => { // PATRON MODULO  - PROTEJE ACCEDER AL CODIGO DESDE LA CONSOLA DEL NAVEGADOR
    'use strict'
    let deck = []; // arreglo deck

    const tipos = ['C', 'D', 'H', 'S'], // tipos de cartas 
        especiale = ['A', 'J', 'Q', 'K']; // tipos especiales de cartas

    let puntosJugadores = []; // este arreglo es para determinar los puntos de cada uno de los jugadores, tomando a la computadora también como un jugador

    //Referencias Html
    const btnPedir = document.getElementById('btnPedir'),
        btnDetener = document.getElementById('btnDetener'),
        btnNuevo = document.getElementById('btnNuevo');

    const smallsPuntos = document.querySelectorAll('small'),
        divCartasJugadores = document.querySelectorAll('.divCartas'); // referenciamos las etiquetas del html donde irán la cartas de los jugadores referenciamos por la clase
    // fin referencias Html

    // FUNCIÓN PARA INICIALIZAR EL JUEGO
    const inicializarJuego = (numJugadores = 2) => { // la función de inicializar se encarga de refresacar todo y de crear un nuevo deck para la partida y recibe como argumento la cantidad
        // de jugaddores que estarán jugando
        deck = crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) { // creamos este ciclo para agregar los jugadores al arreglo de jugadores
            puntosJugadores.push(0)
        }
        smallsPuntos.forEach(elem => elem.innerText = 0); // reestableciendo los valores de los contadores de puntos de cada uno de los jugadores 
        divCartasJugadores.forEach(elem => elem.innerHTML = ''); // reestableciendo las cartas del html para cada jugador
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    // FUNCION PARA CREAR LA BARAJA 
    const crearDeck = () => {

        deck = []; // reinicializando el deck

        for (let i = 2; i <= 10; i++) { // creamos el ciclo que empieza en 2
            for (let tipo of tipos) { // creamos un ciclo for-of para asignar el tipo de carta a cada numero del ciclo anterir¡or
                deck.push(i + tipo);
            }
        }
        for (let tipo of tipos) { // creamos un ciclo de tipos de cartas
            for (let esp of especiale) { // creamos un ciclo de las cartas especiales que se asignan a cada tipo del ciclo anterior
                deck.push(esp + tipo)
            }
        }
        return _.shuffle(deck) // retornamos y usamos el underscore con el shuflle para generar de nuevo el arreglo de deck pero con un orden aleatorio 
    }

    // FUNCION PARA PEDIR UNA CARTA 
    const pedirCarta = () => {

        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        } else {
            return deck.pop(); // retornamos, extraemos y eliminamos del deck la ultima carta del deck
        }
    }

    // FUNCION PARA OBTENER EL VALOR DE UNA CARTA
    const valorCarta = (carta) => { // función para extraer el valor de la carta
        const valor = carta.substring(0, carta.length - 1); // tomamos el primer valor de la carta en caso de que sea 10D o un simple 2D
        return (isNaN(valor)) ? // isNaN nos permite diferenciar para hallar el valor de la carta si es un numero ejem 2D y si no ejem KD
            (valor === 'A') ? 11 : 10 // si no es un numero evaluamos la letra y damos puntos a las letras de las cartas (A = 11,(Q,K,J) = 10 )
            : valor * 1; // pero si es numero entonces multiplicamos por 1 ya que necesitamos convertir valor de string a number y al extraerlo este viene siendo un string
    }
    // EVENTOS

    //ESTA FUNCION ACUMULA LOS PUNTOS DE LOS JUGADORES
    const acumularPuntos = (carta, turno) => { // 0 = orimer jugador y el ultimo en este caso será la computadora
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta); // puntosJugadores[turno] nos dice a que jugador se le estan sumando los puntos y se los sumamos
        smallsPuntos[turno].innerText = puntosJugadores[turno]; // lo mismo aca. nos indica a que jugador se le mostrarán los puntos en el html y manipulamos el DOM
        return puntosJugadores[turno]; // retornamos los puntos del jugador
    }

    // ESTA FUNCIÓN MODIFICA EL DOM PARA AÑADIR LAS CARTAS DE CADA JUGADOR 
    const crearCarta = (carta, turno) => { // recibe la carta y el turno el cual es la posición del jugador al que le van las cartas, esa posición es en el arreglo que se genera al crear la referencia de html
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('cartas');

        divCartasJugadores[turno].append(imgCarta);
    }

    // ESTA FUNCIÓN DETERMINA QUIEN ES EL GANADOR 
    const determinarGanador = () => {
        const [puntosMinimos, puntosComputadora] = puntosJugadores; // desestructurando el arreglo
        setTimeout(() => {

            if (puntosComputadora === puntosMinimos) {
                alert('Nadie gana')
            } else if (puntosMinimos > 21) {
                alert('computadora WINS!');
            } else if (puntosComputadora > 21) {
                alert('Jugador 1 WINS!')
            } else if (puntosComputadora === 21) {
                alert('computadora WINS!');

            }
        }, 100)
    }

    // TURNO DE LA COMPUTADORA
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1) // llamamos la función de acumularPuntos donde enviamos el valor de la carta, junto con la posición en el arreglo de la computadora que en este caso es la ultima
            crearCarta(carta, puntosJugadores.length - 1) // lo ptopio hacemos con con la creación de las cartas con la manipulacioń del DOM

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
        determinarGanador();
    }
    btnPedir.addEventListener('click', () => { // creando el evento click para pedir carta 

        const carta = pedirCarta(); // llamando pedir carta 
        const puntosJugador = acumularPuntos(carta, 0); // llamamos a la función de acumular puntos y esta nos retorna los puntos del jugador así que los almacenamos en la constante
        crearCarta(carta, 0);

        if (puntosJugador > 21) {
            alert('Lo siento ha perdido');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador); // si el jugador ya perdio el turno de la computadora
        } else if (puntosJugador === 21) {
            alert('¡21! ¡WIN!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });

    btnDetener.addEventListener('click', () => {
        
        alert('Turno de la computadora')
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    });

    btnNuevo.addEventListener('click', () => {
         inicializarJuego();
    });

/*  Si usamos el patron modulo todo lo que este dentro de este será privado es decir no se podrá acceder a ninguno de sus metodos o funciones desde otro lugar
    pero si usamos el return lo que haremos es que todo lo que queramos permitir al publico debemos colocarlo en el return
 */

    return {
        nuevoJuego: inicializarJuego // queremos permitir al publico la función de iniciar juego, pero esta sera conocida fuera de este modulo como "nuevoJuego" es decir que si 
        // se quiere utilizar en otros lugares esta debe ser llamada por nuevoJuego
    }
})();