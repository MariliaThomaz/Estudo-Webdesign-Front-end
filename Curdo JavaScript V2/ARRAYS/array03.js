// estuando array usando sequintes metodos: 
// concat(), join(), toString(),

let arr1 = [2, 82, 45, 67, 89, 5, 4, 2, 45];
let arr2 = [100, 200, 300];

console.log(arr1.toString()); // "2,82,45,67,89,5,4,2,45"
// Converte o array em uma string, separando os elementos por vírgulas
console.log(typeof arr1.toString()); // "string"    

console.log(arr1.join("-")); // "2-82-45-67-89-5-4-2-45"
// Converte o array em uma string, separando os elementos por um hífen
// O método join() pode receber um argumento que define o separador entre os elementos
console.log(arr1.join(" ")); // "2 82 45 67 89 5 4 2 45"
// Converte o array em uma string, separando os elementos por um espaço
console.log(typeof arr1.join()); // "string" 

let arr3 =arr1.concat(arr2); // [2, 82, 45, 67, 89, 5, 4, 2, 45, 100, 200, 300]
// Concatena arr1 e arr2, criando um novo array 
// O método concat() não altera os arrays originais, mas retorna um novo array contendo os elementos combinados
// O método concat() pode receber múltiplos arrays como argumentos
console.log(arr3); // [2, 82, 45, 67, 89, 5, 4, 2, 45, 100, 200, 300]
console.log(arr3.length); // 12
// Retorna o tamanho do novo array resultante da concatenação