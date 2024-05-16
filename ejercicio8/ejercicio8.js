const montoBase = 1000
const porcentajeImpuesto = 18

const calcularImpuesto = (function(monto, porcentaje) { 
    const impuesto = (monto * porcentaje) / 100 
    const montoTotal = monto + impuesto
     return montoTotal
})(montoBase, porcentajeImpuesto)
console.log("Monto total con impuestos:", calcularImpuesto)
