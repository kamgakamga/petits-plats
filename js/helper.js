export function buildSearchForm(){
      let main = document.querySelector("main");
      let search = document.createElement("div");

        // search.innerHTML=`
        // <div class="mb-3 row mt-3">
        //         <input type="text" class="bg-light form-control input-search col-11 border-l-0" placeholder="Recherche une recette">
        //         <div class="input-group-prepend">
        //           <button class="btn bg-light" type="button">
        //             <i class="fa fa-search"></i>
        //           </button>
        //         </div>
        // </div>`
        search.innerHTML=` <div class="input-group mb-3 mt-3">
                              <input type="text" class="form-control bg-light input-search" placeholder="Recherche une recette">
                              <div class="input-group-prepend">
                                <button class="btn bg-light" type="button">
                                  <i class="fa fa-search"></i>
                                </button>
                              </div>
                           </div>`
        main.appendChild(search);
}

export function buildCardPlats(element) {
   let ingredientItem = "";
  //  console.log(element);
  //  console.log(element.ingredients);
   for(let i = 0; i< element.ingredients.length; i++) {
      ingredientItem += "<li class=\"photographe__detail__container__tag__item\">"+element.ingredients[i].ingredient+"</li>";
    }
    // console.log(ingredientItem);
    buildCardPlat(element,ingredientItem);
   }

   export function buildCardPlat(element,ingredientItem){
 let cardElement = document.createElement("div");
   cardElement.classList.add("card", "col-4", "border-0", "p-3", "m-0");
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
            // console.log(ingredients[index].ingredient);
         }  
}

export function buildDropDown(ingredients){
    const dropDownSection = document.createElement("section");
    let  ingredientItem ="";

    for(let i = 0; i< ingredients.length; i++) {
      ingredientItem += "<li class=\"ingredient-item\">"+ingredients[i]+"</li>";
    }
    dropDownSection.classList.add("mb-2");
          dropDownSection.innerHTML=`<div class="row m-1">
                <div class="bg-primary" style="max-width: 500px;">
                        <div class="row" style="max-width: 500px;">
                            <input type="text" class="form-control bg-primary ml-3" style="width: 100%;" placeholder="Rechercher un ingrédient">
                        </div>
                        <ul class="ingredient-items">
                              ${ingredientItem}
                        </ul>
                </div>
              <div class="dropdown ml-2 mr-2">
                      <a class="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Appareils
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
              </div>
              <div class="dropdown ml-2 mr-2">
                  <a class="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Ustensiles
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
        </div>`;

        document.querySelector("main").appendChild(dropDownSection);
}