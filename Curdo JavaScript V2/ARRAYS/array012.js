// eu uso o método every() para verificar se todos os elementos de um array são números
// e o método some() para verificar se pelo menos um elemento do array é um número.

const arr = [1, 5, 10, 'ola', true, null, undefined, 3.14, 'ola', 5];
//a função every() retorna um valor booleano indicando se todos os elementos do array satisfazem a condição fornecida.
//Neste caso, estamos verificando se todos os elementos do array são números.
let somenteNumeros = arr.every(function(eleto){
    console.log(eleto)
    // A função typeof retorna o tipo do elemento
    // e verificamos se é um número.
    return typeof eleto === 'number';
})
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