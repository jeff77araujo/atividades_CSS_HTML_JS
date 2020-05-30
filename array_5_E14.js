// Faça um programa que receba uma string, o programa vai estar esperando uma data no
// formato dd/MM/yyyy onde :
// a. dd -> dia
// b. mm -> mês
// c. yyyy -> ano
// Utilize o método match() para fazer essa validação, você deverá utilizar um expressão
// regular para resolver este problema.
// Caso a data esteja valida o algoritmo deve imprimir :
// Entrada -> 22/05/2020
// O algoritmo imprime :
// Dia : 22
// Mes : 05
// Ano : 2020
// ___________________________________________________FINALIZADO________________________________________________________

var rs = require('readline-sync');
var data = rs.question('Digite com data 00/00/0000: ')
// var dia  = data.match(/(\d\d)/)
// console.log(dia[0])
// data = data.substring(dia['index']+3)
// var mes  = data.match(/(\d\d)/)
// console.log(mes[0])
// data = data.substring(mes['index']+3)
//  var ano = data.match(/(\d\d\d\d)/)
// console.log(ano[0])
console.log(data.match(/(\d\d)\/(\d\d)\/(\d{4})/g)[0].split('/').join('\n'))