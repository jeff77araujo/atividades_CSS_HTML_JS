/*
Faça um algoritmo que receba uma palavra e imprima ela ao contrário.
EX: usuário informou BANANA
Algoritmo imprime:
ANANAB
*/
//______________________________________________FINALIZADO_______________________________________________
var rs = require('readline-sync')
var palavra = rs.question("Digite uma palavra: ")
var novaPalavra = ''

for (var i = palavra.length; i >= 0; i--) {
       novaPalavra = novaPalavra + palavra.charAt(i)
}
console.log(novaPalavra)

