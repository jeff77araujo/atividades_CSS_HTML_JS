// Faça um algoritmo que solicite ao usuário A ou B
// Caso o usuário escolha A
// O algoritmo deve imprimir toda informação do carro com maior aceleração
// Caso o usuário escolha B
// O algoritmo deve imprimir toda informação do carro com maior potência
// Se houver mais de um carro imprimir todos 1 por 1.
// __________________________________________________FINALIZADO_____________________________________________________

var fs = require("fs")
var rs = require('readline-sync')
var caminhoObj = "nova_data/cars.json"
var objetoDeserializado = fs.readFileSync(caminhoObj)
var carros = JSON.parse(objetoDeserializado)

var opcao = rs.keyInYN("Selecione (Y) para carro com maior aceleracao, ou (N) para potencia: ")
if (opcao == true) {
    var carrosOrdenados = carros.sort((a, b) => (a.Acceleration - b.Acceleration))
    var maiorAcceleration = carrosOrdenados[0].Acceleration
    carrosOrdenados.forEach((carro) => {if (carro.Acceleration == maiorAcceleration) console.log(carro)})
} else {
    var carrosOrdenados = carros.sort((a, b) => (b.Horsepower - a.Horsepower))
    var maiorPotencia = carrosOrdenados[0].Horsepower
    carrosOrdenados.forEach((carro) => {if (carro.Horsepower == maiorPotencia) console.log(carro)})
}
