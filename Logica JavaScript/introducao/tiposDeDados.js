//Boolean, Number, String, typeof, null, undefined
let mensagem = "Olá Mundo 'javaScript'"
//Tratado valor como stringem casos queira mostraraspasvocê 
// tem que olharqual que não está usando
console.log(mensagem)   

let mensagem2 = "Olá Mundo \"javaScript2\""
//Tratado valor como stringem casos queira mostraraspasvocê
// Você pode usar as Barraspara burlara sensibilidade sobre aspa

console.log(mensagem2)

typeof mensagem // string
console.log(typeof mensagem) // string  

typeof 10 // number
typeof 10.5 // number       
typeof "10.5e2" // string   
typeof true // boolean

//Os valores convertidos para falso em bolivianos são:
// 0, "", null, undefined, NaN
console.log("3"+Boolean(0)) // false
console.log(Boolean("")) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN)) // false

//Os valores convertidos para verdadeiro em bolivianos são:
// "0", " ", [], {}, function(){}, true, false
//A regra é é não teruma string vazi aentão ela vai ser verdadeira

// "0" - string com valor 0
console.log(Boolean("0")) // true 

// " " - string com espaço em branco  
console.log(Boolean(" ")) // true 

// [] - array vazio
console.log(Boolean([])) // true

// {} - objeto vazio 
console.log(Boolean({})) // true 

// function(){} - função vazia
console.log(Boolean(function(){})) // true

// true - valor booleano verdadeiro
console.log(Boolean(true)) // true

// false - valor booleano falso
console.log(Boolean(false)) // false
//NaN - Not a Number    
//NaN é um valor especial que representa um número inválido ou indefinido
//NaN é do tipo number  

let naoDeclarado
//undefined - variável não declarada
//undefined é um valor especial que representa a ausência de valor
//undefined é do tipo undefined
console.log("variável não declarada "+naoDeclarado) // undefined

//A diferença entre null e undefined é que null é um valor atribuído a uma variável
//para indicar que ela não tem valor, enquanto undefined é o valor padrão
//de uma variável que não foi inicializada ou declarada 
let nulo = null
//null - variável declarada mas não inicializada

let n = parseFloat("b")
//NaN - Not a Number
//NaN é um valor especial que representa um número inválido ou indefinido

console.log(typeof null) // object
// erro de implementação do JavaScript 

10 .toString() // "10"
// 10 é um número, mas o método toString() é chamado em um número
// e retorna uma string
console.log("método: "+  typeof(10 .toString())) // "10"

console.log("--------Desafio  de contenação----------") 
//Desafio  de contenação
let varivel = "Ba"

 varivel += parseInt(varivel)
 console.log('letra:' +varivel.toLocaleLowerCase +"a ") // "Ba0a"
//toLocaleLowerCase levará a string para minúsculas






