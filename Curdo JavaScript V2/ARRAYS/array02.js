//estudado arr indexOf() e lastIndexOf().
//includes() e findIndex().
//find() 

let arr = [2, 82, 45, 67, 89, 5 , 4, 2, 45];

console.log(arr.indexOf(45)); // 2
// Retorna o índice do primeiro elemento encontrado, ou -1 se não encontrado

console.log(arr.lastIndexOf(45)); // 8
// Retorna o índice do último elemento encontrado, ou -1 se não encontrado

console.log(arr.lastIndexOf(100)); // -1
// Retorna -1 se o elemento não for encontrado

console.log(arr.includes(45)); // true
// Verifica se o elemento 45 está presente no array, retornando true ou false  
console.log(arr.includes(100)); // false
// Verifica se o elemento 100 está presente no array, retornando true ou false    

console.log(arr.find(function(item) {
    return item > 10;
})); // 45
// Retorna o primeiro elemento que satisfaz a condição, ou undefined se não encontrado

console.log(arr.findIndex(function(item) {
    return item > 10;
}));
// 1
// Retorna o índice do primeiro elemento que satisfaz a condição, ou -1 se não
