import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Destination from './Pages/Destination'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/destination'element={<Destination/>} />
      </Routes>

    </div>
  )
}

export default App
