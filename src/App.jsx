import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/vans/Vans'
import VanDetail from "./pages/vans/VanDetail"
import Layout from './components/Layout'
import Dashboard from './pages/hosts/Dashboard'
import Income from './pages/hosts/Income'
import Reviews from './pages/hosts/Reviews'
import HostLayout from './components/HostLayout'

import "./App.css"
import "./server"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="hosts" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App