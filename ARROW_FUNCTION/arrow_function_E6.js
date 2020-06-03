// Faça um algoritmo que diga qual é o carro menos potente da lista cars.json.
// Utilize o campo Horsepower para descobrir qual é o menos potente
// __________________________________________________FINALIZADO_____________________________________________________

var fs= require("fs")
var caminhoObj = "nova_data/cars.json"
var objetoDeserializado = fs.readFileSync(caminhoObj)
var carros = JSON.parse(objetoDeserializado)

var carrosOrdenados = carros.sort( (a, b) => (b.Horsepower - a.Horsepower))

console.log(carrosOrdenados[carrosOrdenados.length-1])