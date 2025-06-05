// Exemplo de hoisting com funções e variáveis

// Função declarada: é içada (hoisted)
testeHoisting(); // Saída: "Função foi içada!"

function testeHoisting() {
    console.log("Função foi içada!");
}

// Variável declarada com var: apenas a declaração é içada, não a atribuição
console.log(a); // Saída: undefined
var a = 10;
console.log(a); // Saída: 10

// Variável declarada com let/const: não é içada (gera erro se acessada antes da declaração)

let b = 20;
console.log(b); // Saída: 20
/*
teste()
 //Variável declarada com let/const: não é içada (gera erro se acessada antes da declaração)
const teste  = function teste(){
    console.log("testes")
}
    */