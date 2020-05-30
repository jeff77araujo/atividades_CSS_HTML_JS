// Faça um algoritmo que diga qual é o carro mais potente da lista cars.json.
// Utilize o campo Horsepower para descobrir qual é o mais potente
// __________________________________________________FINALIZADO_____________________________________________________

var fs= require("fs")
var rs = require('readline-sync')
var caminhoObj = "nova_data/cars.json"
var objetoDeserializado = fs.readFileSync(caminhoObj)
var carros = JSON.parse(objetoDeserializado)

var carrosOrdenados = carros.sort( (a, b) => (b.Horsepower - a.Horsepower))

console.log(carrosOrdenados[0])