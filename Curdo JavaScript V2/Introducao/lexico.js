//tipagem dinanima
//É a capacidade de armazenar valores em 
// diversos tipos na mesma variável
let x = 10
x ="texto"
console.log(x)


//Aspas simples ou duplas
let msg = "uma  texto"
// regra  sempre  se começo Com aspas duplas eu termino com aspas duplas se 
// eu começo com aspas simples eu termino com aspas simples 
let msg2 = 'ola mundo'

//Not a number
console.log("ola" * 2)
// Essa number é o retorno de caso algo errado no caso aqui essamultiplicação não 
// haverá um retorno então ele retorna Not a number(NaN)


//Conversão implicita
console.log("2" * 2)
//A conversão implícitaé podemos ver no exemplo que temos um 
// número "2" sendo e string 
// portanto ele fazessa conversãopra número mas sendo que 
// eu estou colocando ela como string 

//dinamico this
function test(){
    console.log(this)
}
test()
const obj = {
    n:0,
    teste2:test
}
obj.teste2()

//outro exemplo 
function mostrarNome() {
    console.log(this.nome);
}

const pessoa1 = {
    nome: "Marília",
    dizerNome: mostrarNome
};

const pessoa2 = {
    nome: "João",
    dizerNome: mostrarNome
};

pessoa1.dizerNome(); // Marília
pessoa2.dizerNome(); // João

/*
Explicação:
A mesma função mostrarNome está sendo usada por dois objetos diferentes.

Quando pessoa1.dizerNome() é chamado, o this se refere a pessoa1.

Quando pessoa2.dizerNome() é chamado, o this se refere a pessoa2.
*/ 