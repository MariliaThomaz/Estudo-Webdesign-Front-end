//estou quando uma referência ao elemento HTML com o id "textEmail"
//e ao elemento com o id "newsletterFeedback"
const textEmail = document.getElementById("txtEmail");
const msgfeedback = document.getElementById("newsletterFeedback");


function cadastroEmail() {
    //pegando o valor do campo de texto
    //e atribuindo à variável email
    let email = textEmail.value;
    msgfeedback.innerHTML = "Obrigado por se cadastrar, " + email + "! Você receberá novidades em seu e-mail.";
}