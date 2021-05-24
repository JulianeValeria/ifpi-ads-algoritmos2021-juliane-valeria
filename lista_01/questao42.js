var x1 = 5;
var y1 = 5;
var x2 = 8;
var y2 = 9;

console.log("Ponto 1: (" + x1 + ", " + y1 + ")");
console.log("Ponto 2: (" + x2 + ", " + y2 + ")");

var distancia1 = Math.pow((x2 - x1), 2);
var distancia2 = Math.pow((y2 - y1), 2);

var distancia = Math.sqrt(distancia1 + distancia2, 2);

console.log("Distância entre os pontos: " + distancia)