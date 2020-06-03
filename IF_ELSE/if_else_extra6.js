// Crie um programa que peça ao usuário o nome e a idade de n pessoas e os imprima na
// tela (EX.: “O nome digitado foi: Robson”.). O programa deve ser interrompido quando o
// usuário digitar o nome “Final”. No final, o programa deve imprimir o número de usuários
// que foram cadastrados no total.

// ______________________________________________FINALIZADO_____________________________________________________________

var rs = require('readline-sync')
var comeco = rs.keyInYN('Deseja efetuar cadastro? : ')

var nomes = []
if (comeco == false) {
    console.log('Encerrado.')
} else {
    while (true) {
        if (encerrar === 'n') {
            console.log(`Voce cadastrou ${nomes.length} pessoas`)
            break
        } else {
            var nome = rs.question('Digite o nome da pessoa: ')
            var idade = rs.questionInt(`Digite a idade de ${nome}: `)
            nomes.push(nome)
            console.log(`Nome: ${nome}, idade: ${idade} anos.`)
        }
        var encerrar = rs.question('Continuar (y) ou finalizar (n)? ')
    }
}