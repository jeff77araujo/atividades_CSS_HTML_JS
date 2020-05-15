/* Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo 
é Acutângulo, Retângulo ou Obtusângulo. Sendo que: 
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º) 
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º) 
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
*/

var readlineSync = require('readline-sync')
var angulo = readlineSync.question("Digite a medida do angulo: ")

if (angulo == 90) {
    console.log("Triangulo Retangulo")
} else if (angulo > 90) {
    console.log("Triangulo Obtusangulo")
} else if (angulo < 90) {
    console.log("Triangulo Acutangulo")
} else if (angulo > 360) {
    console.log("Favor, digite um numero de 0 a 360")
}

// Finalizado