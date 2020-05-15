/*
*/


function converteIdadeParaDias(idade){
    totalDias = idade[0]*365 + idade[1]*30 + idade[2]
    return totalDias
}

var rs = require('readline-sync')

var velhice = []

velhice[0] = rs.questionInt('Quantos anos?')
velhice[1] = rs.questionInt('Quantos meses?')
velhice[2] = rs.questionInt('Quantos dias?')

console.log(velhice)
var diasTotais = converteIdadeParaDias(velhice)

console.log(diasTotais)
console.log(converteIdadeParaDias(velhice))