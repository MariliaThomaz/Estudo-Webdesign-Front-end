// Estudando métodos de array:
// push(), pop(), shift(), unshift()
// slice(), splice()

let arr = [2, 82, 45, 67, 89];

let teste = arr.push(11, 22, 33); // 8
// Adiciona os elementos 11, 22 e 33 ao final do array, retornando o novo tamanho do array
console.log(arr); // [2, 82, 45, 67, 89, 11, 22, 33]
console.log("1 "+teste); // 8
// Exibe o array atualizado e o novo tamanho 

let teste2 = arr.pop(); // 33
// Remove o último elemento do array, retornando o elemento removido    
console.log(arr); // [2, 82, 45, 67, 89, 11, 22]
console.log("2 "+teste2); // 33
// Exibe o array atualizado e o elemento removido   

let teste3 = arr.shift(); // 2
// Remove o primeiro elemento do array, retornando o elemento removido      
console.log(arr); // [82, 45, 67, 89, 11, 22]
console.log("3 "+teste3); // 2   
// Exibe o array atualizado e o elemento removido

let teste4 = arr.unshift(100, 200); // 8
// Adiciona os elementos 100 e 200 ao início do array, retornando o novo tamanho do array
console.log(arr); // [100, 200, 82, 45, 67, 89, 11, 22]
console.log("4: "+teste4); // 8
// Exibe o array atualizado e o novo tamanho    

let arr2 = arr.slice(1, 3); // [200, 82]
// Cria um novo array contendo os elementos do índice 1 ao 2 (não inclui o índice 3),
// sem alterar o array original 
console.log(arr2); // [200, 82]
// Exibe o novo array criado com slice  
console.log("5: "+arr); // [100, 200, 82, 45, 67, 89, 11, 22]
// Exibe o array original, que permanece inalterado 

let arr3 = arr.splice(1, 2); // [200, 82]
// Remove 2 elementos a partir do índice 1 do array original, retornando os elementos removidos
console.log(arr3); // [200, 82] 
console.log("6 "+arr);  // [100, 45, 67, 89, 11, 22]
// Exibe os elementos removidos e o array atualizado

let arrV = [100, 200, 82, 45, 67];
console.log(arrV); // [100, 200, 82, 45, 67]
// Exibe o array original

let arr4 = arrV.splice(2, 3, "ola mundo");
// Remove 3 elementos a partir do índice 2 do array original, e insere "ola mundo" no lugar
console.log(arrV); // [100, 200, "ola mundo"]
// Exibe o array original atualizado
console.log(arr4); // [82, 45, 67]
// Exibe os elementos removidos do array original
