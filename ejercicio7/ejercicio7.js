function esPalindromo(palabra) {
    palabra = palabra.toLowerCase();
    const palabraRevertida = palabra.split('').reverse().join('');

    return palabra === palabraRevertida;
}
const palabra = "reconocer";
console.log("¿Es", palabra, "un palíndromo?", esPalindromo(palabra));
