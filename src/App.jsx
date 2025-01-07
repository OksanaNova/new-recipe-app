import { useState, useEffect } from 'react'
import myVideo from './food.mp4'
import './App.css'
import Benefits from './Benefits';
import RecipeResults from './RecipeResults';


    // 'https://api.edamam.com/api/recipes/v2?type=public&q=salmon&app_id=28795faa&app_key=b0f423e5e26748cb2364b8517419fb1e'

function App() {

  const MY_ID = '28795faa';
  const MY_KEY = 'b0f423e5e26748cb2364b8517419fb1e';

  const [userSearch, setUserSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);


  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=kale&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      console.log(data.hits)
      setSearchResult(data.hits)
    }
    getRecipe()
  }, [])

  const myRecipeSearch = (e) => {
    // console.log(e.target.value)
    setUserSearch(e.target.value)
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
            <button className='btnStart'>Get Cooking!</button>
          </div>

      </div>

      <Benefits />

      <div className='search_container'>
        <form>
          <input onChange={myRecipeSearch} value={userSearch} placeholder='Type your ingridients..'/>
          <button className='btnSearch'>SEARCH</button>
        </form>
      </div>

      <RecipeResults myRecipeSearchResults={searchResult}/>







    </div>
  )
}

export default App
