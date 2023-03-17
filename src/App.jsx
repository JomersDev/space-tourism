import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Destination from './Pages/Destination'
import Crew from './Pages/Crew'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
      </Routes>

    </div>
  )
}

export default App
