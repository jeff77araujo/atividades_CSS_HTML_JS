const sqlite3 = require('sqlite3');
const rs = require('readline-sync')

const trataErroNaQuery = (erro) => {
    if (erro) {
        console.log('Aconteceu algo de errado: ' + erro.message);
        return;
    }
    console.log('Dado inserido com sucesso!')
}

var db = new sqlite3.Database('carros.db', (erro) => {
    if (erro) {
        console.log(erro);
    } else {
        // console.log('Conectado com sucesso no banco de dados')
        // db.run('CREATE TABLE carro(marca text, modelo text, cor text, ano integer, valor integer)');
    }
});

function inserirCarro() {
    var marca = rs.question('marca: ');
    var modelo = rs.question('modelo: ');
    var cor = rs.question('cor: ');
    var ano = rs.questionInt('ano: ');
    var valor = rs.questionInt('valor: ');

    var dados = [marca, modelo, cor, ano, valor]
    var inserindo = 'INSERT INTO carro (marca, modelo, cor, ano, valor) VALUES (?, ?, ?, ?, ?)';
    db.run(inserindo, dados, trataErroNaQuery());
    menu ()
}

function consultaCarros() {
    const consulta = 'SELECT * FROM carro';
    db.all(consulta, [], (erro, listaDeCarros) => {
        if (erro) {
            console.log(erro.message);
        }
        listaDeCarros.forEach(carro => console.table(carro));
        menu ()
    })
}

// function atualizaDadosDaTabela() {
//     const consulta = 'UPDATE carro SET cor = ? WHERE ano < ?';
//     db.run(consulta, ['branco', 1973], (erro) => {
//         if (erro) console.log('Aconteceu algo de errado: ' + erro.message);
//         else {
//             console.log("carro atualizado com sucesso");
//         }
//     });
// }

// const capitalize = (s) => {
//     if (typeof s !== 'string') return ''
//     return s.charAt(0).toUpperCase() + s.slice(1)
//   }
  

function deletaCarro() {
    var carro = rs.question('Digite o modelo do carro a ser deletado: ').toLowerCase()
    const consulta = 'DELETE FROM carro WHERE modelo = ?';
    db.run(consulta, carro, (erro) => {
        if (erro) {
            console.log('Aconteceu algo de errado: ' + erro.message);
            return;
        } else {
            console.log(`${carro} removido com sucesso`);
        }
        menu ()
    });
}


function menu () {
    var opcao = rs.questionInt('cadastrar (1), remover (2), visualizar (3), sair (4): ')
    if (opcao == 1) {
        inserirCarro()
        return
    } else if (opcao == 2) {
        deletaCarro()
        return
    } else if (opcao == 3) {
        consultaCarros()
        return
    } else if (opcao == 4) {
        console.log('Encerrado')
        return
    } else {
        console.log('Opcao invalida')
    }
}

menu ()