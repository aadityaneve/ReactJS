import React from 'react';

//  title, ingredients, time to cook, an image and instructions.

const Recipe = ({ recipe, setRecipeInfo }) => {
    const handleRecipe = () => {
        setRecipeInfo(recipe);
    };

    return (
        <div
            style={{
                width: '150px',
                border: '1px solid blue',
                cursor: 'pointer',
            }}
            onClick={() => handleRecipe(recipe)}
        >
            <h2>{recipe.title}</h2>
            <p>{recipe.time} min</p>
        </div>
    );
};

export default Recipe;
