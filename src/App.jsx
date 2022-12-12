import { useState } from 'react'
import './App.css'
import { Navbar , Brand , Cta} from './Components'
import { Footer, Blog , Possibility , Features , WhatGPT3, Header} from './Containers'

function App() {


  return (
  
    <div className="App">
    
    <div className='gradient__bg'>
      <Navbar/>
      <Header/>
    </div>
   <Brand/>
   <WhatGPT3/>
   <Features/>
   <Possibility />
   <Cta />
   <Blog />
   <Footer />
  </div>
 
  )
}

export default App
