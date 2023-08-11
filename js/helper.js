import { mainFilter } from "../js/search.js";


const nomberOfWords = 100;
var arrayTags = [];
var arrayTagsResult = [];

var arrayTagsApareils = [];
var arrayTagsResultApareils = [];

var arrayTagsUstensiles = [];
var arrayTagsResultUstensiles = [];



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
 let cardElement = document.createElement("article");
    cardElement.classList.add("card","section__article__recette-item");
  //  cardElement.classList.add("card");
   cardElement.innerHTML =`<div class="plat-image">

                            </div>
                            <div class="card-body">
                                       <div class="card-title-time row">
                                             <p class="col-8 plats-title">${element.name}</p>
                                             <p class="col-4 plats-times">
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
  document.querySelector('.card-section').appendChild(cardElement);
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


export function updateDropDown(ingredients){

  const element = document.querySelector(".ingredients__contain");
 
  if(element !== null) {
     document.querySelector(".ingredients__contain").innerHTML = '';
    let  ingredientItem ="";
    for(let i = 0; i< ingredients.length; i++) {
      ingredientItem += "<li class=\"ingredients__contain__item\">"+ingredients[i]+"</li>";
    }
    document.querySelector(".ingredients__contain").innerHTML = `${ingredientItem}`;
    // const itemFilterss = document.querySelectorAll('.ingredients__contain__item');

      // document.querySelector(".ingredients__search__icon").addEventListener("click",closeFilter());    
      
      

      
const itemFilters = document.querySelectorAll('.ingredients__contain__item');

itemFilters.forEach((itemFilter) => {
  itemFilter.addEventListener('click', (event) => { 
          // console.log('click sur un item...12');
          if (arrayTags.length > 0) {
          if (!arrayTags.includes(event.target.textContent)) {
            arrayTags.push(event.target.textContent);
            console.log(arrayTags);
          }
          arrayTagsResult = buildArrayTags(arrayTags); 
         for (let index = 0; index < arrayTagsResult.length; index++) {
          const element = arrayTagsResult[index];
          const regex = new RegExp(`${element.trim().toLowerCase()}`);
          let d = mainFilter(regex,recipes);
           updateDropDown(getAllIngredients(d));
           console.log(mainFilter(regex,recipes));
           document.querySelector('.card-section').innerHTML = '';
           cardPlat(d);
         }
        } else{
          console.log('click sur un item...12');
          arrayTags.push(event.target.textContent);
          console.log(arrayTags);
          arrayTagsResult = buildArrayTags(arrayTags);

          for (let index = 0; index < arrayTagsResult.length; index++) {
           const element = arrayTagsResult[index];
           const regex = new RegExp(`${element.trim().toLowerCase()}`);
           let d = mainFilter(regex,recipes);
            updateDropDown(getAllIngredients(d));
            console.log(mainFilter(regex,recipes));
            document.querySelector('.card-section').innerHTML = '';
            cardPlat(d);
          }
        }
        })
      });

}}


export function updateFilterAppareils(apareils){
 
  const element = document.querySelector(".apareils__contain");
 
  if(element !== null) {
     document.querySelector(".apareils__contain").innerHTML = '';

    let  apareilsItem ="";
    for(let i = 0; i< apareils.length; i++) {
      apareilsItem += "<li class=\"ingredients__contain__item\">"+apareils[i]+"</li>";
    }

    document.querySelector(".apareils__contain").innerHTML = `${apareilsItem}`;
} }




export function updateFilterUstansiles(ustensiles){
 
  const element = document.querySelector(".ustensiles__contain");
 
  if(element !== null) {
     document.querySelector(".ustensiles__contain").innerHTML = '';

    let  ustensilesItem ="";
    for(let i = 0; i< ustensiles.length; i++) {
      ustensilesItem += "<li class=\"ustensiles__contain__item\">"+ustensiles[i]+"</li>";
    }

    document.querySelector(".ustensiles__contain").innerHTML = `${ustensilesItem}`;
} }


export function buildDropDown(ingredients){
  const ingredientItemContainer = document.createElement("article");
        ingredientItemContainer.classList.add("filtre");
    let ingredientItem ="";
    for(let i = 0; i< ingredients.length; i++) {
      // onClick = \"buildSeletedIngredientTag()\" 
      ingredientItem += "<li class=\"ingredients__contain__item\">"+ingredients[i]+"</li>";
    }
                                      ingredientItemContainer.innerHTML=` <span class="dropdown mr-2 ingredientss btn btn-primary dropdown-toggle">
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
            document.querySelector(".ingredients__search__icon").setAttribute('onClick','closeFilterIngredient()');   

      
      
const itemFilters = document.querySelectorAll('.ingredients__contain__item');

itemFilters.forEach((itemFilter) => {
  itemFilter.addEventListener('click', (event) => { 
          console.log('click sur un item...11');
          if (!arrayTags.includes(event.target.textContent)) {
            arrayTags.push(event.target.textContent);
            console.log(arrayTags);
          }
          arrayTagsResult = buildArrayTags(arrayTags); 
         for (let index = 0; index < arrayTagsResult.length; index++) {
          const element = arrayTagsResult[index];
          const regex = new RegExp(`${element.toLowerCase()}`);
          let d = mainFilter(regex,recipes);
          updateDropDown(getAllIngredients(d));
           console.log(mainFilter(regex,recipes));
          //  document.querySelector('.section__article__recette-item').innerHTML = '';
           document.querySelector('.card-section').innerHTML = '';
           cardPlat(d);
         }
        })
      });

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
    const apareilsItemContainer = document.createElement("article");
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
                                                                                          <span class="apareils__search__icon" onClick="closeFilterApareil();"><i class="fas fa-caret-down"></i></span>
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


