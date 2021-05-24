var numero = 654;

var centena = Math.floor(numero / 100);
var dezena = Math.floor((numero / 10)) % 10;
var unidade = (numero % 100) % 10;

var inverso = unidade * 100 + dezena * 10 + centena;
var diferenca = numero - inverso;
console.log("Número: " + numero);
console.log("Ordem inversa: " + inverso);
console.log("Diferença: " + diferenca);