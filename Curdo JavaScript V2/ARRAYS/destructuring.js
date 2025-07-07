//estudando sobre destructuring
//o destructuring é uma forma de extrair valores de arrays 
// ou propriedades de objetos

const numeros = [1, 2, 3, 4, 5];
//usando destructuring para extrair valores de um array
const [primeiro, segundo, terceiro] = numeros;
// para indficar que  é destructuring obisabe que o nome da array esta lado esquerdo
// do operador de atribuição (=) e os valores estão sendo extraídos 
// mas qual é sua finalidade?
// a finalidade é simplificar o acesso aos valores de um array ou objeto
// e tornar o código mais legível e conciso
// agora podemos acessar os valores diretamente pelas variáveis
console.log(primeiro); // 1
console.log(segundo); // 2
console.log(terceiro); // 3 
//usando destructuring para extrair valores de um objeto
const pessoa = {        
    nome: 'Marília',
    idade: 30,
    cidade: 'São Paulo'
};  
const { nome, idade, cidade } = pessoa;
console.log(nome); // Marília   
