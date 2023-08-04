const nomberOfWords = 100;


export function buildSearchForm(){
      let searchSection = document.querySelector(".search-section");
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
                           searchSection.appendChild(search);
}

export function buildCardPlats(element) {
   let ingredientItem = "";
   
  //  console.log(element.ingredients);
   for(let i = 0; i< element.ingredients.length; i++) {
    // console.log(element.ingredients[i].unit);
      ingredientItem += "<li class=\"\">"+element.ingredients[i].ingredient+": "+(element.ingredients[i].quantity ? element.ingredients[i].quantity : '')+(element.ingredients[i].unit ? element.ingredients[i].unit : '')+"</li>";
      // ingredientItem += "<li class=\"photographe__detail__container__tag__item\">"+element.ingredients[i].ingredient+": "+element.ingredients[i].quantity === undefined ? :element.ingredients[i].quantity +" "+element.ingredients[i].unit === undefined? "":element.ingredients[i].unit+"</li>";
    }
    // console.log(ingredientItem);
    buildCardPlat(element,ingredientItem);
   }

   export function buildCardPlat(element,ingredientItem){
 let cardElement = document.createElement("div");
   cardElement.classList.add("card", "col-4", "border-0", "p-2", "m-0");
   cardElement.innerHTML =`<div class="plat-image">

                            </div>
                            <div class="card-body">
                                       <div class="card-title-time row">
                                             <p class="col-8 plats-title">${element.name}</p>
                                             <p class="col-4 plats-ingredients">
                                                      <i class="far fa-clock"></i><span><strong> ${element.time} min</strong></span>
                                             </p>
                                       </div>
                                       <div class="card-ingredients-description row">
                                             <div class="col-7 plats-ingredients">
                                                   <ul class="main-ingerdients">
                                                            ${ingredientItem+ "" } 
                                                   </ul>
                                             </div>
                                             <p class="col-5 plats-descriptions">${buildTestToDisplay(element.description, nomberOfWords)}</p>
                                       </div>
                            </div>`;
  document.querySelector(".rowcard").appendChild(cardElement);
 }

 function buildIngredientsPlat(ingredients){
         for (let index = 0; index < ingredients.length; index++) {
      //      console.log(ingredients[index]);
            let li = document.createElement("li");
            li.textContent = `${ingredients[index].ingredient}`;
            document.querySelector("ul").appendChild(li);
            // console.log(ingredients[index].ingredient);
         }  
}

// export function buildIngredientsList(items) {
//   let  ingredientItem ="";
//     for(let i = 0; i< items.length; i++) {
//   //    console.log(ingredients[i].length);
//       ingredientItem += "<li class=\"ingredients__contain__item\">"+items[i]+"</li>";
//     }
//     console.log("okooooooo");
// }

export function buildDropDown(ingredients){

  const ingredientItemContainer = document.createElement("div");
        ingredientItemContainer.classList.add("filtre");
    let  ingredientItem ="";
    for(let i = 0; i< ingredients.length; i++) {
      ingredientItem += "<li class=\"ingredients__contain__item\">"+ingredients[i]+"</li>";
    }

                                      ingredientItemContainer.innerHTML=` <span class="dropdown mr-2 mr-0 ingredientss btn btn-primary dropdown-toggle">
                                                                                   Ingredients
                                                                          </span>
                                                                          <div class="bg-primary mr-3 ingredients">
                                                                                      <div class="row input-group ingredients__search">
                                                                                          <input type="text" class="form-control bg-primary ml-3 ingredients__search__input" placeholder="Rechercher un ingrédient">
                                                                                          <span class="ingredients__search__icon"><i class="fas fa-caret-down"></i></span>
                                                                                      </div>
                                                                                      <ul class="ingredients__contain">
                                                                                            ${ingredientItem}
                                                                                      </ul>
                                                                          </div>`;
            document.querySelector(".filter-section").appendChild(ingredientItemContainer);                                     
                                                        }



export function buildPartIngredients(ingredients){
    let  ingredientItem ="";
    for(let i = 0; i< ingredients.length; i++) {
  //    console.log(ingredients[i].length);
      ingredientItem += "<li class=\"ingredients__contain__item\">"+ingredients[i]+"</li>";
    }
    document.querySelector(".ingredients__contain").innerHTML=`${ingredientItem}`;
}



export function buildFilterAppareils(apareils){
    let  apareilsItem ="";
    const apareilsItemContainer = document.createElement("div");
          apareilsItemContainer.classList.add("filtre");
    for(let i = 0; i< apareils.length; i++) {
      apareilsItem += "<li class=\"apareils__contain__item\">"+apareils[i]+"</li>";
    }

                                         apareilsItemContainer.innerHTML=`<span class="dropdown mr-2 mr-0 apareilss btn btn-success dropdown-toggle">
                                                                                  Apareils
                                                                          </span>
                                                                          <div class="bg-success mr-3 apareils">
                                                                                      <div class="row input-group ingredients__search">
                                                                                          <input type="text" class="form-control bg-success ml-3 apareils__search__input" placeholder="Rechercher un apareil">
                                                                                          <span class="apareils__search__icon"><i class="fas fa-caret-down"></i></span>
                                                                                      </div>
                                                                                      <ul class="apareils__contain">
                                                                                            ${apareilsItem}
                                                                                      </ul>
                                                                          </div>`;
                                  document.querySelector(".filter-section").appendChild(apareilsItemContainer);                                   
                                                        }



