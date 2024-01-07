import React from 'react'
import Home from './components/Home'
import Entry from './components/Entry'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Chat from './components/Chat'
import Navbar from './components/Navbar'
const App = () => {
  return (
   <Router>
     <div className='w-full h-full flex flex-col items-end justify-end'>
      <Navbar/>
     <Routes>
     
     <Route path='/' element={ <Entry/>}/>
     <Route path='/chat' element={ <Chat/>}/>
     </Routes>
    <Home/>
    </div>
   </Router>
  )
}

export default App
