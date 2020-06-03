/*
Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada
entre
estas notas (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este
procedimento para uma turma composta por cinco alunos, usando o comando For.
Exemplo de tela de saída:
Entre com o nome do aluno: João da Silva
Entre com o grau A: 5.0
Entre com o grau B: 6.0
O aluno João da Silva tem uma média:5.7
*/
//______________________________________________FINALIZADO_______________________________________________

var readlineSync = require('readline-sync')
var nome =  readlineSync.question("Nome do aluno: ")
var notaA = readlineSync.questionFloat("Digite a nota A: ")
var notaB = readlineSync.questionFloat("Digite a nota B: ")
var alunos = 5
var media = (notaA + notaB) / 2



for (var i = 1; i <= alunos; i++) {
    console.log(`O aluno ${nome} tem uma media ${media.toFixed(2)}`)
    nome = readlineSync.question("Nome do aluno: ")
    notaA = readlineSync.questionFloat("Digite a nota A: ")
    notaB = readlineSync.questionFloat("Digite a nota B: ")
    media = (notaA + notaB) / 2
}

// finalizado