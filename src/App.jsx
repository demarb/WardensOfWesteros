import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Home from './pages/Home'
import Characters from './pages/Characters'
import { CharactersRoutes } from './routes/CharactersRoutes'



function App() {
  

  return (
    <>
      {/* <Home/> */}
      {/* <Characters /> */}

      
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/characters" element={<Characters/>}></Route> */}
        <Route path="/characters/*" element={<CharactersRoutes/>} ></Route>
      </Routes>

    </>
  )
}

export default App
