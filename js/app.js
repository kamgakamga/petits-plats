import { buildSearchForm,buildPartIngredients,
         buildCardPlats, buildDropDown,buildTagsListUstensiles,
         cardPlat, getAllIngredients,buildArrayTagsAppareils,
         getAllUstensils,getAllAppareils,buildFilterAppareils,
         buildPartUstensiles,buildFilterUstensiles, 
         buildPartApareils,updateDropDown,buildArrayTags,
         updateFilterAppareils,updateFilterUstansiles} from "./helper.js";
import { mainFilter, ingredientFilter , apareilsFilter, ustensilesFilter} from "./search.js";




var tab_ingredients = [];
var tab_ustensiles = [];
var tab_appareils = [];
var closeTags;

tab_ingredients = getAllIngredients(recipes);
tab_ustensiles  = getAllUstensils(recipes);
tab_appareils   = getAllAppareils(recipes);

// Construction de la structure de base de ma page index.
// const body = document.body;
// const header = document.createElement("header");
// const main = document.createElement("main");
            //  main.classList.add("container", "main");
// const footer = document.createElement("footer");

// Ajout des elements a la struture base
// body.appendChild(header);
// body.appendChild(main);
//body.appendChild(footer);
// header.classList.add("d-flex");
// header.classList.add("align-items-center");
// header.classList.add("justify-content-center");
// header.classList.add("h-100");
// header.classList.add("mb-2","mt-2");
// header.classList.add("header");
// header.innerHTML=`<img src="img/15973932905401_logo.png" class="header" alt="logo les petits plats">`
// const searchSection = document.createElement("section");
// searchSection.classList.add("search-section");
// main.appendChild(searchSection);
// document.querySelector(".main").style.position = 'relative';
// buildSearchForm();


// const filterSection = document.createElement("section");
// filterSection.classList.add("filter-section");
// main.appendChild(filterSection);
// document.querySelector(".filter-section").style.display = 'flex';
// document.querySelector(".filter-section").style.position = 'absolute';
buildDropDown(tab_ingredients);
buildFilterAppareils(tab_appareils);
buildFilterUstensiles(tab_ustensiles);


// let cardSection = document.querySelector('.card-section');
// let cardArticle = document.createElement("article");
// cardSection.appendChild(cardArticle);
// cardArticle.classList.add("section__article__recette-item","rowcard");
cardPlat(recipes);

// Sélectionnez l'élément de champ de recherche et la liste de résultats
const globalSearch = document.querySelector('.input-search');
//const searchResults = document.getElementById('searchResults');

globalSearch.addEventListener('input', function() {

//     // Effacez les résultats précédents
     var searchResults = [];
     let apareilsResults = [];
     let ingredientResults = [];
     let ustensilesResults = [];

      // Récupérez le texte saisi dans le champ de recherche
    const searchTerm = globalSearch.value.toLowerCase();
    // Effectuez la recherche en utilisant les données appropriées (par exemple, un tableau de résultats préexistant)
    
    if(searchTerm.length >= 3 ){
     


    const regex = new RegExp(`${searchTerm.trim().toLowerCase()}`);

        searchResults = mainFilter(regex, recipes);
                  document.querySelector('.card-section').innerHTML='';

                  if (searchResults.length < 1 ) {
                    // console.log("AUCUN ELEMENT TROUVE...");
                      // rows.innerHTML="AUCUN ELEMENT TROUVE...";
                      updateDropDown(ingredientResults);
                      updateFilterAppareils(apareilsResults);
                      updateFilterUstansiles(ustensilesResults);
                  } else {
                    // rows.innerHTML="";
                    cardPlat(searchResults);
                    ingredientResults = getAllIngredients(searchResults);
                    console.log(ingredientResults);
                    ustensilesResults = getAllUstensils(searchResults);
                    console.log(ustensilesResults);
                    apareilsResults = getAllAppareils(searchResults);
                    console.log(apareilsResults);
                    updateDropDown(ingredientResults);
                    updateFilterAppareils(apareilsResults);
                    updateFilterUstansiles(ustensilesResults);
                    console.log(searchResults);
                  }
                 
             } else{
                    cardPlat(recipes);
                    updateDropDown(tab_ingredients);
                    updateFilterAppareils(tab_appareils);
                    updateFilterUstansiles(tab_ustensiles);
}});
// Sélectionnez l'élément de champ de recherche et la liste de résultats

