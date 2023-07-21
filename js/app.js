import { buildSearchForm, buildCardPlat,
         buildCardPlats, buildDropDown,
         buildArrayTags, buildTagsList,
         cardPlat, getAllIngredients,
         getAllUstensils,getAllAppareils,
         buildPartIngredients,buildFilterAppareils,
         buildPartUstensiles,buildFilterUstensiles} from "./helper.js";



var tab_ingredients = [];
var tab_ustensiles = [];
var tab_appareils = [];
var closeTags;

tab_ingredients = getAllIngredients(recipes);
tab_ustensiles  = getAllUstensils(recipes);
tab_appareils   = getAllAppareils(recipes);

// Construction de la structure de base de ma page index.
const body = document.body;
const header = document.createElement("header");
const main = document.createElement("main");
             main.classList.add("container");
const footer = document.createElement("footer");

// Ajout des elements a la struture base
body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);
header.classList.add("d-flex");
header.classList.add("align-items-center");
header.classList.add("justify-content-center");
// header.classList.add("h-100");
header.classList.add("mb-2","mt-2");
header.classList.add("header");
header.innerHTML=`<img src="img/15973932905401_logo.png" class="header" alt="logo les petits plats">`
const searchSection = document.createElement("section");
searchSection.classList.add("search-section");
main.appendChild(searchSection);
buildSearchForm();


const filterSection = document.createElement("section");
filterSection.classList.add("filter-section");
main.appendChild(filterSection);
document.querySelector(".filter-section").style.display = 'flex';
buildDropDown(tab_ingredients);
buildFilterAppareils(tab_appareils);
buildFilterUstensiles(tab_ustensiles);


let cardSection = document.createElement("section");
main.appendChild(cardSection);
let rows = document.createElement("div");
cardSection.appendChild(rows);
rows.classList.add("row","rowcard");
cardPlat(recipes);

// Sélectionnez l'élément de champ de recherche et la liste de résultats
const globalSearch = document.querySelector('.input-search');
//const searchResults = document.getElementById('searchResults');

// Ajoutez un écouteur d'événement pour la saisie de texte dans le champ de recherche
globalSearch.addEventListener('input', function() {
    // Effacez les résultats précédents
     var searchResults = [];

    // Récupérez le texte saisi dans le champ de recherche
    const searchTerm = globalSearch.value.toLowerCase();

    // Effectuez la recherche en utilisant les données appropriées (par exemple, un tableau de résultats préexistant)
    if(searchTerm.length >= 3 ){
        // console.log(searchTerm);
          searchResults.push(recipes.filter(item =>
             item.name.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm)));
             rows.innerHTML="";
            searchResults.forEach(index =>  cardPlat(index));  
          }
     else{
      cardPlat(recipes);
}});




// Sélectionnez l'élément de champ de recherche et la liste de résultats
const ingredientsSearch = document.querySelector('.ingredients__search__input');
//const searchResults = document.getElementById('searchResults');

