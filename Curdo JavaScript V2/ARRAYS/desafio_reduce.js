//desafio para usar  o metodo reduce()
//  para calcular a média dos valores do array
// o jetivo é pegar array  numeros [1,3,4,1,4,5,3,5,8,9]
//transformar em uma outra array como : [1,3,5,8,9]

let numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9];   
// Usando o método reduce para calcular a média dos valores do array
let media = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) / numeros.length;
// Neste caso, soma todos os elementos do array e divide pelo número de elementos para obter a média
console.log(media); // 4.3      
// Exibe o resultado da média dos elementos do array

// Desafio: Transformar o array original em um novo array com valores únicos
let numerosUnicos = numeros.reduce((acumulador, valorAtual) => {
    if (!acumulador.includes(valorAtual)) {
        acumulador.push(valorAtual);
    }
    return acumulador;
}, []);
// Neste caso, verifica se o valor atual já está no acumulador (array resultante)
console.log(numerosUnicos); // [1, 3, 4, 5, 8, 9]
// Se não estiver, adiciona o valor atual ao acumulador, resultando em um array com valores únicos