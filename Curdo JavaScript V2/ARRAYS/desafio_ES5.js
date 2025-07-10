
function sum() {
    const numbers = []
    // for (let i = 0; i < arguments.length; i++) {
    //     numbers.push(arguments[i])
    // }
    // console.log(numbers)

    Array.prototype.forEach.call(arguments, function (argument) {
        numbers.push(argument)
    })
    return numbers.reduce(function (sum, atual) {
        return sum + atual
    }, 0)

}
console.log(sum(1, 2, 3, 4, 5))

function avarege() {

    const soma = sum.apply(null, arguments)
    console.log(soma)

    return soma / arguments.length
}

console.log(avarege(1, 2, 3, 4, 5))

// sum.call(null, 1, 2, 3, 4, 5)
//para que seve call e apply?
// call e apply são métodos que permitem chamar uma função com um determinado contexto (this) e
// argumentos. A diferença entre eles é como os argumentos são passados:
// - `call`: aceita uma lista de argumentos separados por vírgula.  
//   Exemplo: `sum.call(null, 1, 2, 3, 4)`
// - `apply`: aceita um array de argumentos.        
// sum.apply(null, [1, 2, 3, 4])
//   Exemplo: `sum.apply(null, [1, 2, 3, 4])`   
// // Ambos os métodos são úteis quando você precisa chamar uma função com um contexto específico
//e/ou
