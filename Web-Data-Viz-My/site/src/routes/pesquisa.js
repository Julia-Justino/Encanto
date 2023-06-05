var express = require("express");
var router = express.Router();

var pesquisaController = require("../controllers/pesquisaController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    pesquisaController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    pesquisaController.listar(req, res);
});
router.post("/consultarDados", function(req, res){
    pesquisaController.consultarDados(req, res)
})

module.exports = router;