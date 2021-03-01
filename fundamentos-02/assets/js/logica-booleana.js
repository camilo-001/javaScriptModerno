
const regresaTrue = () => {
    console.log('Regresa true')
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false')
    return false;
}

console.warn('not o la negación');
console.log(true);
console.log(!true); // negación de true = false
console.log(!false);// negación de false = true

console.log(!regresaFalse()); // negando la función que retorna false 

console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true
console.log('==================');
console.log(regresaTrue() && regresaFalse()); // false