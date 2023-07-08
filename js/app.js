import { buildSearchForm,buildCardPlat,buildCardPlats,buildDropDown } from "./helper.js";


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
header.classList.add("h-100");
// header.classList.add("border");
header.classList.add("mb-2");
header.classList.add("mt-2");
header.classList.add("header");
header.innerHTML=`<img src="img/15973932905401_logo.png" class="header" alt="logo les petits plats">`
buildSearchForm();
buildDropDown();
let cardSection = document.createElement("section");
main.appendChild(cardSection);
let rows = document.createElement("div");
cardSection.appendChild(rows);
rows.classList.add("row");
rows.classList.add("rowcard");
for (let index = 0; index < recipes.length; index++) {
        buildCardPlats(recipes[index]);   
}


// recipes.forEach(element => {
//        element.ingredients.forEach(i=>{console.log(i.ingredient+":"+i.quantity+" "+i.unit??i.unit)});     
// });

// buildIngredientsPlat();


// Sélectionnez l'élément de champ de recherche et la liste de résultats
const searchInput = document.querySelector('.input-search');
//const searchResults = document.getElementById('searchResults');

// Ajoutez un écouteur d'événement pour la saisie de texte dans le champ de recherche
searchInput.addEventListener('input', function() {
    // Effacez les résultats précédents
     let searchResults = [];

    // Récupérez le texte saisi dans le champ de recherche
    const searchTerm = searchInput.value.toLowerCase();

    // Effectuez la recherche en utilisant les données appropriées (par exemple, un tableau de résultats préexistant)
    if(searchInput.length >= 3 ){
         searchResults.push(recipes.filter(item =>item.name.includes(searchTerm)));
}
rows.innerHTML="";

for (let i = 0; i < searchResults.length; i++) {
        buildCardPlats(searchResults[i]);}});