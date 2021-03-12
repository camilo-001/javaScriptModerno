/*un singleton es una instancia unica de una clase. Un singleton no es un concepto de JavaScript, es un concepto de programación en el cual nosotros tratamos de tener 
una clase que cuando se intente volver a instanciar, verifique si ya se ha creado anteriormente y si no, entonces crea la instancia y si ya habíamos creado una, entonces usa la misma.
*/
class Singleton {

    static instancia;// undefined
    nombre = '';
    constructor(nombre = '') {
        

    }

}

const instancia1 = new Singleton('ironman')