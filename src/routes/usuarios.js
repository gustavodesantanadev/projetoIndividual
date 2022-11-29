var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/addComentario/:idUsuario", function(req, res){
    usuarioController.addComentario(req, res);
})

router.get("/mostrarComentarios", function(req, res){
    usuarioController.mostrarComentarios(req, res);
})

router.put("/votar", function(req, res){
    usuarioController.votar(req, res);
})

router.get("/selecionarTop10", function(req, res){
    usuarioController.selecionarTop10(req, res);
})

module.exports = router;