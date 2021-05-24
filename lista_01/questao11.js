numero = 789;

var centena = Math.floor(numero / 100);

var dezena = Math.floor((numero / 10)) % 10;

var unidade = (numero % 100) % 10;

console.log("Número: " + numero);
console.log("Ordem inversa: " + unidade + dezena + centena);