function calculaMedia(numeros) {
    var soma = 0
    for (var cont = 0; cont < numeros.length; cont++) {
        soma = soma + numeros[cont]
    }
    var media = soma / numeros.length
    return media
}

module.exports = calculaMedia()