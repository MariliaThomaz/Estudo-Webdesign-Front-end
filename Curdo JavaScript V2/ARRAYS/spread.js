//estudando do operador spread 
const numeros = [1, 2, 3, 4, 5];

// A função sum agora usa parâmetros rest para capturar os argumentos
function sum(...valores) {
    const total = valores.reduce((acumulador, atual) => acumulador + atual, 0);
    console.log("Total:", total);
}

sum(1, 2, 3, 4, 5);
sum(numeros);
sum([1, 2, 3, 4, 5]);
// spread operator entra em ação
// spread operator é usado para expandir o array em elementos individuais
sum(...[1, 2, 3, 4, 5]);
//o spread operator ele quebra o array em elementos individuais
//ira sera passados  os indicis individuais do array como argumentos da função
sum(...numeros);
//o spread operator pode ser usado para copiar arrays


console.log("novo exemplo de spread operator");
function somar(a, b, c) {
  console.log(a + b + c);
}

const nume = [1, 2, 3];
//somar(nume);  Resultado: "1,2,3undefinedundefined" ou erro
somar(...nume); // Resultado: 6


//quem é o spread operator?
//o spread operator é um recurso do JavaScript que permite expandir elementos de um array ou
//objeto em locais onde múltiplos elementos ou argumentos são esperados.
//ele é representado por três pontos seguidos (...) antes do array ou objeto que você deseja
//expandir.
//o que acontece é que o spread operator quebra o array em elementos individuais
//e passa esses elementos como argumentos individuais para a função somar

console.log("exmplo de spread espandindo um objeto");
const frutas1 = ['maçã', 'banana'];
const frutas2 = ['laranja', 'kiwi'];

const todasFrutas = [...frutas1, ...frutas2];

console.log(todasFrutas); // ['maçã', 'banana', 'laranja', 'kiwi']