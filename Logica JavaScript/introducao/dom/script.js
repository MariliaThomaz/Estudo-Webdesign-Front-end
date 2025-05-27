import { JSDOM } from "jsdom";
// Defina o HTML que será manipulado
const html = `
  <h1 id="titulo">Título original</h1>
  <p id="paragrafo">Texto de exemplo</p>
`;
const dom = new JSDOM(html);
const document = dom.window.document; // só no Node.js

// manipula o DOM como no navegador
let titulo = document.getElementById("titulo");
titulo.textContent = "Novo Título com JavaScript";

let novoTitulo = document.createElement("h2");
novoTitulo.textContent = "Subtítulo criado com JS";
document.body.appendChild(novoTitulo);

console.log(dom.serialize());

console.log("Antes:", titulo.textContent); // Título original
 // Novo título via Node + jsdom

console.log(titulo.textContent); // exibe o texto no console
//textContent é o texto que está dentro do elemento, sem tags HTML 
//textContent  é uma  propriedade que retorna o conteúdo de texto de um nó e seus descendentes
// navegador somete usa titulo.textContent
titulo.textContent = "Novo Título******************"; // altera o texto do elemento
console.log(titulo.textContent); // exibe o novo texto no console