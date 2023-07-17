import { buildSearchForm, buildCardPlat, buildCardPlats, buildDropDown, buildArrayTags, buildTagsList} from "./helper.js";



var tab_ingredients = [];
var tab_ustensiles = [];
var tab_appareils = [];
var closeTags;
recipes.forEach(elt => {
  elt.ingredients.forEach(ing =>{
    if (!tab_ingredients.includes(ing.ingredient)) {
        tab_ingredients.push(ing.ingredient);}
  })
  elt.ustensils.forEach(ust =>{
    if (!tab_ustensiles.includes(ust)) {
      tab_ustensiles.push(ust);}
  })
  if (!tab_appareils.includes(elt.appliance)) {
    tab_appareils.push(elt.appliance);}
}); 

// console.log("=============");
// console.log(tab_ingredients);
// console.log("**************");
// console.log(tab_ustensiles);
// console.log("......................");
// console.log(tab_appareils);

// Construction de la structure de base de ma page index.
const body = document.body;
const header = document.createElement("header");
const main = document.createElement("main");
             main.classList.add("container");
const footer = document.createElement("footer");

// Ajout des elements a la struture base
body.appendChild(header);
body.appendChild(main);
body.appendChild(footer)
header.classList.add("d-flex");
header.classList.add("align-items-center");
header.classList.add("justify-content-center");
// header.classList.add("h-100");
header.classList.add("mb-2","mt-2");
header.classList.add("header");
header.innerHTML=`<img src="img/15973932905401_logo.png" class="header" alt="logo les petits plats">`
const filterSection = document.createElement("section");
filterSection.classList.add("filter-section");
buildSearchForm();
main.appendChild(filterSection);
buildDropDown(tab_ingredients);
let cardSection = document.createElement("section");
main.appendChild(cardSection);
let rows = document.createElement("div");
cardSection.appendChild(rows);
rows.classList.add("row");
rows.classList.add("rowcard");

recipes.forEach((element)=>{buildCardPlats(element);});

// recipes.forEach(element => {
//        element.ingredients.forEach(i=>{console.log(i.ingredient+":"+i.quantity+" "+i.unit??i.unit)});     
// });

// buildIngredientsPlat();


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
          // console.log('tableau resultat=>',searchResults);
          for (let index = 0; index < searchResults.length; index++) {
            let elts = searchResults[index];
            for (let i = 0; i < elts.length; i++) {
             buildCardPlats(elts[i]);  
          }
     }
}else{
   //location.reload();
   for (let index = 0; index < recipes.length; index++) {
    // rows.innerHTML="";
    buildCardPlats(recipes[index]);   }
}});




// Sélectionnez l'élément de champ de recherche et la liste de résultats
const ingredientsSearch = document.querySelector('.ingredients__search__input');
//const searchResults = document.getElementById('searchResults');

// Ajoutez un écouteur d'événement pour la saisie de texte dans le champ de recherche
ingredientsSearch.addEventListener('input', function() {
    // Effacez les résultats précédents
     var ingredientsResults = [];
   //  console.log("===Filtre ingredients=======");
    // Récupérez le texte saisi dans le champ de recherche
    const ingredientSearchTerm = ingredientsSearch.value.toLowerCase();
    // Effectuez la recherche en utilisant les données appropriées (par exemple, un tableau de résultats préexistant)
    if(ingredientSearchTerm.length >= 3 ){
        ingredientsResults.push(tab_ingredients.filter(item => item.toLowerCase().includes(ingredientSearchTerm)));
       //   rows.innerHTML="";
          // console.log('tableau resultat=>',searchResults);
          // for (let index = 0; index < searchResults.length; index++) {
          //   let elts = searchResults[index];
          //   for (let i = 0; i < elts.length; i++) {
   //  console.log(ingredientsResults);
              let ul = document.querySelector(".ingredients__contain");
              ul.innerHTML ="";
            //  console.log("vidage de la liste des ingredients ok");
               buildDropDown(ingredientsResults);
             // buildIngredientsList(ingredientsResults);
            //  buildCardPlats(elts[i]); 
            //  console.log('id=>',elts[i].id);
            //  console.log('name=>',elts[i].name);}
     }else{
   //location.reload();
   //for (let index = 0; index < recipes.length; index++) {
    // rows.innerHTML="";
    // console.log("je suis entrer dans le else des filtres.");
    buildDropDown(tab_ingredients);  
   }
  });


  //Ouverture et fermeture des dropdonw des filtres
   let ingredients = document.querySelector(".ingredientss");
      ingredients.addEventListener('click',function(){
      // console.log("click sur ingredients");
      document.querySelector(".ingredientss").style.display = 'none';  
      document.querySelector(".ingredients").style.display = 'block';
     // ingredients.style.display='block';
});


const itemFilters = document.querySelectorAll('.ingredients__contain__item');
var arrayTags = [];
var arrayTagsResult = [];
// console.log(itemFilters);
itemFilters.forEach((itemFilter) => {
  itemFilter.addEventListener('click', (event) => { 
          
          if (!arrayTags.includes(event.target.textContent)) {
            arrayTags.push(event.target.textContent);
          }
          arrayTagsResult = buildArrayTags(arrayTags); 
        
         for (let index = 0; index < arrayTagsResult.length; index++) {
          const element = arrayTagsResult[index];
          rows.innerHTML="";
          recipes.filter((item)=>item.name.toLowerCase().includes(element.toLowerCase()) 
          || item.description.toLowerCase().includes(element.toLowerCase())).forEach(e =>buildCardPlats(e))
         }
      
          closeTags = document.querySelectorAll(".close-tags");
          
          closeTags.forEach((closeTag) =>{
            closeTag.addEventListener('click', (e) => {
               let elementToMove  = e.target.parentNode.firstElementChild.innerHTML;
              let index = arrayTagsResult.indexOf(elementToMove);
               console.log(arrayTagsResult.indexOf(elementToMove.innerHTML));
               if (index > -1) {
                arrayTagsResult.splice(index, 1);
                console.log("suppression effectué avec succes !!!");
              }
              arrayTagsResult = buildArrayTags(arrayTagsResult); 
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
  document.querySelector(".ingredients").style.display = 'none';
  document.querySelector(".ingredientss").style.display = 'block';
 });
 closeTags = document.querySelectorAll(".paragraphe-filter");
 console.log("=======>",closeTags);