function fn(cb){
    //cd é  chamadado  call back
    console.log("execultar acao de callback")
  //  cd() execultando a função
  console.log(typeof cb)
  typeof cb == "function" && cb()

}
function callback(){
    console.log("funcao passad por parametro")
}
fn(callback)

const obj = {
    callback
}
obj.callback()

//uma função que retona  outra função
function fn2(n1){
    return function(n2){
        return n1 * n2
    }
}

const func2 = fn2(10)
const mult = func2(2)
console.log("função dupla: "+mult) 
// motivo  de faz  isto que a  função ela tratada como objeto

function fn3() {
    return function fn33() {
        console.log("funcao retornada por parametro 3");
    };
}
//outro topico sobre  objeto de  primero calasse é atribui proedade para função
fn3.count =0

const func3 = fn3(); // Aqui você está chamando fn3() e salvando a função fn33 retornada
func3(); // agora executa a função retornada

console.log(fn3.count)