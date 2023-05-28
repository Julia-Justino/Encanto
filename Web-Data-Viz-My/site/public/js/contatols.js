/* var form ={
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
        <p><b>Seu email já foi enviado</b>.</p>
    </div>
`;
    }
} */

function cadastrar() {
    aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = inp_nome.value;
    var emailVar = inp_email.value;
    var assuntoVar = inp_assunto.value;

    


    if (nomeVar == "") {
        alert("(Digite seu nome!)");
        inp_nome.value = "";

        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";


        return false;
    } else if (emailVar == "") {
        alert("(Digite seu email!)");
        inp_email.value = "";


        return false;
    }
    else if (emailVar.indexOf('@') == -1) {
        alert("(Digite um email válido!)");
        inp_email.value = "";

        return false;
    }
    else if (assuntoVar == "") {
        alert("(Digite o assunto!)");
        inp_assunto.value = "";

        return false;
    }
    console.log("Final das validações")



    // Enviando o valor da nova input
    fetch("/contato/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            cardErro.style.display = "block";
            geral.innerHTML = `
            <div id="resul">
            <h1>Obrigado!</h1>
            <p><b>Seu email já foi enviado</b>.</p>
            </div>`;
            mensagem_erro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

            setTimeout(() => {
                window.location = "pesquisa.html";
            }, "2000")

            limparFormulario();
            finalizarAguardar();
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none"
}
