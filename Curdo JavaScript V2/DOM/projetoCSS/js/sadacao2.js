//para  não  criar  uma  função  global 
// então  cria  uma  função  alto  imvocavel 
(function () {
    const nomeUsuario = null
    const elemento = document.querySelector(".top-bar p")

    if (nomeUsuario) {
        console.log(elemento.textContent)

        elemento.innerHTML += "<b>" + nomeUsuario + "</b>"
    }else{
        elemento.parentElement.style.display = "none"
        //elemento.style.display = "none" //para esconder o elemento

        //elemento.remove() //para remover o elemento
        const elementoPai = elemento.parentElement
        elementoPai.removeChild(elemento) //para remover o elemento do pai
    console.log("O elemento foi escondido"+elemento)
    }
})()

