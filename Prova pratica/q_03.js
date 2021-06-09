const prompt = require('prompt-sync')()


function main() {

    //entradas

    console.log('----- Média -----')

    const nome_aluno = prompt('Digite seu nome: ')
    const nota_1 = Number(prompt('Digite a nota da 1ª avaliação: '))
    const nota_2 = Number(prompt('Digite a nota da 2ª avaliação: '))
    const nota_3 = Number(prompt('Digite a nota das atividades: '))

    //processamento e saida
    const media_pond = ((nota_1 * 0.2) + (nota_2 * 0.3) + (nota_3 * 0.1)) / 0.6

    console.log('Aluno: ', nome_aluno)
    if (media_pond >= 7) {
        console.log('Aprovado, nota: ', media_pond)
    } else if (media_pond < 4) {
        console.log('Reprovado')
    } else {
        const nota_prova_final = Number(prompt('Digite a nota da prova final: '))
        prova_final(nota_prova_final, media_pond)
    }
}

function prova_final(nota_prova_final, media_pond) {
    const media_final = (nota_prova_final + media_pond) / 2
    if (media_final >= 6) {
        console.log('Aprovado pós-PF, obteve: ', media_final.toFixed(2))
    } else {
        console.log('Reprovado pós-PF, obteve: ', media_final.toFixed(2))
    }
}

main()