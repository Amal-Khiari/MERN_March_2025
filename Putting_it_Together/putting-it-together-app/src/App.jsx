import { useState } from 'react'
import './App.css'
import PersonCard from './components/PersonCard';


function App() {
 

  return (

     <div className="App">
      <PersonCard firstName="John" lastName="Doe" age={28} hairColor="Black" />
      <PersonCard firstName="Jane" lastName="Smith" age={34} hairColor="Brown" />
    </div>

  )
}

export default App