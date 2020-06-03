// Faça um algoritmo que calcule a média de potência dos carros da Europe (Europa)
// Similar a atividade 2 porém usaremos o campo Origin para selecionar os carros da
// europa e depois disso aplicar a média em cima do campo Horsepower.
// __________________________________________________FINALIZADO_____________________________________________________

var fs= require("fs")
var rs = require('readline-sync')
var caminhoObj = "nova_data/cars.json"
var objetoDeserializado = fs.readFileSync(caminhoObj)
var carros = JSON.parse(objetoDeserializado)

var filtro = 'Europe'
var carrosFiltrados = carros.filter( (carro) => (carro.Origin == filtro))
var soma = 0

carrosFiltrados.forEach((carro) => soma = soma + carro.Horsepower)
var media = soma / carrosFiltrados.length

console.log(media.toFixed(2))