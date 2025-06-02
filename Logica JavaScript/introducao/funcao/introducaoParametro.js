
function teste(str) {
    console.log(str);
}
teste("Olá, mundo!"); // Chamada da função com um argumento
// Saída: Olá, mundo!

function soma1(a, b) {
    let soma = a + b;
    console.log("valor da soma " + soma);
    // Esta linha nunca será executada

}
soma1(5, 10);// Chamada da função com dois argumentos
// Saída: 15

//erros pode ser causados por falta de argumentos
function soma(a, b) {
    let soma = a + b;
    console.log("valor da soma " + soma);

}
//soma(5); Chamada da função com apenas um argumento
// Saída: NaN (Not a Number) porque b é undefined     

// erro ecesesso de parametros
function soma(a, b) {
    let soma = a + b;
    console.log("valor da soma " + soma);
}
// soma(5, 10, 15); Chamada da função com três argumentos
// Saída: 15 (o terceiro argumento é ignorado)

//usnado o retono
// a e b  é pametro 
function soma2(a, b) {
    let soma = a + b;
    return soma; // Retorna o resultado da soma
}
  
o
let resultado = soma2(5, 10); // Chamada da função com dois argumentos
// O resultado é armazenado na variável resultado
console.log("Resultado da soma: " + resultado); // Exibe o resultado