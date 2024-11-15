import React from 'react'
import './App.css'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
function App() {
  return (
    <>
    <Header />
    <div className="main">
      <Home/>
    </div>
    </>
  )
}

export default App
