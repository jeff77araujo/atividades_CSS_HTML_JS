// Faça um programa que receba uma frase e troque a palavra ANTILOPE por um de seus
// nomes cientificos : Kobus ellipsiprymnus
// Utilize o método replace()

var rs = require('readline-sync')
var frase = rs.question('Digite uma frase com a palavra ANTILOPE: ')

var frase = frase.replace('antilope', 'Kobus ellipsiprymnus')

console.log(frase) // Finalizado



