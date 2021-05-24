const imput = require("prompt-sync")()

//entrada
const dolar = Number(imput("Valor em dólar: "))

//processamento
const dolar_hoje = 5.36
const reais = dolar * dolar_hoje

//saida
console.log(dolar, " dolar(es) equivalem a ", reais.toFixed(2), "reais")