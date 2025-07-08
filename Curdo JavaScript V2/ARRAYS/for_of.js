//estuando sobre  for e of
// o for...of é uma estrutura de repetição que permite iterar sobre elementos de arrays, strings,
// objetos iteráveis e outros tipos de coleções em JavaScript.
const arr = [1, 2, 3, 4, 5];
// o for...of percorre cada elemento do array e executa o bloco de código para
// cada elemento, atribuindo o valor do elemento à variável item.
const obj = {
    nome: 'Marília',
    idade: 30,
    cidade: 'São Paulo'
}
for (const prop in obj) {
    console.log(`${prop}: ${obj[prop]}`);// estou acessando as propriedades do objeto
}

for(n of arr) {
    console.log(n); // 1, 2, 3, 4, 5
}   
//o of ele facilita  pois não presisa faz estrura de 
// repetição para acessar os valores do array ou objeto
// ele é usado para iterar sobre os valores de um 
// objeto iterável, como arrays, 
