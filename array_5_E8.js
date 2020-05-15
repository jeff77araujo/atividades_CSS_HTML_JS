// Sendo assim o algoritmo imprime :
// Nome : Fulano
// Sobrenome : Ciclano
// Idade : 22
// Peso : 80

const rs = require('readline-sync')
var cabecalho = rs.question("Digite o cabecalho: ")   //variavel cabecalho
var lista_cabecalho = cabecalho.split(";")            //lista cabecalho.split para dividir/quebras onde estiver " ; "
var dado = rs.question("Digite os dados: ")           //variavel dado
var lista_dado = dado.split(";")                      //lista dado.split para dividir/quebras onde estiver " ; "
var tamanho_cabecalho = lista_cabecalho.length        //verificar o tamanho do cabecalho
var tamanho_dado = lista_dado.length                  //verificar o tamanho do dado

if (tamanho_cabecalho != tamanho_dado) {               //verificacao se o cabecalho e do mesmo tamanho de dado
    console.log("Dados invalidos ")                   //caso não seja do mesmo tamanho os dados sao invalidos
} else {
    for (i = 0; i < tamanho_dado; i++) {               //condicao de parada
        var atributo = lista_cabecalho[i].trim()      //variavel para por o atributo no cabecalho
        var valor = lista_dado[i].trim()              //variavel para por o valor no dado
        console.log(atributo + ": " + valor)
    }
} // Finalizado