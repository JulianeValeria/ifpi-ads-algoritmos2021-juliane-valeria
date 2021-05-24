var input = require("prompt-sync")()

// entradas
var horas = Number(input("Horas: "))
var minutos = Number(input("Minutos: "))

//processsamento
horas = horas * 60
minutos = horas + minutos

//saida
console.log("São ", minutos, "minutos")