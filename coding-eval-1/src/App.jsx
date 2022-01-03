import Rect, { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form';
import Recipe from './Components/Recipe';
import RecipeInfo from './Components/RecipeInfo';

function App() {
    const [form, setForm] = useState([]);
    const [recipeInfo, setRecipeInfo] = useState({});
    const [state, setState] = useState(true);

    const handleMinimumTime = () => {
        setForm((prevState) => prevState.sort((a, b) => a.time - b.time));
        setState((prevState) => !prevState);
    };

    const handleMaximumTime = () => {
        setForm((prevState) => prevState.sort((a, b) => b.time - a.time));
        setState((prevState) => !prevState);
    };

    return (
        <div className='App'>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    width: '70%',
                    height: '400px',
                }}
            >
                <Form form={form} setForm={setForm} />
                <div style={{ height: '400px', overflow: 'scroll' }}>
                    <button onClick={handleMinimumTime}>Minimun Time</button>
                    <button onClick={handleMaximumTime}>Maximum Time</button>
                    {state === true
                        ? form?.map((recipe) => {
                              return (
                                  <Recipe
                                      key={recipe.id}
                                      recipe={recipe}
                                      setRecipeInfo={setRecipeInfo}
                                  />
                              );
                          })
                        : form?.map((recipe) => {
                              return (
                                  <Recipe
                                      key={recipe.id}
                                      recipe={recipe}
                                      setRecipeInfo={setRecipeInfo}
                                  />
                              );
                          })}
                </div>
            </div>
            <div style={{ width: '100%', margin: 'auto' }}>
                {recipeInfo ? <RecipeInfo recipeInfo={recipeInfo} /> : null}
            </div>
        </div>
    );
}

export default App;
