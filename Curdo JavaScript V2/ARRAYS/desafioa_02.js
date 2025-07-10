//cria duas fungoes: sum() e avarege()
// as funções podem receber 1 ou mais parâmetros
//use e abuse das facilidade do ES6

const numbers = [1, 2, 3, 4, 5];
function sum(...args) {
    let total = 0;
    for (const num of args) {
        total += num;
    }
    return total;
}
function average(...args) {
    if (args.length === 0) return 0; // evita divisões por zero
    const total = sum(...args);
    return total / args.length;
}

// Exemplo de uso
console.log(sum(...numbers)); // Saída: 15      
console.log(average(...numbers)); // Saída: 3