const ingredientsSearch = document.querySelector(".ingredients__search__input");
// const ingredientsSearch = document.getElementsByClassName("ingredients__search__input");

//const searchResults = document.getElementById('searchResults');
// Ajoutez un écouteur d'événement pour la saisie de texte dans le champ de recherche
ingredientsSearch.addEventListener('input', function() {
    // Récupérez le texte saisi dans le champ de recherche

     const ingredientSearchTerm = ingredientsSearch.value.toLowerCase();

     console.log(ingredientSearchTerm);
    //Effectuez la recherche en utilisant les données appropriées (par exemple, un tableau de résultats préexistant)
    if(ingredientSearchTerm.length > 2 ){
 
      const regIngredient = new RegExp(`${ingredientSearchTerm.trim().toLowerCase()}`);
      let ingredientsResults = ingredientFilter(regIngredient, tab_ingredients);
            if (ingredientsResults.length < 1 ) {
                  updateDropDown(ingredientsResults);  
            } else {
                  updateDropDown(ingredientsResults);  
            }
     }else{
                  updateDropDown(tab_ingredients);
     }});

// Sélectionnez l'élément de champ de recherche et la liste de résultats
const apareilsSearch = document.querySelector('.apareils__search__input');
//const searchResults = document.getElementById('searchResults');

// Ajoutez un écouteur d'événement pour la saisie de texte dans le champ de recherche
apareilsSearch.addEventListener('input', function() {


  console.log("filtre sur les apareils.");
    // Récupérez le texte saisi dans le champ de recherche
    const apareilsSearchTerm = apareilsSearch.value.toLowerCase();
    // Effectuez la recherche en utilisant les données appropriées (par exemple, un tableau de résultats préexistant)
    
    
    
    if(apareilsSearchTerm.length > 2 ){
 
      const regApareils = new RegExp(`${apareilsSearchTerm.trim().toLowerCase()}`);
      let apareilsResults = apareilsFilter(regApareils, tab_ingredients);
            if (apareilsResults.length < 1 ) {
                  updateFilterAppareils(apareilsResults);  
            } else {
              updateFilterAppareils(apareilsResults);  
            }
     }else{
              updateFilterAppareils(tab_appareils);
     }});

// Sélectionnez l'élément de champ de recherche et la liste de résultats
const ustensilesSearch = document.querySelector('.ustensiles__search__input');
//const searchResults = document.getElementById('searchResults');

// Ajoutez un écouteur d'événement pour la saisie de texte dans le champ de recherche
ustensilesSearch.addEventListener('input', function() {
    // Récupérez le texte saisi dans le champ de recherche
    const ustensilesSearchTerm = ustensilesSearch.value.toLowerCase();
    // Effectuez la recherche en utilisant les données appropriées (par exemple, un tableau de résultats préexistant)
   
    if(ustensilesSearchTerm.length > 2 ){
 
      const regUstensiles = new RegExp(`${ustensilesSearchTerm.trim().toLowerCase()}`);
      let ustensilesResults = apareilsFilter(regUstensiles, tab_ustensiles);
            if (ustensilesResults.length < 1 ) {
              updateFilterUstansiles(ustensilesResults);  
            } else {
              updateFilterUstansiles(ustensilesResults);  
            }
     }else{
              updateFilterUstansiles(tab_ustensiles);
     }});





  //Ouverture et fermeture des dropdonw des filtres: ingredients
   let ingredients = document.querySelector(".ingredientss");
       ingredients.addEventListener('click',function(){
        console.log("Ouverture ingredient");
      document.querySelector(".ingredientss").style.display = 'none';  
      document.querySelector(".ingredients").style.display = 'inline-block';

      

      let apareils = document.querySelector(".apareils");
      var apareilsDisplayValue = window.getComputedStyle(apareils).getPropertyValue("display");
       if (apareilsDisplayValue === "inline-block" ) {
        document.querySelector(".apareils").style.display = 'none';
        document.querySelector(".apareilss").style.display = 'block';
       }


      let ustensiles = document.querySelector(".ustensiles");
      var ustensilesDisplayValue = window.getComputedStyle(ustensiles).getPropertyValue("display");
       if (ustensilesDisplayValue === "inline-block" ) {
        document.querySelector(".ustensiles").style.display = 'none';
        document.querySelector(".ustensiless").style.display = 'block';
       }

});




  //Ouverture et fermeture des dropdonw des filtres: apareils
   let apareils = document.querySelector('.apareilss');
   console.log("Ouverture apareils");
   apareils.addEventListener('click',function(){
      document.querySelector(".apareilss").style.display = 'none';  
      document.querySelector(".apareils").style.display = 'inline-block';


      
      let ustensiles = document.querySelector(".ustensiles");
      var ustensilesDisplayValue = window.getComputedStyle(ustensiles).getPropertyValue("display");
       if (ustensilesDisplayValue === "inline-block" ) {
        document.querySelector(".ustensiles").style.display = 'none';
        document.querySelector(".ustensiless").style.display = 'block';
       }

       
       let ingredients = document.querySelector(".ingredients");
       var ingredientsDisplayValue = window.getComputedStyle(ingredients).getPropertyValue("display");
        if (ingredientsDisplayValue === "inline-block" ) {
         document.querySelector(".ingredients").style.display = 'none';
         document.querySelector(".ingredientss").style.display = 'block';
        }
});

  //Ouverture et fermeture des dropdonw des filtres: ustensiles
   let ustensiles = document.querySelector('.ustensiless');
   ustensiles.addEventListener('click',function(){
      console.log("Ouverture ustensiles");
      document.querySelector(".ustensiless").style.display = 'none';  
      document.querySelector(".ustensiles").style.display = 'inline-block';



      let apareils = document.querySelector(".apareils");
      var apareilsDisplayValue = window.getComputedStyle(apareils).getPropertyValue("display");
       if (apareilsDisplayValue === "inline-block" ) {
        document.querySelector(".apareils").style.display = 'none';
        document.querySelector(".apareilss").style.display = 'block';
       }


       let ingredients = document.querySelector(".ingredients");
       var ingredientsDisplayValue = window.getComputedStyle(ingredients).getPropertyValue("display");
        if (ingredientsDisplayValue === "inline-block" ) {
         document.querySelector(".ingredients").style.display = 'none';
         document.querySelector(".ingredientss").style.display = 'block';
        }
});

