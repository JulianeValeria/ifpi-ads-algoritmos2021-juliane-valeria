var minutos = 8768;
console.log("Tempo em minutos: " + minutos + " min.");
var dias = Math.floor(minutos / 1440);
var horas = Math.floor((minutos % 1440) / 60);
var minutos = (minutos % 1440) % 60;
console.log("Separando o tempo em dias, horas e minutos teríamos " + dias + " dias " + horas + " h e " + minutos + " min.");