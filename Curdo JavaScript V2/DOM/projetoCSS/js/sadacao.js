//para  não  criar  uma  função  global 
// então  cria  uma  função  alto  imvocavel 
(function(){
    const nomeUsuario = "Marilia"
    const elemento = document.querySelector(".top-bar p")
    console.log(elemento.textContent)// o  textContent não é  só para mudar mais  tambem usado para  recupera dados
   // elemento.textContent= elemento.textContent + nomeUsuario
  //  elemento.textContent += nomeUsuario
   //renderisar ele reconhese as teg de HTML innerHTML
    elemento.innerHTML += "<b>"+nomeUsuario+"</b>"
})()

