function RecipeResults({myRecipeSearchResults}) {
    return (
        <div>
            {myRecipeSearchResults.map((item, index) => {
                const calories = item.recipe.calories;
                const label = item.recipe.label;
                const image = item.recipe.image;
                const ingredients = item.recipe.ingredientLines;
                const cuisineType = item.recipe.cuisineType;
                const url = item.recipe.url;
                const protein = item.recipe.totalNutrients.PROCNT.quantity;
                const fat = item.recipe.totalNutrients.FAT.quantity;
                const carbs = item.recipe.totalNutrients.CHOCDF.quantity;
                return (
                    <div key={index} className="recipe_container">
                        <div className="recipe_container_content">
                            <h3>{label}, {cuisineType} cuisine</h3>

                            <h5>{calories.toFixed()} calories</h5>

                            <div className="nutrients">
                                <p className="nutrient_item one">Protein: {protein.toFixed()}g</p>
                                <p className="nutrient_item one">Fat: {fat.toFixed()}g</p>
                                <p className="one">Carbohydrates: {carbs.toFixed()}g</p>
                            </div>

                            <ul>
                                {ingredients.map((item, index) => (
                                        <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <button className="btnViewRecipe">
                              <a href={url}>View Recipe</a>
                            </button>

                        </div>

                        <div className="recipe_container_image">
                            <img className="food_pic" src={image} alt="food"/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default RecipeResults