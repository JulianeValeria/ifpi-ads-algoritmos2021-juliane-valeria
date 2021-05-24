var numero = 345
var centena = Math.floor(numero / 100)

var dezena = Math.floor((numero / 10)) % 10

var unidade = (numero % 100) % 10
var soma = unidade + dezena + centena
console.log('No número ' + numero + ', o algarismo das centenas é ' + centena + ', o algarismo das dezenas é ' + dezena + ' e o algarismo das unidades é o ' + unidade + '. A soma deles resulta em ' + soma + '.')