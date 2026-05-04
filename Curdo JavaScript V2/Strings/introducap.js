//os metos da Strings
//replace() - substitui um valor por outro
//replaceAll() - substitui todas as ocorrências de um valor por outro
let texto = "Olá, mundo! Olá, JavaScript!";
let novoTexto = texto.replace("Olá", "Oi");
console.log(novoTexto); // Saída: "Oi, mundo! Olá, JavaScript!" 

//usando uma espressão regular para substituir todas as ocorrências pelo caractere "!"
let novoTexto2 = texto.replace(/Olá/g, "oioi");
console.log(novoTexto2); // Saída: "oioi, mundo! oioi, JavaScript!"     

//indexOf() - retorna o índice da primeira ocorrência de um valor em uma string
texto2 ="A terra  é o terceiro planeta do sistema solar.";
let indice = texto2.indexOf("planeta");
console.log(indice); // Saída: 22

//includes() - verifica se uma string contém um determinado valor e retorna true ou false
let contem = texto2.includes("sistema");
console.log(contem); // Saída: true 

