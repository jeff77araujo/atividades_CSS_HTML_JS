// var area, lados, cent
/*
Escreva um programa para ler o número de lados de um polígono regular e a medida do lado (em cm). 
Calcular e imprimir o seguinte: 
− Se o número de lados for igual a 3 escrever TRIANGULO e o valor da área 
− Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área. 
− Se o número de lados for igual a 5 escrever PENTÁGONO. 
*/
var readlineSync = require('readline-sync')
var lado = readlineSync.questionInt("Digite quantos lados tem o poligono, entre 3 e 5: ")
var cent = readlineSync.questionInt("Digite os centimetros de um dos lados: ")
var area = ""

if (lado !== 3 && lado !==4 && lado !==5) {
    console.log("Digite um numero entre 3 e 5")
    return
}
if (lado == 3) {
    area = (cent * cent * Math.sqrt(3)) / 4
    console.log("A area do TRIANGULO e " + area)
} else if (lado == 4) {
    area = (cent * cent) / 2
    console.log("A area do QUADRADO e " + area)
} else if (lados == 5) {
    area = ((cent * cent * Math.sqrt(3)) / 4) * 5
    console.log("A area do PENTAGONO e " + area)
} else {
    console.log("FIM")
}

// Finalizado