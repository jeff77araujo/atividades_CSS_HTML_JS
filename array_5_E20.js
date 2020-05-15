// Faça um algoritmo que pergunta para o usuário se ele quer criptografar ou
// descriptografar.
// Utilize como criptografia a cifra de césar
// Exemplo ->
// Entrada : ARBYTE
// SAIDA: DUEBWH
// Caso o usuario opte por criptografar o algoritmo deve aplicar a cifra de césar e mostrar
// o valor criptografado
// Caso o usuário opte por descriptografar o algoritmo deve fazer a engenharia reversa e
// retorna ao valor antes de criptografia.
// Utilize todo o conhecimento até aqui pra desenvolver este algoritmo

var palavra 
var temp = 0
var cifra = []
const cesar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C']
var rs = require('readline-sync')
palavra = rs.question('Digite uma palavra : ')

for(i = 0;i < palavra.length;i++){
 temp = cesar.indexOf(palavra[i])
cifra.push(cesar[temp+3])

}
console.log(cifra.join(""))

for(i = 0;i < palavra.length;i++){
    temp = cesar.indexOf(palavra[i],3)
   cifra.push(cesar[temp-3])
   
   }
   console.log(cifra.join(""))

