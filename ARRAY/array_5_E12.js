// Faça um programa que receba uma palavra e diga se existe vogais ou não.
// Utilize o método indexOf()
//______________________________________________FINALIZADO_______________________________________________

var rs = require('readline-sync')
var vogal = ['a', 'e', 'i', 'o', 'u']

var palavra = rs.question('Digite uma palavra: ')
var temVogal = false

for (var i = 0; i < palavra.length; i++) {
    if (vogal.indexOf(palavra[i]) >= 0) {
        temVogal = true
    }
}
if (temVogal == true) {
    console.log(`${palavra} tem vogais`)
} else {
    console.log(`${palavra} nao tem vogais`)
} // Finalizado



