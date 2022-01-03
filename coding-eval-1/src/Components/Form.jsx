import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

//  title, ingredients, time to cook, an image and instructions.

const Form = ({ form, setForm }) => {
    useEffect(() => {
        getRecepe();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, ingredients, time, image, instructions } = e.target;

        let payLoad = {
            id: uuidv4(),
            title: title.value,
            ingredients: ingredients.value,
            time: time.value,
            image: image.value,
            instructions: instructions.value,
        };

        setForm([...form, payLoad]);

        postRecipe(payLoad);
        getRecepe();
    };

    const postRecipe = (payLoad) => {
        axios
            .post('http://localhost:3001/recipe', payLoad)
            .then((response) => {
                console.log('Success');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getRecepe = async () => {
        await axios
            .get('http://localhost:3001/recipe')
            .then((response) => {
                setForm(response.data);
                // console.log(form)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                }}
                onSubmit={handleSubmit}
            >
                <input name='title' type='text' placeholder='Recipe Name' />
                <input
                    name='ingredients'
                    type='text'
                    placeholder='Ingredients'
                />
                <input name='time' type='text' placeholder='Time to cook' />
                <input name='image' type='text' placeholder='Image Link' />
                <input
                    name='instructions'
                    type='text'
                    placeholder='Instructions'
                />
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    );
};

export default Form;
