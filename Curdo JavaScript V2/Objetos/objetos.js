//objetos literales
const persona = {
    nome: "Juan",//isto é uma propriedade do objeto persona
    idade: 30,
    cidade: "Madrid"
};
//sintaxe formal de objetos

const pessoa = new Object();
pessoa.nome = "Maria";//isto é uma propriedade do objeto pessoa
pessoa.idade = 25;
pessoa.cidade = "Lisboa";
pessoa["profissao"] = "Engenheira";//também é possível adicionar propriedades usando colchetes

//acessando propriedades
console.log(persona.nome); // Juan
console.log(pessoa["cidade"]); // Lisboa

//como é possivel te acesso a um dado primitivo
const texto = "Olá, mundo!";      
console.log(texto.length); // 13
console.log(texto.toUpperCase()); // "OLÁ, MUNDO!"  
// o que  acontece é que o JavaScript cria um objeto temporário para o valor primitivo,
//  permitindo acessar métodos e propriedades como se fosse um objeto. Depois de acessar a 
// propriedade ou método, o objeto temporário é descartado.


//como ter acesso a um dado primitivo dentro de um objeto
const numero = 42;
const numeroObjeto = new Number(numero);        
console.log(numeroObjeto); // [Number: 42] // o objeto Number é criado a partir do valor primitivo 42
console.log(numeroObjeto.valueOf()); // 42  // o método valueOf() retorna o valor primitivo do objeto Number, que é 42  

//operador new ele cria um objeto a partir de uma função construtora, como Number, String, Boolean, etc.
//mas é importante lembrar que o uso de objetos primitivos como Number, String, Boolean, etc. é desencorajado em JavaScript, 
//pois pode levar a comportamentos inesperados e confusos. É recomendado usar os tipos primitivos diretamente, como number, string, boolean, etc., 
//em vez de criar objetos a partir deles.
// A priedade new ela tem umas  propriedades e métodos que são usados para criar objetos a partir de funções construtoras, como Number, String, Boolean, etc.
//por exemplo, o operador new é usado para criar um objeto a partir de uma função construtora, como Number, String, Boolean, etc. 

const data = Date(); // cria um objeto Date com a data e hora atuais
console.log(data); // exibe a data e hora atuais    
console.log(typeof data); // "object"  // o tipo do objeto Date é "object"

//para  retonar o tipo data tenho que retonar objeto data,
// este objetio esta contrura Date(), tem cria uma copia do objeto data, e tem acesso a todas as propriedades e métodos do objeto Date, como getFullYear(), getMonth(), getDate(), etc.
const dataObjeto = new Date(data);  
console.log(dataObjeto); // exibe a data e hora atuais como um objeto Date
console.log(typeof dataObjeto); // "object"  // o tipo do objeto Date é "object"    