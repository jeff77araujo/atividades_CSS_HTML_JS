// Crie um algoritmo que solicite um número para o usuário e diga quantos carros mais
// potente que o valor informado.
// Para isso utiliza a propriedade “Horsepower” do cars.json
// DICA: função filter ou procure como contar quantos objetos tem x valor em uma lista no
// google.
// __________________________________________________FINALIZADO_____________________________________________________

var fs= require("fs")
var rs = require('readline-sync')
var caminhoObj = "nova_data/cars.json"
var objetoDeserializado = fs.readFileSync(caminhoObj)
var carros = JSON.parse(objetoDeserializado)

var filtro = rs.questionInt('Informa a potencia do carro: ')
var carrosFiltrados = carros.filter( (carro) => {
    if (carro.Horsepower > filtro) {
        return true
    }
})

console.log(carrosFiltrados.length)