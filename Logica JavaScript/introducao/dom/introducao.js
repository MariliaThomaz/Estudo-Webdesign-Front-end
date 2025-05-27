
document.getElementById('titulo').textContent = 'Título modificado com JavaScript 2';

const p = document.getElementById('paragrafo');
p.innerHTML = 'Texto modificado com <b>****************</b>';

const lista = document.getElementById('lista-tarefas');
let novaTarefa = "Aplicar JavaScript no DOM";
lista.innerHTML += `<li>${novaTarefa}</li>`;
// Adicionando um novo item à lista'