// Elabore um algoritmo que calcule o que deve ser pago por um produto,
// solicitando o preço da etiqueta do produto e a escolha da condição de
// pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de
// pagamento escolhida e efetuar o cálculo adequado. Código Condição de
// pagamento
// - 1 À vista em dinheiro ou cheque, recebe 10% de desconto
// - 2 À vista no cartão de crédito, recebe 15% de desconto
// - 3 Em duas vezes, preço normal de etiqueta sem juros
// - 4 Em duas vezes, preço normal de etiqueta mais juros de 10%
//______________________________________________FINALIZADO_______________________________________________
var rs = require('readline-sync')
var preco = rs.questionFloat("Digite o valor do produto: ")
var pag = rs.question("Qual a forma de pagamento? ")

if (pag == 'dinheiro' && 'cheque') {
    var desconto1 = (preco / 10) * 9
    console.log('Voce recebe um desconto de 10%, o valor ficou: R$', desconto1.toFixed(2))
} else if (pag == 'credito') {
    var desconto2 = (preco / 10) * 8.5
    console.log('Voce recebe um desconto de 15%, o valor ficou: R$', desconto2.toFixed(2))
} else if (pag == 'duas vezes') {
    var juros = preco / 10
    var novoPreco = preco + juros
    console.log('Em duas vezes, fica com juros de 10%: R$', novoPreco.toFixed(2))
} else {
    console.log('Desculpe, não entendi a forma de pagamento.')
}  


// 