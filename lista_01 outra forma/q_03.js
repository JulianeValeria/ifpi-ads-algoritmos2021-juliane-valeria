const imput = require("prompt-sync")()

//entrada
const minutos = Number(imput("Minuto: "))

//processamento
const horas = minutos / 60
const resto_minutos = minutos % 60

//saida
console.log("São ", horas, "hora(s) e ", resto_minutos, "minuto(s)")