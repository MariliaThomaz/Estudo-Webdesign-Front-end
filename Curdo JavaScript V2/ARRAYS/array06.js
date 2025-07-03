//estudando metodos reverse(), reduce()

let arr = [2, 82, 45, 67, 89];

console.log(arr.reverse()); // [89, 67, 45, 82, 2]
// Inverte a ordem dos elementos do array, retornando o array invertido 

console.log(arr); // [89, 67, 45, 82, 2]
// Exibe o array atualizado, que agora está invertido

// Exemplo de uso do método reduce()
//o método reduce() executa uma função redutora sobre cada elemento do array, resultando em um único valor
let soma = arr.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
// Neste caso, soma todos os elementos do array, iniciando com 0 como valor inicial
console.log(soma); // 285
// Exibe o resultado da soma de todos os elementos do array 
