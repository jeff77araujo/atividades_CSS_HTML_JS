// Crie um algoritmo que conte quantos carros do Japan (Japão) existem na base
// cars.json
// O campo que define o país no cars.json é Origin
// A comparação da string pode ser utilizada usando a palavra “Japan”

// A resolução é similar ao exercício 1
// __________________________________________________FINALIZADO_____________________________________________________

var fs= require("fs")
var caminhoObj = "nova_data/cars.json"
var objetoDeserializado = fs.readFileSync(caminhoObj)
var carros = JSON.parse(objetoDeserializado)

var filtro = 'Japan'
var carrosFiltrados = carros.filter( (carro) => (carro.Origin == filtro))

console.log(carrosFiltrados.length)