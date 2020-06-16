function nomeDaFuncao(parametros) {
    // corpo
    return;
}

// var funcaoAnonima = function (parametros) {
//     // corpo
//     console.log(parametros);
//     return;
// }
// funcaoAnonima('parametro em string')

(function (parametros) {
   // corpo 
   console.log(parametros);
   return;
})('parametro da funcao auto-executavel')

var anoniFunc = function () { console.log('arrow function') }
var arrowFunc = () => { console.log('arrow function') }

var arr = [9,8,7,6];
arr.forEach(function(numeros) {console.log(numeros)})

console.log('divisor')

arr = [1,2,3,4];
arr.forEach( (numeros) => {console.log(numeros)})

