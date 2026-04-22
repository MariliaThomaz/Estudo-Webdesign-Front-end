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