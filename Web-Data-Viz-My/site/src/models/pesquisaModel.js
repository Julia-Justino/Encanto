var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM tbLivros;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(genero, autor, qtd) {
    var instrucao = `
        INSERT INTO tbLivros ( genero, autor, qtdLivrosMes) VALUES ('${genero}','${autor}','${qtd}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};