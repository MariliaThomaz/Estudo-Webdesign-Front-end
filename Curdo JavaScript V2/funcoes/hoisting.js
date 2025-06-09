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

// let/const não são içadas — tentar acessar antes da declaração gera erro
/*
teste(); // ReferenceError: Cannot access 'teste' before initialization

const teste = function() {
    console.log("testes");
};
*/

// Função autoexecutável (IIFE)
(function(){
    let isValid  = false;
    console.log("opa:", isValid); // Saída: opa: false
})();

// Passando parâmetro para uma função auto-invocável (IIFE)
//Função anônima
(function(n1, n2){
    let soma = n1 + n2;
    console.log("soma:", soma); // soma: 5

    function init(){
        console.log("função interna");
    }
    init();
})(3, 2);
/*
Reprodução auto invocável é usada para evitar poluição  escopo global  
*/