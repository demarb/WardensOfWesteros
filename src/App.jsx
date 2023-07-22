import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import { CharactersRoutes } from './routes/CharactersRoutes'
import CharacterContext from './components/CharacterContext'
import NotFound from './pages/NotFound'

function App() {

  CharacterContext
  //States
  const [charactersData, setCharactersData] = useState([])

  //Effects
  useEffect(()=>{
      const apiCall = async()=>{
          const res = await fetch("https://thronesapi.com/api/v2/Characters")
          const res_json = await res.json()
          setCharactersData(res_json)
          console.log(charactersData)
      }

      apiCall();
      
  }, [])



  return (
    <>
      <CharacterContext.Provider value={{charactersData, setCharactersData}}>

      
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/characters/*" element={<CharactersRoutes/>} ></Route>
        <Route path="*" element={<NotFound/>} ></Route>
      </Routes>

      </CharacterContext.Provider>
    </>
  )
}

export default App
