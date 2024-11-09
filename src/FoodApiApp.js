import React, { useState, useEffect } from 'react';

const FoodApiApp = () => {
    const APP_ID = "e213da0f";
    const APP_KEY = "79afa1eeca0aa7d404a132a532ce6afa";
    const [query, setQuery] = useState('veg');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        GetRecipes();
    }, [query]); // Added query as a dependency to refetch when query changes

    const GetRecipes = async () => {
        try {
            const response = await fetch(
                `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
            );
            const data = await response.json();
            setRecipes(data.hits);
            console.log(data);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    const handleQueries = (e) => {
        setQuery(e.target.value);
    };

    const AllRecipes = ({ title, calories, image, ingredients }) => {
        return (
            <div>
                <h2>{title}</h2>
                <p>Calories: {calories}</p>
                <ol>
                    {ingredients && ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.text}</li>
                    ))}
                </ol>
                <img src={image} alt={title} />
            </div>
        );
    };

    return (
        <div>
            <input type="search" placeholder="search here" onChange={handleQueries} />
            <div className="recipes">
                {recipes.map((recipe, index) => (
                    <AllRecipes
                        key={index}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </div>
    );
};

export default FoodApiApp;
