(function () {
    'use strict'
    const btn = document.getElementById('btn')
    const txtTitulo = document.getElementById('txtTitulo')
    const txtDescricao = document.getElementById('txtDescricao')
    const contadorContainer = document.getElementById('contador')
    const resta = contadorContainer.getElementsByTagName('span')[0]
    const maxima = txtDescricao.maxLength
    mostrarCaracteresDigitados(maxima)

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

        if (!txtTitulo.value.trim()) {
            showErrorMessage('Falta preencher o título', focarTexto)
            return
        }

        if (!txtDescricao.value.trim()) {
            showErrorMessage('Falta preencher a descrição')
            return
        }

        showErrorMessage('Tarefa salva com sucesso!')
    })

    function focarTexto() {
        txtTitulo.focus()
    }



    const feedbackMessage = document.getElementById('feedbackMessage')
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName('button')[0]

    function showErrorMessage(msg, cd) {
        feedbackMessage.classList.add('show')
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg

        function hideErrorMessage() {
            feedbackMessage.classList.remove('show')
            feedbackMessageCloseBtn.removeEventListener('click', hideErrorMessage)
            feedbackMessageCloseBtn.removeEventListener('keyup', pressedKeyboardOnBtn)

            if (typeof cd === 'function') {
                cd()
            }
        }

        function pressedKeyboardOnBtn(event) {
            console.log(event.key)
            console.log(event.keyCode)

            if (event.key === 'Enter' || event.keyCode === 27) {
                hideErrorMessage()
            }
        }

        feedbackMessageCloseBtn.addEventListener('click', hideErrorMessage)
        feedbackMessageCloseBtn.addEventListener('keyup', pressedKeyboardOnBtn)
    }
    contadorContainer.removeAttribute('style')

    //Fazer evento
    /* txtDescricao.addEventListener("keyup", function () {
         console.log("keyup")
     })
     // o keydown é disparado quando a tecla é pressionada, 
     // o keyup é disparado quando a tecla é solta.
     txtDescricao.addEventListener("keydown", function () {
         console.log("keydown")
     })
      txtDescricao.addEventListener("keypress", function () {
          console.log("keypress")
    })
    }*/
    function checkLength() {
        let caracteresDigitados = txtDescricao.value.length
        //o parseInt é necessário para converter as strings em números inteiros, para que a subtr   ação funcione corretamente. Se não usássemos o parseInt, a subtração resultaria em uma concatenação de strings, o que não é o comportamento desejado.
        let caracteresRestantes = parseInt(maxima) - parseInt(caracteresDigitados)
        resta.textContent = caracteresRestantes

        // const caracteresDigitados = txtDescricao.value.length
        // const caracteresRestantes = maxima - caracteresDigitados
        // resta.textContent = caracteresRestantes
        mostrarCaracteresDigitados(caracteresRestantes)
    }

    function mostrarCaracteresDigitados(n) {
        resta.textContent = n
    }
    txtDescricao.addEventListener("input", checkLength)

    btn.disabled = true
    //o que é o disabled? Ele é um atributo booleano que desabilita um
    //  elemento, ou seja, impede que o usuário interaja com ele.+
    //  No caso do botão "Salvar", ele começa desabilitado para garantir 
    // que o usuário só possa clicar nele depois de aceitar os termos.
    //  Quando o usuário marca a caixa de seleção "Aceito os termos", 
    // o evento "change" é disparado, e a função associada a esse evento 
    // habilita o botão, permitindo que o usuário clique nele para salvar
    //  a tarefa.
    const chkAceito = document.getElementById('chkAceito')
    chkAceito.addEventListener('change', function () {
        btn.disabled = !chkAceito.checked
    })

})()