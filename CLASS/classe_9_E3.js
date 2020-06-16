// Criar um módulo que calcule a média de uma coleção de números.
// Para isso crie um arquivo chamado calcula-media.js.
// No módulo exporte uma função media(arr) que recebe como argumento um array de números.
// A função deve iterar por esses números e retornar sua média.
// Após isso no arquivo da atividade importe o módulo criado e solicite ao usuário 3
// números, utilize o módulo criado para calcular a média e no final imprima o resultado
// para o usuário.

var biblioteca = require('./calcula-media')

var n1 = rs.questionInt('Quantas numeros voce quer somar? ')
var n2 = rs.questionInt('Quantas numeros voce quer somar? ')
var n3 = rs.questionInt('Quantas numeros voce quer somar? ')

while (cont < quantidade) {
     var dados = rs.questionInt('> ')
     numeros.push(dados)
}
var resultado = biblioteca.calculaMedia(n1, n2, n3)

console.log(resultado)