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
                return (
                    <div key={index}>
                        <div>
                            <h3>{label}, {cuisineType} cuisine</h3>
                            <h5>{calories.toFixed()} calories</h5>
                            <ul>
                                {ingredients.map((item, index) => (
                                        <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p>
                              <a href={url}>View Recipe</a>
                            </p>

                        </div>

                        <div>
                            <img src={image} alt="food"/>
                        </div>


                    </div>
                )
            })}

        </div>
    )
}

export default RecipeResults