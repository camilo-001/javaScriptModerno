

let deck = []; // arreglo deck

const tipos = ['C', 'D', 'H', 'S']; // tipos de cartas 
const especiale = ['A', 'J', 'Q', 'K']

const crearDeck = () => { // funcuión para crear baraja

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

    deck = _.shuffle(deck) // usamos el underscore con el shuflle para generar de nuevo el arreglo de deck pero con un orden aleatorio

    console.log(deck);
}

crearDeck();

// función para pedir una carta 
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    } else {
        const carta = deck.pop(); // extraemos y eliminamos del deck la ultima carta del deck
        console.log(carta);
        console.log(deck);
        return carta;
    }
}

pedirCarta();

const valorCarta = (carta) => { // función para extraer el valor de la carta
    const valor = carta.substring(0, carta.length - 1); // tomamos el primer valor de la carta en caso de que sea 10D o un simple 2D
    return (isNaN(valor)) ? // isNaN nos permite diferenciar para hallar el valor de la carta si es un numero ejem 2D y si no ejem KD
        (valor === 'A') ? 11 : 10 // si no es un numero evaluamos la letra y damos puntos a las letras de las cartas (A = 11,(Q,K,J) = 10 )
        : valor * 1; // pero si es numero entonces multiplicamos por 1 ya que necesitamos convertir valor de string a number y al extraerlo este viene siendo un string
}

 const valor = valorCarta('10D');
 console.log(valor);