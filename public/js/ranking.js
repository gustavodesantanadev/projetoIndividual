nomeUsuario.innerHTML = sessionStorage.getItem("NOME_USUARIO") + ""

    function selecionarTop10(){
    fetch("/usuarios/selecionarTop10").then(
        function (resposta){
        if(resposta.ok){
            resposta.json().then(function (response){
            var respostaJSON = JSON.parse(JSON.stringify(response))
            for(var i = 0; i < response.length; i++){
                rankings.innerHTML += 
                `
                    <div class="ranking">
                        <div class="ranking-imgs">
                            <img class="img-posicao" src="assets/posicao/posicao${i + 1}.svg" alt="Posição ${i + 1}"></img> 
                            <img class="img-Chefes" src="./assets/chefes/${respostaJSON[i].nome}.jpg" alt="${respostaJSON[i].nome}">
                        </div>
                        <h3 class="titulo-chefe">${respostaJSON[i].nome}</h3>
                        <div class="votos">
                            <p>Votos</p>
                            <p>${respostaJSON[i].votos}</p>
                        </div>
                    </div>
                `
            }
            
            })
        }
        })
    }
selecionarTop10()