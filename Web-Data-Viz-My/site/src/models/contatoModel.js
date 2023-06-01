const { json } = require("express");
var database = require("../database/config")
function listar() {
    var instrucao = `
        SELECT * FROM tbUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email);
    console.log(nome)
    var instrucao = `
        INSERT INTO tbUsuario (nomeUsuario) VALUES ('${nome}');
        `;
        /*  INSERT INTO tbEmail (fkUsuario, email) VALUES ('','${email}') */
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function recuperarIdUsuario(nome) {
    console.log("ACESSEI O USUARIO MODEL IDD \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome);
    console.log(nome)
    var instrucao = `SELECT idUsuario FROM tbUsuario WHERE nomeUsuario = '${nome}'`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrarEmail(idUsuario, email) {
    console.log("ACESSEI O cadastrar email MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email);
    console.log(email);

    var instrucao = `
        INSERT INTO tbEmail (fkUsuario, email) VALUES ('${idUsuario}', ${email}');
        `;
        /*  INSERT INTO tbEmail (fkUsuario, email) VALUES ('','${email}') */
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    cadastrar,
    listar,
    recuperarIdUsuario, 
    cadastrarEmail
};