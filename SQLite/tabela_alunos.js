const sqlite3 = require('sqlite3');
const rs = require('readline-sync')

var db = new sqlite3.Database('./Alunos.db', (erro) => {
    if (erro) {
        console.log(erro);
    } else {
        // console.log('Conectado com sucesso no banco de dados')
        // db.run('CREATE TABLE Alunos(nome text, idade integer, turma integer, id integer)');
    }
});

const trataErroNaQuery = (erro) => {
    if (erro) {
        console.log('Aconteceu algo de errado: ' + erro.message);
        return;
    }
}

function inserirAlunos() {
    var nome = rs.question('Nome: ');
    var idade = rs.question('Idade: ');
    var turma = rs.question('Turma: ');
    var id = rs.questionInt('ID: ');

    var dados = [nome, idade, turma, id]
    var inserindo = 'INSERT INTO Alunos (nome, idade, turma, id) VALUES (?, ?, ?, ?)';
    db.run(inserindo, dados, trataErroNaQuery());
}

// SELECT * FROM Alunos
function consultaAlunos() {
    const consulta = 'SELECT * FROM Alunos';
    db.all(consulta, (erro, Alunos) => {
        if (erro) {
            console.log('Erro: ', erro.message);
        }
        Alunos.forEach(aluno => console.log(aluno));
    })
}

function consultaLike() {
    var nomesPossiveis = 'J%';
    var idadeMinima = 27;
    db.all('SELECT * FROM ALunos WHERE nome LIKE ?', nomesPossiveis, (erro, alunos) => {
        if (erro) console.log('Erro: ', erro.message);
        else {
            console.table(alunos);
        }
    })
}

// inserirAlunos();
consultaAlunos();
consultaLike();