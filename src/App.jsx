import { useState, useEffect } from 'react'
import myVideo from './food.mp4'
import './App.css'
import Benefits from './Benefits';


    // 'https://api.edamam.com/api/recipes/v2?type=public&q=salmon&app_id=28795faa&app_key=b0f423e5e26748cb2364b8517419fb1e'

function App() {

  const MY_ID = '28795faa'
  const MY_KEY = 'b0f423e5e26748cb2364b8517419fb1e'

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=salmon&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      console.log(data.hits)
    }
    getRecipe()
  }, [])


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
          <input placeholder='Type your ingridients..'/>
          <button>SEARCH</button>
        </form>
      </div>







    </div>
  )
}

export default App
