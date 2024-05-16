const ordenarAscendente = (array) => {
    return array.sort((a, b) => a - b);
};
const numeros = [5, 2, 9, 1, 7];
const numerosOrdenados = ordenarAscendente(numeros);
console.log(numerosOrdenados);
