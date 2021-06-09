const prompt = require('prompt-sync')()

function main() {

    console.log('----- Média de casos de Covid -----')

    //entrada
    const media_hoje = Number(prompt('Digite a média atual de casos da Covid:  '))
    const m_14_dias_atras = Number(prompt('Digite a média de casos da Covid de 14 dias atras: '))

    //processamento e saida
    var porcentagem = (((media_hoje / m_14_dias_atras) - 1) * 100)

    if (porcentagem >= 15) {
        console.log('Em alta, ocorreu o aumento de  ', porcentagem.toFixed(2), '%.')
    } else if (porcentagem < 0) {
        console.log('Em queda, ocorreu a diminuição de ', porcentagem.toFixed(2), '%.')
    } else {
        console.log('Em estabilidade')
    }
}

main()