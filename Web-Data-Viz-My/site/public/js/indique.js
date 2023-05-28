function alerta() {
    dadoResultado.innerHTML = `Clicou no dado`
    alert("Clicou no dado");
}
var num = 0;
var indique = [];
function gerarNum() {
    var num = 0;
    var indique = [];



    dadoResultado.innerHTML = `<h5>Lista de recomendação:</h5>`;
    for (var i = 0; i <= 5; i++) {
        num = (Math.random() * 5 + 1).toFixed();
        indique.push(num);

        dadoResultado.innerHTML += `<span class ="vetorIndique">${indique[i]}° Post.</span> `;
    }
}