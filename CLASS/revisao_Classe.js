const rs = require('readline-sync')

class Tijolo {
    constructor(altura, largura, profundidade){
        this.altura = altura
        this.largura = largura
        this.profundidade = profundidade
    }

    calculaVolume() {
        var calculo = this.altura * this.largura * this.profundidade
        return calculo
    }
}

function barro() {
console.log('Digite as medidas do tijolo de barro: ')
var alt = rs.questionInt('Digite a altura: ')
var lar = rs.questionInt('Digite a largura: ')
var prof = rs.questionInt('Digite a profundidade: ')
return new Tijolo(alt, lar, prof);

}

function cimento() {
console.log('Digite as medidas do tijolo de cimento: ')
var alt = rs.questionInt('Digite a altura: ')
var lar = rs.questionInt('Digite a largura: ')
var prof = rs.questionInt('Digite a profundidade: ')
return new Tijolo (alt, lar, prof)

}

var VolumeTijoloDeBarro = barro().calculaVolume()
var VolumeTijoloDeCimento= cimento().calculaVolume()

console.log(`Volume do Tijolo de barro: ${VolumeTijoloDeBarro}`);
console.log(`Volume do Tijolo de cimento: ${VolumeTijoloDeCimento}`);