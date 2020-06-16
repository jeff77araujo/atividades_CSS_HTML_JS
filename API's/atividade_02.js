// (OBRIGATORIO)Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e
// também seu autor
// Utilize a API : https://breaking-bad-quotes.herokuapp.com/v1/quotes
//__________________________________________FINALIZADO________________________________________________
const axios = require('axios');
const rs = require('readline-sync');

// var frase = rs.question("Digite uma frase: ").toLowerCase();
// var autor = rs.question("Digite o nome do autor: ").toLowerCase();

function breakingBad() {

    axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then ( (resposta) => {
        var frase = resposta.data[0].quote;
        var autor = resposta.data[0].author;
        console.log(`Frase: ${frase}`);
        console.log(`Autor: ${autor}`);
    })
    .catch((erro) => {
        console.log(erro);
    })
}

breakingBad();

// function aleatorio() {
//     return Math.round(Math.random() * 100);
// }
// console.log(aleatorio());