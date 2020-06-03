/*
Uma empresa abriu uma linha de crédito para os funcionários.
 O valor da prestação não pode ultrapassar 30% do salário. 

Faça um programa que receba o salário, o valor do empréstimo e o número de prestações e informe se o 
empréstimo pode ser concedido. Nenhum dos valores informados pode ser zero ou negativo.
*/
//______________________________________________FINALIZADO_______________________________________________
var readlineSync = require('readline-sync')
var salario = readlineSync.questionFloat("Digite o salario: ")
var emprestimo = readlineSync.questionFloat("Digite o emprestimo: ")
var parcelas = readlineSync.questionInt("Digite a quantidade de parcelas: ")

var salario30 = (salario / 10) * 3
var mensal = emprestimo / parcelas

console.log("Salario: ", salario)
console.log("Valor do emprestimo: ", emprestimo)
console.log("Quantidade de parcelas: ", parcelas)

if (mensal > salario30) {
    console.log("Emprestimo recusado, as parcelas ultrapassaram 30 porcento do seu salario")
} else {
    console.log(`Emprestimo de R$ ${emprestimo.toFixed(2)} aprovado.`)
    console.log(`Parcelado em ${parcelas} vezes de R$ ${mensal.toFixed(2)}.`)    
}

// Finalizado