const itemIngredientFilters = document.querySelectorAll('.ingredients__contain__item');
var arrayTags = [];
var arrayTagsResult = [];
var temp = [];


itemIngredientFilters.forEach((itemFilter) => {
  itemFilter.addEventListener('click', (event) => { 

    let results;
          console.log('click sur un item 1');
          if (!arrayTags.includes(event.target.textContent)) {
            arrayTags.push(event.target.textContent);
          }
          arrayTagsResult = buildArrayTags(arrayTags); 
         for (let index = 0; index < arrayTagsResult.length; index++) {
          const element = arrayTagsResult[index];
          const reg = new RegExp(`${element.trim().toLowerCase()}`);
           results = mainFilter(reg, recipes);
          // document.querySelector('.card-section').innerHTML='';
         
         }
         
         // console.log(temp);
         
         document.querySelector('.card-section').innerHTML="";
         var cmpt = 0;
         results.forEach(e =>buildCardPlats(e));
          closeTags = document.querySelectorAll(".close-tags");
          // console.log(closeTags);
          // closeTags.forEach((closeTag) =>{
          //   closeTag.addEventListener('click', (e) => {
          //   console.log('compteur:',e.target);
          //      let elementToMove  = e.target.parentNode.firstElementChild.innerHTML;
          //      let index = arrayTagsResult.indexOf(elementToMove);
          //      console.log(arrayTagsResult.indexOf(elementToMove.innerHTML));
          //      if (index > -1) {
          //       arrayTagsResult.splice(index, 1);
          //       console.log("suppression effectué avec succes !!!");
          //       buildTagsList(arrayTagsResult); 
          //     }});
          // } );
         //  document.querySelector(".ingredients").style.display = 'none';
         // document.querySelector(".ingredientss").style.display = 'block';
        })
      });





const itemApareilsFilters = document.querySelectorAll('.apareils__contain__item');
var arrayTagsApareils = [];
var arrayTagsResultApareils = [];
var temp = [];

