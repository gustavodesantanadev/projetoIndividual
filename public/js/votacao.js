function exibirChefes(){
  const nomeChefe = ["Cavaleiro da Colmeia","O Colecionador","Defensor do Esterco","Falso Cavaleiro","Flukemarm","Guerreiro das Almas",
    "Gorb","Grimm","Guardião Cristalizado","Hornet","Hu","Imenso Batedor Musgoso","Irmãos Oro & Mato","Lordes Louva Deus","Mãe Mosca",
    "Marmu","Mawlek Incubador","Mestre das Almas","Mestre do Ferrão Oro","Mestre da Pintura Sheo","Nosk",
    "Rei Vengemosca","Receptáculo Quebrado","Xero"];

    const divTodosChefes = document.querySelector(".todosChefes");

    for(var i = 0; i < nomeChefe.length; i++){
      divTodosChefes.innerHTML +=`
      <div class="chefes">
            <img class="imgChefes" src="assets/chefes/${nomeChefe[i]}.jpg" alt="${nomeChefe[i]}">
            <span class="chefe-legenda">${nomeChefe[i]}</span>
            <span class="idCampeao">${i + 1}</span>
      </div>
      `
    }
  
  }
  exibirChefes()