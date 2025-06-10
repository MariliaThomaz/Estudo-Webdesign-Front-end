
function teste(cd){
    console.log("funcao testes")
    cd()
}
teste(function(){
    console.log("funcao anonima de callbak")
})

function soma (n1, n2){
    let soma = n1 + n2
  return  console.log("soma" +soma )
}
function alcubo(soma){
    let cubo = soma **3
  return console.log("alcubo: "+cubo)
}
soma(5,6)

// Exemplo 1: Passando uma função de callback para processar o resultado da soma
function somaCallback(n1, n2, callback) {
    let resultado = n1 + n2;
    callback(resultado);
}

somaCallback(2, 3, function(res) {
    console.log("Resultado da soma com callback:", res);
});

// Exemplo 2: Callback para transformar texto
function processaTexto(texto, callback) {
    let novoTexto = callback(texto);
    console.log("Texto processado:", novoTexto);
}

processaTexto("javascript", function(txt) {
    return txt.toUpperCase();
});