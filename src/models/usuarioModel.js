var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = sha2('${senha}',256);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', sha2('${senha}',256));
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function addComentario(idUsuario,textoComentario){
    var instrucao = `INSERT INTO comentario(comentario,fkUsuario) values
    ('${textoComentario}', ${idUsuario});
   ` 

    return database.executar(instrucao)
}

function mostrarComentarios(){
    var instrucao = `SELECT * FROM comentario JOIN usuario  WHERE comentario.fkUsuario = usuario.idUsuario;`

    return database.executar(instrucao)
}

function votar(idChefe, idUsuario){
    var instrucao = `
    UPDATE chefe SET votos = (votos + 1) WHERE idChefe = ${idChefe};
    `;
  
    votarIntrução2(idChefe, idUsuario)
    return database.executar(instrucao)
  }

function votarIntrução2(idChefe, idUsuario){
    var instrucao = `
    UPDATE usuario SET fkChefe = ${idChefe} where idUsuario = ${idUsuario};
    `;

    return database.executar(instrucao)
}

function selecionarTop10(){
    var instrucao = `SELECT * FROM chefe ORDER BY votos desc limit 10;` 

    return database.executar(instrucao)
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    addComentario,
    mostrarComentarios,
    votar,
    selecionarTop10
};