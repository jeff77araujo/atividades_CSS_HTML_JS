// Fazer um algoritmo que receba 8 idades do usuário e no final ele imprimir
// qual é a menor idade.
//______________________________________________FINALIZADO_______________________________________________
var rs = require("readline-sync");
var cont = 0;
var numeros = 1000;

while (cont < 8) {
    var idade = rs.questionInt("Informe a idade: ");
    if (idade > 0) {
        if (idade < numeros) {
            var numeros = idade;
        }
    }
    cont++
}

console.log(`Menor idade e ${numeros}`)