export function buildSearchForm(){
      let main = document.querySelector("main");
      let search = document.createElement("div");

        search.innerHTML=`
        <div class="mb-2">
           <div class="">
                <input type="text" class="bg-light form-control input-search" placeholder="Recherche une recette"><span class="input-group"><i class="far fa-search "></span></i>
                </div>
        </div>`
        main.appendChild(search);
}

export function buildCardPlats(element) {
   let ingredientItem = "";
   for(let i = 0; i< element.ingredients.length; i++) {
      ingredientItem += "<li class=\"photographe__detail__container__tag__item\">"+element.ingredients[i].ingredient+"</li>";
    }
    console.log(ingredientItem);
    buildCardPlat(element,ingredientItem);
   }

   export function buildCardPlat(element,ingredientItem){
 let cardElement = document.createElement("div");
   cardElement.classList.add("card", "col-4", "p-3", "m-3");
   cardElement.innerHTML =`<div class="plat-image">

                                  </div>
                                 <div class="card-body">
                                       <div class="card-title-time row">
                                             <p class="col-9 plats-title">${element.name}</p>
                                             <p class="col-3 plats-ingredients">
                                                      <i class="far fa-clock"></i><span><strong> ${element.time} min</strong></span>
                                             </p>
                                       </div>
                                       <div class="card-ingredients-description row">
                                             <div class="col-6 plats-ingredients">
                                                   <ul class="main-ingerdients">
                                                            ${ingredientItem}
                                                   </ul>
                                             </div>
                                             <p class="col-6 plats-descriptions">${element.description}</p>
                                       </div>
                                  </div>`;
  document.querySelector(".rowcard").appendChild(cardElement);
 }

 function buildIngredientsPlat(ingredients){
         for (let index = 0; index < ingredients.length; index++) {
            console.log(ingredients[index]);
            let li = document.createElement("li");
            li.textContent = `${ingredients[index].ingredient}`;
            document.querySelector("ul").appendChild(li);
            console.log(ingredients[index].ingredient);
         }  
}

export function buildDropDown(){
    const dropDownSection = document.createElement("section");
    dropDownSection.classList.add("mb-2");
          dropDownSection.innerHTML=` <div class="dropdown">
          <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Ingredients
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
  <div class="dropdown">
          <a class="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          Appareils
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
       <div class="dropdown">
          <a class="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Ustensiles
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>`;

        document.querySelector("main").appendChild(dropDownSection);
}