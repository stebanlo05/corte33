function calcularAreaCirculo(radio) {
    const area = Math.PI * radio * radio;
    return area;
}

const radio = 5;
const area = calcularAreaCirculo(radio);
console.log("El área del círculo es:", area);
