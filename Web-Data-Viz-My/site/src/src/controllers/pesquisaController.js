var pesquisaModel = require("../models/pesquisaModel");

function listar(req, res) {
    pesquisaModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var genero = req.body.generoServer;
    var autor = req.body.autorServer;
    var qtd = req.body.qtdServer

    if (genero == undefined) {
        res.status(400).send("O genêro está undefined!");
    }
    if(autor == undefined){
        res.status(400).send("O autor está undefined")
    }
    if(qtd == undefined){
        res.status(400).send("A quantidade mensal está undefined")
    }
    pesquisaModel.cadastrar(genero,autor,qtd).then(function(resposta){
        res.status(200).send("Carro criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}