// Fazer um algoritmo que receba 8 idades do usuário e no final ele imprimir
// qual é a menor idade.


var rs = require('readline-sync')
var idades = []
var idade = 0
var cont = 0
var menorIdade = 0

console.log('Digite 8 idades diferentes: ')
while (cont < 8) {
    idade = rs.questionInt("> ")
    idades.push(idade)
    if (idade < idades) {
        menorIdade.push(idades)
    }
    console.log(idades)
    cont++
}

// for (var i = 0; i < idades.length; i++) {
//     // if (idades[i] < idades[i]) {
//     //     menorIdade.push(idades)
//     // }
// }
console.log(`Menor idade e ${menorIdade}`)