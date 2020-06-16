import React, { useState, useEffect } from 'react';
import axios from "axios"
import RecipeList from './RecipeList';
// import { Redirect } from 'react-router-dom';

export default function Home ({props}){
  
  // const apiKey = "5be7b142c0faea901956bd642929df69";
  // const apiId = "1ba68463";

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const mealUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;


  useEffect(() => {
   getRecipe()
  }, [query])


  const getRecipe = () => {
      axios.get(mealUrl)
      // .then(response => console.log(response.data.meals))
        .then(response => setRecipe(response.data.meals))
  }

  const getSearch = (event) => {
    setSearch(event.target.value)
  }

  const updateChange = (event) => {
    event.preventDefault();
    setQuery(search)
  }

  
  return ( 
    <div className="Home">
      <div className="meals-list">
        <form className="search-form" onSubmit={updateChange}>
            <h3>Search your meal</h3>
            <input type="text" value={search} onChange={getSearch}/>
            <button type="submit" >Search</button>
        </form>
        <button className="go-home-button">Go To Main Page</button>
        <RecipeList recipes={recipe} />
      </div>
      <div class="cocktails-list">
        {/* <form className="search-form" onSubmit={updateChange}>
            <h3>Search your meal</h3>
            <input type="text" value={search} onChange={getSearch}/>
            <button type="submit" onClick={() => this.props.history.push('/login')}>Search</button>
        </form>
        <button className="go-home-button">Go To Main Page</button>
        <RecipeList recipes={recipe} /> */}
      </div>
    </div>
  );
 
}
