// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var nomeUsuario = document.getElementById("nomeUsuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        nomeUsuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var botao = document.querySelector('.btn-nav')
    var divAguardar = document.getElementById("div_aguardar");
    botao.style.display = 'none'
    divAguardar.style.display = "flex";
  }
  
  function finalizarAguardar(texto) {
    var botao = document.querySelector('.btn-nav')
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";
    botao.style.display = 'block'
  }


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

