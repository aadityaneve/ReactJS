import React from 'react';

const RecipeInfo = ({ recipeInfo }) => {
    return (
        <div style={{ width: '150px', }}>
            {
                <img
                    style={{ width: '400px' }}
                    src={recipeInfo.image}
                    alt={recipeInfo.title}
                />
            }
            <h2>{recipeInfo.title}</h2>
            {<p>{recipeInfo.ingredients}</p>}
            <p>{recipeInfo.time} min</p>
            {<p>{recipeInfo.instructions}</p>}
        </div>
    );
};

export default RecipeInfo;
