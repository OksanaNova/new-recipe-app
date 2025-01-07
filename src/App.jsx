import { useState, useEffect } from 'react'
import myVideo from './food.mp4'
import './App.css'
import Benefits from './Benefits';
import RecipeResults from './RecipeResults';

function App() {

  const MY_ID = '28795faa';
  const MY_KEY = 'b0f423e5e26748cb2364b8517419fb1e';

  const [userSearch, setUserSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("potato");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setSearchResult(data.hits)
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setUserSearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(userSearch);
  }

  return (
    <div>
      <div className='header'>
          <video autoPlay muted loop>
            <source src={myVideo} type='video/mp4'/>
          </video>

          <div className='header_content'>
            <h1>Recipe Search</h1>
            <p className='header'>Discover mouthwatering recipes with just a few clicks</p>
          </div>
      </div>

      <Benefits />

      <div className='search_container'>
        <form onSubmit={finalSearch}>
          <input onChange={myRecipeSearch} value={userSearch} placeholder='Type your ingridients..'/>
          <button className='btnSearch' onClick={finalSearch}>SEARCH</button>
        </form>
      </div>

      <RecipeResults myRecipeSearchResults={searchResult}/>

    </div>
  )
}

export default App
