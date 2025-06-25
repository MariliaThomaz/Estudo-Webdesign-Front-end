
const textEmail = document.getElementById("txtEmail");



function editarEmail() {
     //usando propriedade disabled do input
     textEmail.disabled = false
     textEmail.focus();

   
}
function disableEamil(){
    //usando propriedade disabled do input
    textEmail.disabled = true;  
}