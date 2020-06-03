// Faça um programa que receba um nome e imprima a terceira letra do nome.
// Utilize o método charAt() para esta atividade.
//______________________________________________FINALIZADO_______________________________________________

var rs = require('readline-sync')

var nome = rs.question('Digite um nome: ')
var posicao = nome.charAt(2)
console.log(posicao) // Finalizado