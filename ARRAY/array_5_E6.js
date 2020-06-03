/*
Peça ao usuário para digitar dez valores numéricos e ordene por ordem crescente
esses valores, guardando-os num vetor e depois exibindo para o usuário.Para esta
atividade tente usar o algoritmo Bubble Sort (Método da bolha), pesquise sobre ele na
internet.
Vídeo bem detalhado do assunto: https://www.youtube.com/watch?v=ZYO43bi0IXY
Video ilustrativo : https://www.youtube.com/watch?v=lyZQPjUT5B4
*/
//______________________________________________FINALIZADO_______________________________________________
var rs = require('readline-sync');
var numeros = []

for (var cont = 0; cont < 10; cont++) {
    numeros[cont] = rs.questionFloat('Digite um numero: '); // pede 5 números de 1 a 10
    //numeros.push(digite)
}
var numerosOrdenados = numeros.sort()
console.log(numerosOrdenados)  // Finalizado
