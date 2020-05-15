// Faça um programa que receba uma palavra e diga se existe vogais ou não.
// Utilize o método indexOf()

var rs = require('readline-sync')
var vogal = ['a', 'e', 'i', 'o', 'u']

var palavra = rs.question('Digite uma palavra: ')
var temVogal = false

for (var indice = 0; indice < palavra.length; indice++) {
    if (vogal.indexOf(palavra[indice]) >= 0) {
        temVogal = true
    }
}
if (temVogal == true) {
    console.log(`${palavra} tem vogais`)
} else {
    console.log(`${palavra} nao tem vogais`)
} // Finalizado



