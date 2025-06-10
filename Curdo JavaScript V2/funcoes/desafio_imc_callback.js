function calculandoIMC(peso, altura, callback) {
  // 1. Validações de entrada
  if (typeof peso !== 'number' || typeof altura !== 'number') {
    console.log("Valor inválido: peso e altura devem ser números.");
    return null; // Retorna null para indicar falha
  }

  if (peso === 0 || altura === 0) {
    console.log("Valor inválido: peso e altura devem ser diferentes de zero.");
    return null; // Retorna null para indicar falha
  }

  // 2. Cálculo do IMC (só executa se as validações passarem)
  let imc = peso / (altura ** 2);
  let imcCortado = Math.floor(imc * 100) / 100;

  // 3. Verificação e chamada do callback
  if (typeof callback === "function") {
    // Se o callback existe e é uma função, chame-o com o imcCortado
    return callback(imcCortado); // O retorno aqui é o que a função de callback retorna
  } else {
    // Se não houver callback, apenas retorne o IMC calculado
    return imcCortado;
  }
}

function classificao(imc) {
  if (imc < 16) { // Adicionando uma condição para muito, muito baixo peso
    return console.log("Extremamente abaixo do peso - IMC: " + imc);
  } else if (imc >= 16 && imc <= 16.9) {
    return console.log("Muito baixo do peso - IMC: " + imc);
  } else if (imc >= 17 && imc <= 18.4) {
    return console.log("Abaixo do peso - IMC: " + imc);
  } else if (imc >= 18.5 && imc <= 24.9) {
    return console.log("Peso normal - IMC: " + imc);
  } else if (imc >= 25 && imc <= 29.9) { // Removida a duplicidade
    return console.log("Acima do peso - IMC: " + imc);
  } else if (imc >= 30 && imc <= 34.9) {
    return console.log("Obesidade Grau 1 - IMC: " + imc);
  } else if (imc >= 35 && imc <= 39.9) { // Ajustei o limite superior para não sobrepor o >40
    return console.log("Obesidade Grau 2 - IMC: " + imc);
  } else if (imc >= 40) { // Pode ser apenas >40, mas >= 40 também funciona
    return console.log("Obesidade Grau 3 - IMC: " + imc);
  } else {
    // Caso o IMC não se encaixe em nenhuma categoria (pode ser útil para depuração)
    return console.log("IMC fora das categorias conhecidas: " + imc);
  }
}

// --- Testes ---

console.log("--- Teste 1: IMC com callback (classificao) ---");
// Passando a função classificao como callback
let resultado1 = calculandoIMC(65, 1.67, classificao);
console.log("Retorno da função principal (calculandoIMC):", resultado1); // Será 'undefined' porque classificao usa console.log e retorna undefined

console.log("\n--- Teste 2: IMC sem callback ---");
let imcCalculadoDiretamente = calculandoIMC(70, 1.75);
console.log("IMC calculado diretamente (sem callback):", imcCalculadoDiretamente);

console.log("\n--- Teste 3: Chamada incorreta do callback (originalmente imc2) ---");
// CORREÇÃO AQUI: Passando classificao como callback, não calculandoIMC
let resultado2 = calculandoIMC(60, 1.6, classificao);
console.log("Retorno da função principal (calculandoIMC):", resultado2);

console.log("\n--- Teste 4: Entradas inválidas ---");
calculandoIMC("abc", 1.70, classificao); // Deve exibir erro
calculandoIMC(70, 0, classificao); // Deve exibir erro