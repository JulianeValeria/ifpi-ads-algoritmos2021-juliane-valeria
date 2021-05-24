var dinheiro = 17;
var parcelas = Math.floor(dinheiro / 3);
var extra = dinheiro % 3;
var entrada = parcelas + extra;

console.log("Para o produto de valor " + dinheiro + ", a entrada é R$ " + entrada.toFixed(2) + " e as duas parcelas R$ " + parcelas.toFixed(2) + " cada.");