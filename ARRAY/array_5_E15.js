// Faça um algoritmo que receba uma palavra, após isso ele remove todas as vogais
// dessa palavra e imprime a palavra novamente porém sem as vogais.
// EX: Entrada banana
// O algoritmo imprime :
// Bnn
// Utilize o método split() para quebrar a string e depois montar ela sem vogais.
// _____________________________________________FINALIZADO______________________________________________________________

var rs = require('readline-sync')
var palavra = rs.question('Digite uma palavra: ')
var final = []
for (var i = 0; i < palavra.length; i++) {
    if (palavra[i] == 'a' || palavra[i] == 'e' || palavra[i] == 'i' || palavra[i] == 'o' || palavra[i] == 'u') {} else {
        final.push(palavra[i])
    }
}
var res = final.join('')
console.log(res)


// var rs = require("readline-sync");
// var solicitaPalavra = rs.question("Informe uma palavra: ").toLowerCase();
// var palavra = solicitaPalavra.split("")
// var vogais = ["a", "e", "i", "o", "u"]
// var imprimiConsoante = []

// for (var i = 0; i < palavra.length; i++) {
//     for (var c = 0; c < vogais.length; c++) {
//         if (palavra[i] != vogais[c]) {
//             imprimiConsoante.push(palavra)
//         }
//     }
// }
// console.log(imprimiConsoante)