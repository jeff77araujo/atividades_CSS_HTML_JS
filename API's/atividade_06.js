// Faça um algoritmo que receba uma equação do usuário e retorna o resultadosimplificadoUtilize a api : 
// ​https://newton.now.sh/simplify/​{equacao}
// Exemplo das entradas
// 2*2 = 2 vezes 2
// 2+2 = 2 mais 2
// 2-2 = 2 menos 2
// 2(over)2 = 2 dividido por 2
// 2^2 = 2 elevado a 2
// Leia a documentação para entender as operações mais avançadas
// https://github.com/aunyks/newton-apiSuponha que a equação seja : 2 + 5 . 2 . 6 = 62
// Exemplo de chamada : ​
// https://newton.now.sh/simplify/2+5*2*6
// ________________________________________________________________________________________________________________

const axios = require('axios')
const rs = require('readline-sync')

var equacao = rs.question('Digite uma equação: ')

console.log(equacao)

axios.get(`https://newton.now.sh/simplify/${equacao}`)
    .then((resposta) => {
        var resultado = resposta.data.result
        console.log(resultado)
    })
    .catch((erro) => {
        console.log(erro)
    })