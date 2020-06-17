const apiCovid = 'https://covid19-brazil-api.now.sh/api/report/v1';
const axios = require('axios');
const rs = require('readline-sync')

const nomeDoEstado = rs.question('Digite o nome do estado: ');

axios.get(apiCovid)
    .then((resposta) => {
        const dadosPorEstado = resposta.data.data;
        dadosPorEstado.forEach((uf) => {
            if (uf.state == nomeDoEstado) {
                console.log(uf)
            } else {
                console.log('Erro!')
            }
        })
    })