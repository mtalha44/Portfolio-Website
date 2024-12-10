import React from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import { Home } from './Components/Home/Home'
import { About } from './Components/About/About'
import { Skills } from './Components/Skills/Skills'
import { Services } from './Components/Services/Services'
import { Qualification } from './Components/Qualification/Qualification'
import { Testimonials } from './Components/Testimonials/Testimonials'
function App() {
  return (
    <>
      <Header />
      <div>
        <Home/>
        <About/>
        <Skills/>
        <Services />
        <Qualification />
        <Testimonials/>
      </div>
    </>
  )
}

export default App
