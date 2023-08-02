

export function mainFilter(regex, recipes){
        let searchResults = [];       
// ici on fait le filtre générale des récettes pour rechercher les recettes correspondant a l'expression entrer par l'utilisateur
recipes.filter(recipe =>{  
        if(regex.test(recipe.name)) {
             searchResults.push(recipe);
             console.log("toto");
        } else if(regex.test(recipe.description)) {
             searchResults.push(recipe);
             console.log("tata");
        }else{
        recipe.ingredients.forEach((ingredient) => {
          if (regex.test(ingredient)) {
                searchResults.push(recipe);
                console.log("tato");
          }}
          );}} 
);
return searchResults;
};



export function ingredientFilter(regex, ingredients){
        let searchResults = [];       
// ici on fait le filtre générale des récettes pour rechercher les recettes correspondant a l'expression entrer par l'utilisateur
ingredients.filter((ingredient) =>{  
       
          if (regex.test(ingredient)) {
                searchResults.push(recipe);}
        });
        
return searchResults;
};