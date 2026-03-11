function addRecipe(event) {
    event.preventDefault();
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        alert('אינך מחובר');
        window.location.href = 'index.html';
        return;
    }
    
    const name = document.getElementById('recipeName').value.trim();
    const category = document.getElementById('recipeCategory').value;
    const image = document.getElementById('recipeImage').value.trim();
    const ingredientsText = document.getElementById('recipeIngredients').value.trim();
    const instructionsText = document.getElementById('recipeInstructions').value.trim();
    
    const ingredients = ingredientsText.split('\n').filter(line => line.trim() !== '');
    const instructions = instructionsText.split('\n').filter(line => line.trim() !== '');
    
    if (ingredients.length === 0 || instructions.length === 0) {
        alert('נא למלא לפחות חומר אחד ושלב הכנה אחד');
        return;
    }
    
    const customRecipes = JSON.parse(localStorage.getItem(`customRecipes_${currentUser.email}`)) || [];
    const newId = Date.now();
    
    const newRecipe = {
        id: newId,
        name: name,
        category: category,
        image: image
    };
    
    const newRecipeDetails = {
        id: newId,
        name: name,
        image: image,
        ingredients: ingredients,
        instructions: instructions
    };
    
    customRecipes.push({ catalog: newRecipe, details: newRecipeDetails });
    localStorage.setItem(`customRecipes_${currentUser.email}`, JSON.stringify(customRecipes));
    
    alert('המתכון נוסף בהצלחה!');
    window.location.href = 'catalog.html';
}