console.log(itemApareilsFilters);
itemApareilsFilters.forEach((itemApareilsFilter) => {
  itemApareilsFilter.addEventListener('click', (event) => { 

    let results;
        //  console.log('click sur un apareils',event.target.textContent);
          if (!arrayTagsApareils.includes(event.target.textContent)) {
               arrayTagsApareils.push(event.target.textContent);
               console.log('click sur un apareils',arrayTagsApareils);
          }
          arrayTagsResultApareils = buildArrayTagsAppareils(arrayTagsApareils); 
         for (let index = 0; index < arrayTagsResultApareils.length; index++) {
          const element = arrayTagsResultApareils[index];
          const reg = new RegExp(`${element.trim().toLowerCase()}`);
           results = mainFilter(reg, recipes);
          // document.querySelector('.card-section').innerHTML='';
         
         }
         
         // console.log(temp);
         
         document.querySelector('.card-section').innerHTML="";
         var cmpt = 0;
         results.forEach(e =>buildCardPlats(e));
          closeTags = document.querySelectorAll(".close-tags");
          // console.log(closeTags);
          // closeTags.forEach((closeTag) =>{
          //   closeTag.addEventListener('click', (e) => {
          //   console.log('compteur:',e.target);
          //      let elementToMove  = e.target.parentNode.firstElementChild.innerHTML;
          //      let index = arrayTagsResult.indexOf(elementToMove);
          //      console.log(arrayTagsResult.indexOf(elementToMove.innerHTML));
          //      if (index > -1) {
          //       arrayTagsResult.splice(index, 1);
          //       console.log("suppression effectué avec succes !!!");
          //       buildTagsList(arrayTagsResult); 
          //     }});
          // } );
         //  document.querySelector(".ingredients").style.display = 'none';
         // document.querySelector(".ingredientss").style.display = 'block';
        })
      });


const itemUstensilesFilters = document.querySelectorAll('.ustensiles__contain__item');
var arrayTagsUstensiles = [];
var arrayTagsResultUstensiles = [];
var temp = [];

console.log(itemUstensilesFilters);
itemUstensilesFilters.forEach((itemUstensilesFilter) => {
  itemUstensilesFilter.addEventListener('click', (event) => { 

    let results;
          console.log('click sur un ustensile');
          if (!arrayTagsApareils.includes(event.target.textContent)) {
            arrayTagsApareils.push(event.target.textContent);
          }
          arrayTagsResultApareils = buildTagsListUstensiles(arrayTagsApareils); 
         for (let index = 0; index < arrayTagsResult.length; index++) {
          const element = arrayTagsResultApareils[index];
          const reg = new RegExp(`${element.trim().toLowerCase()}`);
           results = mainFilter(reg, recipes);
          // document.querySelector('.card-section').innerHTML='';
         
         }
         
         // console.log(temp);
         
         document.querySelector('.card-section').innerHTML="";
         var cmpt = 0;
         results.forEach(e =>buildCardPlats(e));
          closeTags = document.querySelectorAll(".close-tags");
          // console.log(closeTags);
          // closeTags.forEach((closeTag) =>{
          //   closeTag.addEventListener('click', (e) => {
          //   console.log('compteur:',e.target);
          //      let elementToMove  = e.target.parentNode.firstElementChild.innerHTML;
          //      let index = arrayTagsResult.indexOf(elementToMove);
          //      console.log(arrayTagsResult.indexOf(elementToMove.innerHTML));
          //      if (index > -1) {
          //       arrayTagsResult.splice(index, 1);
          //       console.log("suppression effectué avec succes !!!");
          //       buildTagsList(arrayTagsResult); 
          //     }});
          // } );
         //  document.querySelector(".ingredients").style.display = 'none';
         // document.querySelector(".ingredientss").style.display = 'block';
        })
      });

// const closeIngredient = document.querySelector('.ingredients__search__icon');

// closeIngredient.addEventListener('click',(event) => {
//   console.log('fermeture ingredient.');
//   document.querySelector(".ingredients").style.display = 'none';
//   document.querySelector(".ingredientss").style.display = 'block';
//  });


// const closeAppareils = document.querySelector('.apareils__search__icon');

// closeAppareils.addEventListener('click',(event) => {
//   // console.log(event.target.value);
//   // console.log("clique sur sur un item de filtre.");
//   console.log('fermeture');
//   document.querySelector(".apareils").style.display = 'none';
//   document.querySelector(".apareilss").style.display = 'block';
//  });


// const closeUstensiles = document.querySelector('.ustensiles__search__icon');
// closeUstensiles.addEventListener('click',(event) => {
//   // console.log(event.target.value);
//   // console.log("clique sur sur un item de filtre.");
//   console.log('fermeture ustensiles...');
//   document.querySelector(".ustensiles").style.display = 'none';
//   document.querySelector(".ustensiless").style.display = 'block';
//  });
 closeTags = document.querySelectorAll(".paragraphe-filter");
 console.log("=======>",closeTags);



