// (OBRIGATORIO)Solicite ao usuário para inserir yes ou no
// Após isso utilize a API https://yesno.wtf/api
// Esta api traz um dado aleatório yes ou no
// No final imprima se o usuário acertou ou não
//_______________________________________FINALIZADO_____________________________________________
const axios = require('axios');
const rs = require('readline-sync')

var resposta = rs.question("insira YES ou NO: ").toLowerCase()

function yesNo() {
    axios.get('https://yesno.wtf/api')
    .then ( (response) => {
        if (resposta == response.data.answer) {
            console.log("Acertou!")
        } else {
            console.log("Errou!")
        }
    })
    .catch((erro) => {console.log(erro)})
}
yesNo()




