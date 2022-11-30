function exibirChefes(){
    const nomeChefe = ["Imenso Batedor Musgoso","Cavaleiro da Colmeia","O Colecionador",
    "Defensor do Esterco", "Falso Cavaleiro", "Flukemarm","Gorb","Grimm","Guardião Cristalizado", 
    "Guerreiro das Almas","Hornet", "Hu", "Mawlek Incubador", "Lordes Louva Deus", "Mãe Mosca","Marmu","Mestre das Almas", 
    "Nosk", "Mestre do Ferrão Oro","Irmãos Oro & Mato", "Receptáculo Quebrado", "Rei Vengemosca","Mestre da Pintura Sheo", "Xero"]

    const divTodosChefes = document.querySelector(".todosChefes");

    for(var i = 0; i < nomeChefe.length; i++){
      divTodosChefes.innerHTML +=`
      <div class="chefes">
            <img class="imgChefes" src="assets/chefes/${nomeChefe[i]}.jpg" alt="${nomeChefe[i]}">
            <span class="chefe-legenda">${nomeChefe[i]}</span>
      </div>
      `
    }
  
  }
  exibirChefes()