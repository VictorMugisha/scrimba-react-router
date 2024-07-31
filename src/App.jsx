import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
    </div>
  )
}

export default App