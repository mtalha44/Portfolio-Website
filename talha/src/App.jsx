import React from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import { Home } from './Components/Home/Home'
import { About } from './Components/About/About'
function App() {
  return (
    <>
      <Header />
      <Home/>
      <About/>
    </>
  )
}

export default App
