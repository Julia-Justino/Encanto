var form ={
    nome:"nome",
    email:"email",
    assunto: "assunto"
}

function campos() {
    form.nome = inp_nome.value;
    form.email = inp_email.value;
    form.assunto = inp_assunto.value;

    if (form.nome == "") {
        alert("Digite seu nome!");
    }else if(form.email == ""){
        alert("Digite seu email!");
    }
    else if(form.email.indexOf('@') == -1){
        alert("Digite um email válido!");
    }
    else if(form.assunto == ""){
        alert("Digite o assunto!");
    }
}