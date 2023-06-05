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
function consultarDados(){
    var instrucao = 
    `
    select (select count(genero) from tbLivros where genero = 'Terror')Terror,
    (select count(genero) from tbLivros where genero = 'Drama') Drama,
     (select count(genero) from tbLivros where genero = 'Romance')Romance,
      (select count(genero) from tbLivros where genero = 'Comédia')Comédia,
       (select count(genero) from tbLivros where genero = 'Ficção')Ficção;
    `
    return database.executar(instrucao)
}

module.exports = {
    cadastrar,
    listar,
    consultarDados
};