let  n1 = 5
let  n2 = 5

// Operadores de comparação
// == igual
console.log(n1 == n2) // true
n2 = 3
console.log(n1 == n2) // false
n2 = "5"
console.log(n1 == n2) // true
// === idêntico
console.log(n1 === n2) // false
// 3 sinais de igual valida para comparar o valor e o tipo

// != diferente
n2 = 5
console.log(n1 != n2) // false  
n2 = 3
console.log(n1 != n2) // true

n2 = "5"
console.log(n1 != n2) // false
//ovalor false é devido estar comparando apensa o valor
n1 = 3
console.log(n1 != n2) // true
//agora sim ele compara o valor e o tipo por isso o resultado é true
n1 = "5"
n2 = 5
console.log(n1 !== n2) // true
// estou comparando o valor e o tipo

// > maior
n1 = 5
n2 = 3
console.log(n1 > n2) // true
// < menor
n1 = 3
n2 = 5
console.log(n1 < n2) // true
// >= maior ou igual
n1 = 5
n2 = 5
console.log(n1 >= n2) // true
n2 = 3
console.log(n1 >= n2) // true
// <= menor ou igual
n1 = 3
n2 = 5
console.log(n1 <= n2) // true
n1 = 5
n2 = 5

console.log(n1 <= n2) // true
n2 = 3
console.log(n1 <= n2) // false
// == igual
n1 = 5
n2 = 5
console.log(n1 == n2) // true
n2 = 3
console.log(n1 == n2) // false
n2 = "5"

console.log(n1 == n2) // true
// === idêntico
console.log(n1 === n2) // false