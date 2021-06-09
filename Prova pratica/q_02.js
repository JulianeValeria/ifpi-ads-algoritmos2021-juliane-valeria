const prompt = require('prompt-sync')()

function main() {

    console.log('----- Varejo -----')

    //entrada
    const nome_vendedor = prompt('Digite o nome do vendedor: ')
    const valor_total_vendas = Number(prompt('Digite o valor total de vendas no mês: '))
    const salario_fixo = 1100
    let comissao

    //processamento e saida
    comissao1 = (valor_total_vendas - 5000) * 0.05
    salario_final_1 = salario_fixo + comissao1
    comissao2 = (((valor_total_vendas - 10000) * (0.1)) + 250)
    salario_final_2 = salario_fixo + comissao2
    comissao3 = valor_total_vendas * 0.2
    salario_final_3 = salario_fixo + comissao3

    if (valor_total_vendas > 5000 && valor_total_vendas <= 10000) {
        console.log('Nome: ', nome_vendedor)
        console.log('Valor da primeira faixa de comissão: R$  ', comissao1)
        console.log('Valor total das comissões: R$  ', comissao1)
        console.log('Valor do salário final: R$  ', salario_final_1)
    } else if (valor_total_vendas > 10000 && valor_total_vendas <= 30000) {
        console.log('Nome: ', nome_vendedor)
        console.log('Valor da segunda faixa de comissão: R$  ', comissao2)
        console.log('Valor total das comissões: R$  ', comissao2)
        console.log('Valor do salário final: R$  ', salario_final_2)
    } else if (valor_total_vendas > 30000) {
        console.log('Nome: ', nome_vendedor)
        console.log('Valor da terceira faixa de comissão: R$  ', comissao3)
        console.log('Valor total das comissões: R$  ', comissao3)
        console.log('Valor do salário final: R$  ', salario_final_3)
    }

}

main()