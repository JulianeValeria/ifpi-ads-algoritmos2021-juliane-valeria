const input = require('prompt-sync')()

// entrada
const velocidadem_s = Number(input("Digite a velocidade em m/s "))

// processamento
const velocidadekm_h = velocidadem_s * 3.6

// saida
console.log("A velocidade ", velocidadem_s, "em m/s é equivalente a ", velocidadekm_h, "km/h")