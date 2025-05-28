//obejto 
pessoa1 = {
    nome: "João",
    sobrenome: "Silva",
}
pessoa2 = {
    nome: "Maria",  
    sobrenome: "Oliveira",
}

nome =["Paula", "Flaviq"];
sobrenome = ["Natalina", "Silva"];
//consundo o array
console.log("string "+nome[0]); // João
//esta  é  uma  string
console.log("string "+sobrenome[1]); // Oliveira  
console.log("tipo do nome: "+typeof(nome))

//array de objetos
pessoas = [pessoa1, pessoa2];
//acessando o array de objetos
console.log("objetos "+ pessoas[0].nome); // João
//isso é um objeto
console.log(" objetos "+pessoas[1].nome); // Maria  
console.log("tipo do pessoas: "+typeof(pessoas))