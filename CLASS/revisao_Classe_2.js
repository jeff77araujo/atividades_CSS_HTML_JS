// Criar um algoritmo que receba 2 carros e verifique se os carros são iguais
// Para isso :
// Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
// inicialize as propriedades com estes valores.
// Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
// cor.
// Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
// e cor.
// Ao final o algoritmo deve comparar se os carro são iguais.
// Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.

const rs = require('readline-sync')

class Carro {
	constructor(marca, modelo, cor) {
		this.marca = marca;
		this.modelo = modelo;
		this.cor = cor;
	}
}

function criarCarro () {
var marca = rs.question('Marca: ');
var modelo = rs.question('Modelo: ');
var cor = rs.question('Cor: ');
return new Carro(marca, modelo, cor);
}

var carro1 = criarCarro()
console.log(carro1)

var carro2 = criarCarro()
console.log(carro2)

function saoCarrosIguais (modelo1, modelo2) {
    if (modelo1.modelo == modelo2.modelo) {
       return true
    }
    return false
}

var comparacao = saoCarrosIguais(carro1, carro2)

if (comparacao) {
    console.log(`${carro1.modelo} e ${carro2.modelo} Sao iguais`)
} else {
    console.log(`${carro1.modelo} e ${carro2.modelo} nao sao iguais`)
}