var numero = 8956;

var milhar = Math.floor(numero / 1000);

var centena = Math.floor(numero / 100) % 10;

var dezena = Math.floor((numero / 10)) % 10;

var unidade = (numero % 1000) % 100 % 10;
var soma = milhar + unidade + dezena + centena;
console.log("Número: " + numero);
console.log(milhar + " + " + centena + " + " + dezena + " + " + unidade + " = " + soma);