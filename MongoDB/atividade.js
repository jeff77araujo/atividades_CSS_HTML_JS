& 'C:\Program Files\MongoDB\Server\4.2\bin\mongoimport.exe' -d arbyte -c restaurants --jsonArray .\Downloads\restaurants.json

& 'C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe'

use arbyte

show collections

// 1 - Escreva uma consulta do MongoDB para exibir todos os
// documentos de restaurantes da coleção.
db.restaurants.find({})
// 2 - Escreva uma consulta do MongoDB para exibir os campos
// restaurant_id, nome, bairro e culinária de todos os documentos no restaurante
// de coleção.
db.restaurants.find({} , {"restaurant_id": 1, "name":1, "borough":1, "cuisine" :1 })
// 3 - Escreva uma consulta do MongoDB para exibir os campos
// restaurant_id, nome, bairro e culinária, mas exclua o campo _id para todos os
// documentos na coleção.
db.restaurants.find({},{"restaurant_id" : 1, "name":1, "borough":1, "cuisine" :1, "_id":0 })
// 4 - Escreva uma consulta do MongoDB para exibir todo o
// restaurante localizado no bairro Bronx.
db.restaurants.find({"borough": "Bronx"})
// 5 - Escreva uma consulta do MongoDB para exibir os 5
// primeiros restaurantes do Bronx.
db.restaurants.find({"borough": "Bronx"}).limit(5)
// 6 - Escreva uma consulta do MongoDB para exibir os próximos 5 
// restaurantes depois de pular os 5 primeiros que estão no bairro Bronx.
db.restaurants.find({"borough": "Bronx"}).skip(5).limit(5)
// 7 - Escreva uma consulta do MongoDB para encontrar os
// restaurantes que atingiram uma pontuação superior a 90.
db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 90}}}})
// 8 - Escreva uma consulta do MongoDB para encontrar os
// restaurantes que atingiram uma pontuação maior que 80, mas menor que 100.
db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 80 , $lt :100}}}})
// 9 - Escreva uma consulta do MongoDB para localizar o ID do restaurante, o
// nome, o bairro e a culinária dos restaurantes que contêm 'Wil' como as três
// primeiras letras do nome.
db.restaurants.find({name: /^Wil/},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1})
// 10 - Escreva uma consulta do MongoDB para encontrar os restaurantes que
// pertencem ao bairro Bronx e prepararam pratos americanos ou chineses.
db.restaurants.find({"borough": "Bronx" , $or : [{ "cuisine" : "American " },{ "cuisine" : "Chinese" }] } )
// 11 - Escreva uma consulta do MongoDB para localizar o ID do restaurante, o
// nome, o bairro e a cozinha dos restaurantes que pertencem ao bairro Staten
// Island ou Queens ou Bronxor Brooklyn.
db.restaurants.find({"borough" :{$in :["Staten Island","Queens","Bronx","Brooklyn"]}},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1})
// 12 - Escreva uma consulta do MongoDB para localizar o ID do restaurante, o
// nome, o bairro e a culinária dos restaurantes que não pertencem aos bairros
// Staten Island, Queens, Bronx ou Brooklyn.
