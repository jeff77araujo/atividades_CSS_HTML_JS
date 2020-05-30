// (OBRIGATÓRIO) Escreva um programa que passe por todos os números de 1 a 50 e
// para cada um deles imprima na tela se o número é par ou ímpar. Caso o número
// também seja primo, o programa deve dizer que ele é primo. (um número primo é um
// número que só é divisível por ele mesmo e por 1). Dica: Neste exercício você pode
// precisar de ajuda do operador MÓDULO (%). Você também pode precisar criar mais de
// um loop.
// EX.:
// 1 ÍMPAR PRIMO
// 2 PAR PRIMO
// 3 ÍMPAR PRIMO
// 4 PAR
// 5 ÍMPAR PRIMO
// 6 PAR
// 7 ÍMPAR PRIMO
// 8 PAR
// 9 ÍMPAR
// 10 PAR   

// __________________________________________Finalizado___________________________________________________________

// var ehPrimo = require ('prime-number')
// var limite = 50;

// for (var cont = 1; cont <= limite; cont++) {
//     if (cont % 2 === 0 && ehPrimo(cont)) {
//         console.log(cont + ' eh PAR & PRIMO');
//     } else if (cont % 2 === 0) {
//         console.log(cont + ' eh PAR');
//     } else if (cont % 2 === 1 && ehPrimo(cont)) {
//         console.log(cont + ' eh IMPAR & PRIMO');
//     } else if (cont % 2 === 1) {
//         console.log(cont + ' eh IMPAR');
//     } else (
//         console.log(cont)
//     )
// } 

// ou

var n1 = 1;
var n2 = 50;

while (n1 <= n2) {

	var ehPrimo = true;
	var divisor = 2;
	while (divisor < n1) {
		if (n1 % divisor == 0) {
			// nao eh primo
			ehPrimo = false;
		}
		divisor++;
	}

	if (n1 % 2 == 0) {
		if (ehPrimo) {
			console.log(n1 + ' é par e é primo');
		} else {
			console.log(n1 + ' é par');
		}
	} else {
		if (ehPrimo) {
			console.log(n1 + ' é impar e é primo');
		} else {
			console.log(n1 + ' é impar');
		}
	}
	n1++;
}