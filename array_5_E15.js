// Faça um algoritmo que receba uma palavra, após isso ele remove todas as vogais
// dessa palavra e imprime a palavra novamente porém sem as vogais.
// EX: Entrada banana
// O algoritmo imprime :
// Bnn
// Utilize o método split() para quebrar a string e depois montar ela sem vogais.
// ___________________________________________________________________________________________________________

var rs = require('readline-sync')
var palavra = rs.question('Digite uma palavra: ')
var vogais = ['a', 'e', 'i', 'o', 'u']

var res = palavra.split()
var novaPalavra = []

for (var i = 0; i < res.length; i++) {
    for (var ii = 0; ii < vogais.length; ii++) {
        if (res[i] == vogais[i])
        novaPalavra.splice(vogais[i], res)
    }
}
console.log(novaPalavra)

// 
