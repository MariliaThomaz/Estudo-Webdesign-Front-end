function soma (arr){
    let total =0
    for(let i =0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}
console.log(soma([4,6,1]))


function soma2() {
    console.log(arguments);
    // "arguments" é um objeto semelhante a array (array-like)
    // Ele se comporta como um array, mas não é exatamente um array

    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(soma2(4, 6, 1)); // Saída: 11
console.log(soma2(4, 6, 1, 2, 6, 5, 4, 9, 8, 3, 5, 4)); // Saída: 57
/*
 Sobre arguments:
É um objeto interno disponível em funções declaradas com function.

Ele contém todos os argumentos passados, mesmo que não estejam listados nos parênteses da função.


*/