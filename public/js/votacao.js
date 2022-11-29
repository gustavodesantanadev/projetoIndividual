function exibirChefes(){
    const chefeArray = ["batedorMusgo","cavaleiroDaColmeia","colecionador","defensorDoEsterco","falsoCavaleiro","flukemarm","gorb","grimm","guardiaoCristalizado","guerreiroDasAlmas","hornet","hu","incubador","lordesLouvaDeus","maeMosca","marmu","mestreDasAlmas","nosk","oro","oro&mato","receptaculoQuebrado","reiVegemosca","sheo","xero"];
    const divTodosChefes = document.querySelector(".todosChefes");
    
    for(var i = 0; i < chefeArray.length; i++){
        divTodosChefes.innerHTML +=`
      <div class="chefes">
            <img class="imgChefes" src="assets/chefes/${chefeArray[i].toLowerCase()}.jpg" alt="${chefeArray[i]}">
            <span class="chefe-legenda">${chefeArray[i]}</span>
            <span class="idChefe">${i + 1}</span>
      </div>`
    }
  
  }
  exibirChefes()