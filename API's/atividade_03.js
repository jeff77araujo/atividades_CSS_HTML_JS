// (OBRIGATORIO)Faça um algoritmo que receba um número de um episódio de
// Breaking Bad.
// Após isso o algoritmo deve imprimir o elenco de personagens e também de qual
// temporada é este episódio.

// Caso o episódio seja inválido dizer ao usuário que não existe este episódio.
// Utilize a api : https://www.breakingbadapi.com/api/episodes/{NUMERO_DO_EPISODIO}
// Exemplo episodio 10 : https://www.breakingbadapi.com/api/episodes/10
//_____________________________________FINALIZADO_____________________________________________________
const axios = require('axios');
const rs = require('readline-sync');

var numeroDoEp = rs.questionInt('Digite o numero do episodio: ');

function episodes() {
    axios.get(`https://www.breakingbadapi.com/api/episodes/${numeroDoEp}`)
    .then ((resposta) => {
        var personagens = resposta.data[0].characters;
        var temporada = resposta.data[0].season;
        console.log(`Total: ${personagens.length} personagens:`)
        console.log(`Personagens: ${personagens}`)
        console.log(`${temporada}° Temporada.`)
    })
}
episodes()