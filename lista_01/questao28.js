var horas = 520;
var dias = Math.floor(horas / 24);
var semanas = Math.floor(dias / 7);
console.log("Tempo total: " + horas + " h.");

horas = horas % 24 % 7;
console.log("Separando em semanas, dias e horas teríamos: " + semanas + " sem " + dias + " dias e " + horas + " h.");