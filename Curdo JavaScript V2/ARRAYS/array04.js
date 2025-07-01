let arr1 = ['a', 'b', 'c', 'd', 'e'];
let arr2 = [].concat(arr1); // ['a', 'b', 'c', 'd', 'e']
// Cria uma cópia de arr1 usando concat, que não altera o array original    
//crio array vazio e uso concat para copiar arr1
arr2[arr2.length] ='valor novo'; // ['a', 'b', 'c', 'd', 'e', 'valor novo']
// Adiciona um novo elemento ao final de arr2, que não afeta arr1
console.log(arr2); // Exibe o array copiado com o novo elemento
// ['a', 'b', 'c', 'd', 'e', 'valor novo
console.log(arr1); // Exibe o array original    
// ['a', 'b', 'c', 'd', 'e']
// Exibe os arrays originais e copiados