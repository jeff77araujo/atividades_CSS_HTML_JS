/* Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior idade, se mais de
um possuir maior idade apresentar o nome de todos os que possuem maior idade.
Para isso crie uma classe Aluno que receba duas variáveis no construtor nome e idade
e inicialize essas variáveis nas propriedades do objeto.
Após isso peça para o usuário cadastrar o primeiro aluno e solicite nome e idade.
Crie o objeto do aluno e adicione em um array.
Repita esse passo para os outros alunos.
Ao final o algoritmo deve iterar pelo array de alunos e descobrir quais são os alunos
com maior idade e imprimir seus nomes */
//______________________________________________FINALIZADO_______________________________________________
var rs = require('readline-sync');
var alunos = []

class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function cadastrarAluno() {
    var primeiroAluno = new Aluno(
        this.nome = rs.question('Insira o nome do aluno: '),
        this.idade = rs.question('Insira a idade do aluno: '),
    )
    return primeiroAluno;
}
for (var i = 0; i < 3; i++) {
    alunos.push(cadastrarAluno())
}
console.log(alunos)

var maiorIdadeEntreTodos = 0

for (var i = 0; i < alunos.length; i++) {
    var idadeAtual = alunos[i].idade
    if (idadeAtual > maiorIdadeEntreTodos) {
        maiorIdadeEntreTodos = idadeAtual
    }
}
console.log(`Maior idade encontrada é ${maiorIdadeEntreTodos}`)

for (var i = 0; i < alunos.length; i++){
    if (maiorIdadeEntreTodos == alunos[i].idade){
        console.log("Maior idade é do", alunos[i])
    }
}



/*método trabalhoso, manual 
 if (maiorIdade[0].idade >= maiorIdade[1].idade && maiorIdade[0].idade >= maiorIdade[2].idade) {
     console.log('a maior idade e ', maiorIdade[0])
 } 
 if (maiorIdade[1].idade >= maiorIdade[2].idade && maiorIdade[1].idade >= maiorIdade[0].idade) {
    console.log('a maior idade e ', maiorIdade[1])
 } 
 if (maiorIdade[2].idade >= maiorIdade[0].idade && maiorIdade[2].idade >= maiorIdade[1].idade) {
    console.log('a maior idade e ', maiorIdade[2])
 }
 */