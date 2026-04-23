let x = 10
function valorX (x){
    x++
    console.log("x interno: ",  x)
}
valorX(x)
console.log("x externo: ", x)   
//porque  o valor de x é passado por valor, ou seja, a
//  função recebe uma cópia do valor de x, e as alterações feitas
//  dentro da função não afetam o valor original de x fora da função.

let y = [10]

function valorY (y){
    y.push(20)
    console.log("y interno: ",  y)
}
valorY(y)
console.log("y externo: ", y)   
// Arrays são objetos em JavaScript.
// Objetos são passados por valor da referência.
// Ou seja, a função recebe uma cópia da referência do array original.
// Como a referência aponta para o mesmo objeto na memória,
// alterações dentro da função afetam o array externo.


let z = { valor: 10 }

function valorZ (objeto){    
    objeto.valor++
    console.log("z interno: ",  objeto.valor)
}       
valorZ(z)
console.log("z externo: ", z.valor)
// Objetos são passados por valor da referência.
// A função recebe uma cópia da referência do objeto.
// Como ambas apontam para o mesmo objeto na memória,
// a alteração dentro da função afeta o objeto externo.