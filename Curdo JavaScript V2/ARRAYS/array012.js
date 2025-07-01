// eu uso o método every() para verificar se todos os elementos de um array são números
// e o método some() para verificar se pelo menos um elemento do array é um número.
// O método every() e some() são métodos de array que permitem verificar se todos ou pelo menos um elemento do array satisfazem uma condição específica.
// Eles são muito úteis para validações e verificações em arrays.
const arr = [1, 5, 10, 'ola', true, null, undefined, 3.14, 'ola', 5];
//a função every() retorna um valor booleano indicando se todos os elementos do array satisfazem a condição fornecida.
//Neste caso, estamos verificando se todos os elementos do array são números.
let somenteNumeros = arr.every(function(eleto){
    console.log(eleto)
    // A função typeof retorna o tipo do elemento
    // e verificamos se é um número.
    return typeof eleto === 'number';
})

//fintro par somente variáveis do tipo number
// o que é feito com o método filter().
// O método filter() cria um novo array com todos os elementos que passam no teste implementado
//sua função de callback.
// Neste caso, estamos filtrando os elementos do array que são números.
const arr1 = arr.filter(function(eleto, i, _arr){

    return typeof eleto === 'number';

})
console.log('arr' + arr); // [1, 5, 10, 'ola', true, null, undefined, 3.14, 'ola', 5]
// A função filter retorna um novo array com os elementos que satisfazem a condição fornecida
console.log('arr1: '+arr1); // [1, 5, 10, 3.14, 5]
// A função every retorna true se todos os elementos do array satisfazem a condição fornecida
 

console.log("every "+somenteNumeros); // false, pois o array contém strings e booleanos

//A função some() retorna um valor booleano indicando se pelo menos um elemento do array satisfaz a condição fornecida.
let temNumeros = arr.some(function(eleto){
    console.log(eleto)
    // A função typeof retorna o tipo do elemento
    // e verificamos se é um número.
    return typeof eleto === 'number';
})
console.log("same " +temNumeros); // true, pois o array contém números

// same faz a mesma coisa que every, mas retorna true se pelo menos um elemento do array satisfaz a condição fornecida.