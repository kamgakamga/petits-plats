

export function mainFilter(regex, recipes){
        let searchResults = [];       
// ici on fait le filtre générale des récettes pour rechercher les recettes correspondant a l'expression entrer par l'utilisateur
recipes.filter(recipe =>{  
        if(regex.test(recipe.name.toLowerCase())) {
             searchResults.push(recipe);
        } else if(regex.test(recipe.description.toLowerCase())) {
             searchResults.push(recipe);
        }else{
        recipe.ingredients.forEach((ingredient) => {
          if (regex.test(ingredient.ingredient.toLowerCase())) {
                searchResults.push(recipe);
          }}
          );}} );
return searchResults;
};

export function mainFilter1(regex, recipes){
        let searchResults = [];       
// ici on fait le filtre générale des récettes pour rechercher les recettes correspondant a l'expression entrer par l'utilisateur
recipes.filter(recipe =>{  
        if(regex.test(recipe.name.toLowerCase())) {
        } else if(regex.test(recipe.description.toLowerCase())) {
        }else{
        recipe.ingredients.forEach((ingredient) => {
          if (regex.test(ingredient.ingredient.toLowerCase())) {
                searchResults.push(recipe);
          }});}} 
);
return searchResults;
};



export function ingredientFilter(regex, ingredients){
        let searchResults = []; 
        console.log("regex",regex);      
// ici on fait le filtre générale des récettes pour rechercher les recettes correspondant a l'expression entrer par l'utilisateur
ingredients.filter((ingredient) =>{  
          if (regex.test(ingredient)) {
                searchResults.push(ingredient);}
        });
        
return searchResults;
};


export function apareilsFilter(regex, apareils){
        let searchResults = []; 
        console.log("regex",regex);      
// ici on fait le filtre générale des récettes pour rechercher les recettes correspondant a l'expression entrer par l'utilisateur
apareils.filter((apareil) =>{  
          if (regex.test(apareil)) {
                searchResults.push(apareil);}
        });
        
return searchResults;
};


export function ustensilesFilter(regex, ustensiles){
        let searchResults = []; 
        // console.log("regex",regex);      
        ustensiles.filter((ustensile) =>{  
          if (regex.test(ustensile)) {
                searchResults.push(ingredient);}
        });
        
return searchResults;
};