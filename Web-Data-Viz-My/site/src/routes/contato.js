var express = require("express");
var router = express.Router();

var contatoController = require("../controllers/contatoController.js");

router.get("/", function (req, res) {
    contatoController.testar(req, res);
});

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    contatoController.cadastrar(req, res);
});

router.post("/recuperarIdUsuario/:nome", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    contatoController.recuperarIdUsuario(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    contatoController.listar(req, res);
});

module.exports = router;