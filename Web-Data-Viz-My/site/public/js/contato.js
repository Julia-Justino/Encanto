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
        inp_nome.value="";
    }else if(form.email == ""){
        alert("Digite seu email!");
        inp_email.value="";
    }
    else if(form.email.indexOf('@') == -1){
        alert("Digite um email válido!");
        inp_email.value="";
    }
    else if(form.assunto == ""){
        alert("Digite o assunto!");
        inp_assunto.value="";
    }else{
        geral.innerHTML = `
        <div id="resul">
        <h1>Obrigado!</h1>
        <p>Seu email já foi enviado.</p>
    </div>
`;
    }
}