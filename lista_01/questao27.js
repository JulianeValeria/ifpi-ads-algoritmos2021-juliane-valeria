var segundos = 3845;
console.log("Após terminar sua caminhada, Henrique, com o cronômetro, marcou " + segundos + " segundos.");
var horas = Math.floor(segundos / 3600);
var minutos = Math.floor((segundos % 3600) / 60);
var segundos = (segundos % 3600) % 60;

console.log("Separando o tempo em horas, segundos e minutos teríamos " + horas + " h " + minutos + " min " + segundos + " s.");