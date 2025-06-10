function calculandoIMC(peso, altura) {
    if (typeof peso !== 'number' || typeof altura !== 'number') {
        console.log("Valor inválido: peso e altura devem ser números.");
        return null;
    } else if (peso === 0 || altura === 0) {
        console.log("Valor inválido: peso e altura devem ser diferentes de zero.");
        return null;
    } else {
        let imc = peso / (altura ** 2);
        let imcCortado = Math.floor(imc * 100) / 100;
        return imcCortado;
    }
}

function classificacao(imc) {
    if (imc < 16) {
        return "Muito abaixo do peso - IMC: " + imc;
    } else if (imc >= 16 && imc <= 16.9) {
        return "Muito abaixo do peso - IMC: " + imc;
    } else if (imc >= 17 && imc <= 18.4) {
        return "Abaixo do peso - IMC: " + imc;
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal - IMC: " + imc;
    } else if (imc >= 25 && imc <= 29.9) {
        return "Acima do peso - IMC: " + imc;
    } else if (imc >= 30 && imc <= 34.9) {
        return "Obesidade Grau 1 - IMC: " + imc;
    } else if (imc >= 35 && imc <= 40) {
        return "Obesidade Grau 2 - IMC: " + imc;
    } else if (imc > 40) {
        return "Obesidade Grau 3 - IMC: " + imc;
    } else {
        return "IMC inválido.";
    }
}




function classificao(imc) {
    if (imc >= 16 && imc <= 16.9) {
        return console.log("Muito baixo do peso - IMC: " + imc)

    } else if (imc >= 17 && imc <= 18.4) {
        return console.log("Abaixo do peso - IMC: " + imc)

    } else if (imc >= 18.5 && imc <= 24.9) {
        return console.log("Peso normal - IMC: " + imc)

    } else if (imc >= 25 && imc <= 29.9) {
        return console.log("Acima do peso - IMC: " + imc)

    } else if (imc >= 25 && imc <= 29.9) {
        return console.log("Acima do peso - IMC: " + imc)

    } else if (imc >= 30 && imc <= 34.9) {
        return console.log("Obesidade Grau 1 - IMC: " + imc)

    } else if (imc >= 35 && imc <= 40) {
        return console.log("Obesidade Grau 2- IMC: " + imc)

    } else if (imc > 40) {
        return console.log("Obesidade Grau 3- IMC: " + imc)
    }

}
let imc = calculandoIMC(65, 1.67);
console.log(classificacao(imc));