export const saludar = (nombre) => { // usamos el export para permitir el uso desde otro archivo de la función
    console.log('creando etiqueta h1 en el HTML del dist on server  ');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}`;
    document.body.append(h1);
}