// Ajoutez un écouteur d'événement pour la saisie de texte dans le champ de recherche
ingredientsSearch.addEventListener('input', function() {
    // Effacez les résultats précédents
     var ingredientsResults = [];
    // Récupérez le texte saisi dans le champ de recherche
    const ingredientSearchTerm = ingredientsSearch.value.toLowerCase();
    // Effectuez la recherche en utilisant les données appropriées (par exemple, un tableau de résultats préexistant)
    if(ingredientSearchTerm.length >= 3 ){

        ingredientsResults.push(tab_ingredients.filter(item => item.toLowerCase().includes(ingredientSearchTerm)));
        let response = [];   
      ingredientsResults[0].forEach(res  => {
      response = recipes.filter((item)=>item.name.toLowerCase().includes(res.toLowerCase()) 
        || item.description.toLowerCase().includes(res.toLowerCase()))
     });

      console.log("data:",ingredientsResults);
         rows.innerHTML="";
         document.querySelector(".ingredients__contain").innerHTML ='';
         buildPartIngredients(ingredientsResults[0]);
         response.forEach(e =>buildCardPlats(e));  
       //  let ul = document.querySelector(".ingredients__contain");
     }else{
      buildPartIngredients(tab_ingredients);
     }
  });


  //Ouverture et fermeture des dropdonw des filtres: ingredients
   let ingredients = document.querySelector(".ingredientss");
      ingredients.addEventListener('click',function(){
        console.log("Ouverture ingredient");
      document.querySelector(".ingredientss").style.display = 'none';  
      document.querySelector(".ingredients").style.display = 'inline-block';
});

  //Ouverture et fermeture des dropdonw des filtres: apareils
   let apareils = document.querySelector(".apareilss");
   console.log("Ouverture apareils");
   apareils.addEventListener('click',function(){
      document.querySelector(".apareilss").style.display = 'none';  
      document.querySelector(".apareils").style.display = 'inline-block';
});

  //Ouverture et fermeture des dropdonw des filtres: ustensiles
   let ustensiles = document.querySelector(".ustensiles");
   ustensiles.addEventListener('click',function(){
      console.log("Ouverture ustensiles");
      document.querySelector(".ustensiless").style.display = 'none';  
      document.querySelector(".ustensiles").style.display = 'inline-block';
});


const itemFilters = document.querySelectorAll('.ingredients__contain__item');
var arrayTags = [];
var arrayTagsResult = [];
var temp = [];
// console.log(itemFilters);
itemFilters.forEach((itemFilter) => {
  itemFilter.addEventListener('click', (event) => { 
          
          if (!arrayTags.includes(event.target.textContent)) {
            arrayTags.push(event.target.textContent);
          }
          arrayTagsResult = buildArrayTags(arrayTags); 
        
         for (let index = 0; index < arrayTagsResult.length; index++) {
          const element = arrayTagsResult[index];
          // rows.innerHTML="";
          temp = recipes.filter((item)=>item.name.toLowerCase().includes(element.toLowerCase()) 
          || item.description.toLowerCase().includes(element.toLowerCase()));
         }
         
         console.log(temp);
         rows.innerHTML="";
         temp.forEach(e =>buildCardPlats(e));
          closeTags = document.querySelectorAll(".close-tags");
          
          closeTags.forEach((closeTag) =>{
            closeTag.addEventListener('click', (e) => {
               let elementToMove  = e.target.parentNode.firstElementChild.innerHTML;
              let index = arrayTagsResult.indexOf(elementToMove);
               console.log(arrayTagsResult.indexOf(elementToMove.innerHTML));
               if (index > -1) {
                arrayTagsResult.splice(index, 1);
                console.log("suppression effectué avec succes !!!");
                buildTagsList(arrayTagsResult); }
              });
          } );
          document.querySelector(".ingredients").style.display = 'none';
          document.querySelector(".ingredientss").style.display = 'block';
        
        })
      });

const closeIngredient = document.querySelector('.ingredients__search__icon');

closeIngredient.addEventListener('click',(event) => {
  // console.log(event.target.value);
  // console.log("clique sur sur un item de filtre.");
  console.log('fermeture');
  document.querySelector(".ingredients").style.display = 'none';
  document.querySelector(".ingredientss").style.display = 'block';
 });


const closeAppareils = document.querySelector('.apareils__search__icon');

closeIngredient.addEventListener('click',(event) => {
  // console.log(event.target.value);
  // console.log("clique sur sur un item de filtre.");
  console.log('fermeture');
  document.querySelector(".ingredients").style.display = 'none';
  document.querySelector(".ingredientss").style.display = 'block';
 });
const closeUstensils = document.querySelector('.ustensiles__search__icon');

closeIngredient.addEventListener('click',(event) => {
  // console.log(event.target.value);
  // console.log("clique sur sur un item de filtre.");
  console.log('fermeture');
  document.querySelector(".ingredients").style.display = 'none';
  document.querySelector(".ingredientss").style.display = 'block';
 });
 closeTags = document.querySelectorAll(".paragraphe-filter");
 console.log("=======>",closeTags);