(function () {
    'use strict'

    const txtTitulo = document.getElementById('txtTitulo')
    const txtDescricao = document.getElementById('txtDescricao')
    const btnSalvar = document.getElementById('btn')
    const formCadastro = document.querySelector('.formCadastro')
//oque muda usar o querySelector? Ele é mais flexível, pois permite selecionar elementos 
// usando seletores CSS, como classes, ids, atributos, etc. Já o getElementById só permite 
// selecionar elementos pelo id. No caso do formCadastro, como ele tem a classe 
// 'formCadastro', podemos usar o querySelector para selecioná-lo.
//  Se usássemos o getElementById, teríamos que dar um id para o formulário, o que não é
//  necessário nesse caso.
// qual momento é melhor usar um ou outro? O getElementById é mais rápido, pois é otimizado para
//  buscar elementos pelo id, que é único. O querySelector é mais flexível, mas 
// pode ser mais lento, especialmente se o seletor for complexo. Portanto, se você sabe que o
//  elemento tem um id, é melhor usar o getElementById. Se você precisa selecionar um elemento 
// por classe, atributo ou outro seletor CSS, use o querySelector.
    formCadastro.addEventListener('submit', function (event) {

        event.preventDefault()

        console.log(txtTitulo.value)

        if (!txtTitulo.value.trim()) {
            // o que é trim? Ele remove os espaços em branco do início e do fim da string. Assim, se o usuário digitar apenas espaços, o valor será considerado vazio.
            alert('Falta preencher o título')
            event.preventDefault() // impede o comportamento padrão do evento, que seria enviar o formulário e recarregar a página. Assim, o usuário pode corrigir os erros sem perder os dados já preenchidos.   
            return
        }

        if (!txtDescricao.value.trim()) {
            alert('Falta preencher a descrição')
            return
        }

        alert('Tarefa salva com sucesso!')

    })

})()