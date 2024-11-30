import React from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import { Home } from './Components/Home/Home'
import { About } from './Components/About/About'
import { Skills } from './Components/Skills/Skills'
import { Services } from './Components/Services/Services'
function App() {
  return (
    <>
      <Header />
      <div className="a">
        <Home/>
        <About/>
        <Skills/>
        <Services />
      </div>
    </>
  )
}

export default App
