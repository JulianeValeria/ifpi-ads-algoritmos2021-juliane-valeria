var numerador1 = 3;
var denominador1 = 5;
var numerador2 = 2;
var denominador2 = 6;

var denominadorComum = denominador1 * denominador2;
var numeradorSoma = denominadorComum / denominador1 * numerador1 + denominadorComum / denominador2 * numerador2;

console.log("As frações " + numerador1 + "/" + denominador1 + " e " + numerador2 + "/" + denominador2 + " tem como soma: " + numeradorSoma + "/" + denominadorComum);