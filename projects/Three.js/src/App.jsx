import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from "./components/Landingpage";
import Marque from './components/Marque'
import About from './components/About';
import Eyes from './components/Eyes';
const App = () => {
  return (
    <div className="w-full min-h-screen rounded-tl-3xl bg-zinc-900 text-white">
     <Navbar></Navbar>
     <Landingpage></Landingpage>
     <Marque/>
     <About/>
     <Eyes/>
    </div>
   
  )
}

export default App