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
                        <img class="img-bandeira" src="assets/bandeira${i + 1}.png" alt="Posição ${i + 1}"></img> 
                        <img class="img-Chefes" src="./assets/chefes/${respostaJSON[i].nome}.jpg" alt="${(respostaJSON[i].nome).toLowerCase()}">
                        <h3 class="titulo-campeao">${respostaJSON[i].nome}</h3>
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


// <div class="ranking">
//                     <div class="ranking-imgs">
//                         <img class="img-bandeira" src="assets/bandeira${i + 1}.png" alt="Posição ${i + 1}"></img> 
//                         <img class="img-Chefes" src="./assets/chefes/${respostaJSON[i].nome}.jpg" alt="${(respostaJSON[i].nome).toLowerCase()}">
//                     </div>
//                     <h3 class="titulo-campeao">${respostaJSON[i].nome}</h3>
//                     <div class="ranking-votos">
//                         <p>Votos</p>
//                         <p>${respostaJSON[i].votos}</p>
//                     </div>
//         </div>