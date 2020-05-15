// Faça um algoritmo que receba um texto de entrada e diga se a primeira letra é
// maiúscula ou não

var rs = require('readline-sync');
var palavra = rs.question("Digite uma palavra: ");
var alfa = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

for (var i = 0; i < alfa.length; i++) {
    if (palavra[0] == alfa[i]) {
        console.log('Sua palavra comeca com letra maiuscula');
    } else {
        console.log('Sua palavra NAO comeca com letra maiuscula');
    }
    break;
}


// Finalizado