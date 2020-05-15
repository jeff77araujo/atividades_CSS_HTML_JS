/*
Crie um programa que receba uma palavra e exiba quantas consoantes e vogais essa
palavra tem.
EX : saúde
2 consoantes
3 vogais
*/

var rs = require('readline-sync')
var palavra = rs.question('Digite uma palavra: ')
var vogal = ['a', 'e', 'i', 'o', 'u']

console.log(palavra)
var vogais = []
var consoantes = []
for (var indice1 = 0; indice1 < palavra.length; indice1++) {
    if (vogal.includes(palavra[indice1])) {
        vogais.push(palavra[indice1])
    } else {
        consoantes.push(palavra[indice1])
    }
}
    console.log(`Possui ${consoantes.length} consoantes`)
    console.log(`Possui ${vogais.length} vogais`)  // Finalizado