export function buildPartApareils(apareils){
    let  apareilsItem ="";
    for(let i = 0; i< apareils.length; i++) {
      apareilsItem += "<li class=\"apareils__contain__item\">"+apareils[i]+"</li>";
    }
    document.querySelector(".apareils__contain").innerHTML=`${apareilsItem}`;
}


export function buildFilterUstensiles(ustenciles){
    let  ustensilesItem ="";
    const ustensilesItemContainer = document.createElement("div");
    ustensilesItemContainer.classList.add("filtre");
    for(let i = 0; i< ustenciles.length; i++) {
      ustensilesItem += "<li class=\"ustensiles__contain__item\">"+ustenciles[i]+"</li>";
    }

    ustensilesItemContainer.innerHTML=`
                                                                          <span class="dropdown mr-2 mr-0 ustensiless btn btn-danger dropdown-toggle">
                                                                                  Ustensiles
                                                                          </span>
                                                                          <div class="bg-danger ustensiles mr-2">
                                                                                      <div class="row input-group ustensiles__search">
                                                                                          <input type="text" class="form-control bg-danger ml-3 ustensiles__search__input" placeholder="Rechercher un ustensile">
                                                                                          <span class="ustensiles__search__icon"><i class="fas fa-caret-down"></i></span>
                                                                                      </div>
                                                                                      <ul class="ustensiles__contain">
                                                                                            ${ustensilesItem}
                                                                                      </ul>
                                                                          </div>
                                            `;
                                  document.querySelector(".filter-section").appendChild(ustensilesItemContainer);                                   
                                                        }



export function buildPartUstensiles(ustensiles){
    let  ustensilesItem ="";
    for(let i = 0; i< ustensiles.length; i++) {
  //    console.log(ingredients[i].length);
  ustensilesItem += "<li class=\"ustensiles__contain__item\">"+ustensiles[i]+"</li>";
    }
    document.querySelector(".ustensiles__contain").innerHTML=`${ustensilesItem}`;
}

export function buildNewTags(tag) {
        
  // <p>
  //    <span>${tag}</span>
  //    <span><i class="far fa-times"></i></span>
  // </p>
        
}


export function buildArrayTags(arrayTags) {
  buildTagsList(arrayTags);
  return arrayTags;
}

export function buildTagsList(arrayTagsResult) {
  // console.log("Construction des tags en cours...");
  if (arrayTagsResult.length > 0) {
    document.querySelector(".search-section").innerHTML ='';
    arrayTagsResult.forEach((tag) => {
       const pFilter = document.createElement('p');
       pFilter.classList.add("bg-primary","paragraphe-filter");
       pFilter.innerHTML =`<span>${tag}</span>
                           <i class="fas fa-times close-tags"></i>`
    document.querySelector(".search-section").appendChild(pFilter);
    });
   }
  //  console.log("fin de la construction des tags...");
}


export function searchAndBuildPlats(event) {
  // Effacez les résultats précédents
   var searchResults = [];
   // Sélectionnez l'élément de champ de recherche et la liste de résultats
   const globalSearch = document.querySelector('.input-search');
  // Récupérez le texte saisi dans le champ de recherche
  const searchTerm = globalSearch.value.toLowerCase();

  //  console.log("Recherche en cours ...");

  // Effectuez la recherche en utilisant les données appropriées (par exemple, un tableau de résultats préexistant)
  if(searchTerm.length >= 3 ){
      // console.log(searchTerm);
        searchResults.push(recipes.filter(item =>
           item.name.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm)));
        rows.innerHTML="";
        // console.log('tableau resultat=>',searchResults);
        for (let index = 0; index < searchResults.length; index++) {
          let elts = searchResults[index];
          for (let i = 0; i < elts.length; i++) {
           buildCardPlats(elts[i]);  
          //  console.log('id=>',elts[i].id);
          //  console.log('name=>',elts[i].name);
        }
   }
}else{
 //location.reload();
 for (let index = 0; index < recipes.length; index++) {
 buildCardPlats(recipes[index]);   }
}}

export function cardPlat(tabRecette){
  tabRecette.forEach((element)=>{buildCardPlats(element);});
}
export function getAllIngredients(recettes) {
  let tab_ingredients = new Array;
  recettes.forEach(elt => {
    elt.ingredients.forEach(ing =>{
      if (!tab_ingredients.includes(ing.ingredient)) {
          tab_ingredients.push(ing.ingredient);}
    })})

    return tab_ingredients;
}




export function getAllAppareils(recettes) {
  let tab_appareils = [];
  recettes.forEach(elt => {
    if (!tab_appareils.includes(elt.appliance)) {
      tab_appareils.push(elt.appliance);}
  }); 
  return tab_appareils;
}


export function getAllUstensils(recettes) {
     
    let tab_ustensiles = [];
    recettes.forEach(elt => {
    elt.ustensils.forEach(ust =>{
      if (!tab_ustensiles.includes(ust)) {
        tab_ustensiles.push(ust);}
    });}) 

  return tab_ustensiles;
}

function buildTestToDisplay(descriptions, nomberOfWords) {

    if (descriptions.length > nomberOfWords) {

         descriptions = descriptions.slice(0, nomberOfWords)+"...";

    }else {
       descriptions = descriptions;  

    }
  return descriptions;
}