export function buildFilterUstensiles(ustensiles){
    let  ustensilesItem ="";
    const ustensilesItemContainer = document.createElement("article");
    ustensilesItemContainer.classList.add("filtre");
    for(let i = 0; i< ustensiles.length; i++) {
      ustensilesItem += "<li class=\"ustensiles__contain__item\">"+ustensiles[i]+"</li>";
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
                             document.querySelector(".ustensiles__search__icon").setAttribute('onClick',   'closeFilterUstensile()');                               
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
  console.log("Construction des tags en cours...");
  if (arrayTagsResult.length > 0) {
    document.querySelector('.tags-ingredients-contain').innerHTML ='';
    arrayTagsResult.forEach((tag) => {
       const pFilter = document.createElement('p');
       pFilter.classList.add("bg-primary","paragraphe-filter");
       pFilter.innerHTML =`<span class="tags__contain"><span class="tags__text">${tag}</span><i class="fas fa-times close-tags"></i></span>`
    document.querySelector('.tags-ingredients-contain').appendChild(pFilter);

   let  listOfTags = document.querySelectorAll('.close-tags');
    
   listOfTags.forEach(tag =>{
        tag.addEventListener('click',function(e) {
          const parent = e.target.parentNode;
         
      if(arrayTags.includes(parent.textContent)){
           arrayTags.splice(arrayTags.indexOf(parent.textContent),1);
           buildTagsList(arrayTags);
        // console.log('tags fermé avec succes !!!',parent.textContent);
         console.log(arrayTags);
          if (!arrayTags.length > 0) {
            updateDropDown(getAllIngredients(recipes));
            cardPlat(recipes); 
      }
    } 
   });}) });
   }else{
    document.querySelector('.tags-ingredients-contain').innerHTML ='';
   }
}



export function buildArrayTagsAppareils(arrayTagsApareils) {
  console.log("............///............");
  console.log('arrayTagsApareils',arrayTagsApareils);
  console.log("..............////..........");
  buildTagsListAppareils(arrayTagsApareils);
  return arrayTagsApareils;
}

export function buildTagsListAppareils(arrayTagsResultApareils) {
   console.log("........................");
     console.log('arrayTagsApareils',arrayTagsApareils);
   console.log("........................");
  if (arrayTagsResultApareils.length > 0) {

    document.querySelector('.tags-apareils-contain').innerHTML ='';
    arrayTagsResultApareils.forEach((tag) => {
       const pFilter = document.createElement('p');
       pFilter.classList.add("bg-success","paragraphe-filter");
       pFilter.innerHTML =`<span class="tags__contain"><span class="tags__text">${tag}</span><i class="fas fa-times close-tags"></i></span>`
    document.querySelector('.tags-apareils-contain').appendChild(pFilter);




   let  listOfTags = document.querySelectorAll('.close-tags');
    console.log('data',listOfTags);
    console.log('data',arrayTagsResultApareils);


   listOfTags.forEach(tag =>{
        tag.addEventListener('click',function(e) {
          const parent = e.target.parentNode;
         console.log("suppression du tags appareils en cours...");
         console.log(arrayTagsApareils,'blabla');
      if(arrayTagsResultApareils.includes(parent.textContent)){
        arrayTagsResultApareils.splice(arrayTagsResultApareils.indexOf(parent.textContent),1);
           buildTagsListAppareils(arrayTagsResultApareils);
        // console.log('tags fermé avec succes !!!',parent.textContent);
         console.log(arrayTagsResultApareils);
          if (!arrayTagsResultApareils.length > 0) {
            updateFilterAppareils(getAllAppareils(recipes));
            cardPlat(recipes); 
      }
    } 
   });}) });
   }else{
    document.querySelector('.tags-apareils-contain').innerHTML ='';
   }

}




export function buildArrayTagsUstensiles(arrayTags) {
  buildTagsListUstensiles(arrayTags);
  return arrayTags;
}

export function buildTagsListUstensiles(arrayTagsResult) {
  console.log("Construction des tags en cours...");
  if (arrayTagsResult.length > 0) {
    document.querySelector('.tags-ustensiles-contain').innerHTML ='';
    arrayTagsResult.forEach((tag) => {
       const pFilter = document.createElement('p');
       pFilter.classList.add("bg-danger","paragraphe-filter");
       pFilter.innerHTML =`<span class="tags__contain"><span class="tags__text">${tag}</span><i class="fas fa-times close-tags"></i></span>`
    document.querySelector('.tags-ustensiles-contain').appendChild(pFilter);

   let  listOfTags = document.querySelectorAll('.close-tags');
    
   listOfTags.forEach(tag =>{
        tag.addEventListener('click',function(e) {
          const parent = e.target.parentNode;
         
      if(arrayTags.includes(parent.textContent)){
           arrayTags.splice(arrayTags.indexOf(parent.textContent),1);
           buildTagsListUstensiles(arrayTags);
        // console.log('tags fermé avec succes !!!',parent.textContent);
         console.log(arrayTags);
          if (!arrayTags.length > 0) {
            updateFilterUstansiles(getAllUstensils(recipes));
            cardPlat(recipes); 
      }
    } 
   });}) });
   }else{
    document.querySelector('.tags-ustensiles-contain').innerHTML ='';
   }

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
  tabRecette.forEach((element)=>{
    buildCardPlats(element);
  });
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

