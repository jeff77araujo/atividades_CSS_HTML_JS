// Faça um programa que receba uma palavra e verifica se a palavra está cometendo o
// seguinte erro de português
// Antes de “p” ou “b” devemos usar M
// Caso a palavra esteja errada informar o erro
// Se não dizer que a palavra está certa.
// Utilize o método includes()
//______________________________________________FINALIZADO_______________________________________________

var rs = require('readline-sync')

var palavra = rs.question('Digite uma palavra: ')
if (palavra.includes('nb') || palavra.includes('np')) {
    console.log('A palavra esta incorreta.')
} else {
    console.log(`${palavra} está correta`)
} // Finalizado



