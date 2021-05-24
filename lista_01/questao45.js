var dinheiro = 117;
var cinquenta = Math.floor(dinheiro / 50);
var dez = Math.floor(dinheiro % 50 / 10);
var cinco = Math.floor(dinheiro % 50 % 10 / 5);
var um = Math.floor(dinheiro % 50 % 10 % 5);

console.log("Para sacar o valor de " + dinheiro + " serão necessárias " + cinquenta + " notas de cinquenta reais, " + dez + " notas de dez reais, " + cinco + " notas de cinco reais e " + um + " notas de um real.");