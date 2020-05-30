// Escolha um programa que você já fez em atividades passadas e faça o output do
// terminal ficar colorido com o pacote CHALK: https://www.npmjs.com/package/chalk

var chalk = require('chalk')
var rs = require ('readline-sync');

var repete = rs.question('Digite a quantidade de vezes: ')
while  (repete > 0) {
    console.log(chalk.blue('BIP') + chalk.green('BIP'))
    repete--
} // Finalizado