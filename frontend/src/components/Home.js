import React, { useState, useEffect } from 'react';
import axios from "axios"
import Recipe from './Recipe';
// import { Redirect } from 'react-router-dom';

export default function Home (props){
  
  const apiKey = "5be7b142c0faea901956bd642929df69";
  const apiId = "1ba68463";

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const mealUrl = `https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}&from=0&to=6&calories=591-722&health=alcohol-free`;


  useEffect(() => {
   getRecipe()
  }, [query])


  const getRecipe = () => {
      axios.get(mealUrl)
    //   .then(console.log)
        .then(response => setRecipe(response.data.hits))
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
      <form className="search-form" onSubmit={updateChange}>
          <h3>Search your meal</h3>
        <input type="text" value={search} onChange={getSearch}/>
        <button type="submit" onClick={() => this.props.history.push('/login')}>Search</button>
      </form>
      <button className="go-home-button">Go To Main Page</button>
      <Recipe recipes={recipe}/>
    </div>
  );
 
}
