import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, {loader as vansLoader} from './pages/vans/Vans'
import VanDetail from "./pages/vans/VanDetail"
import Dashboard from './pages/hosts/Dashboard'
import Income from './pages/hosts/Income'
import Reviews from './pages/hosts/Reviews'
import HostVans from './pages/hosts/HostsVans'
import HostVanDetail from './pages/hosts/HostsVanDetail'
import HostVanInfo from './pages/hosts/HostVanInfo'
import HostVanPricing from './pages/hosts/HostVanPricing'
import HostVanPhotos from './pages/hosts/HostVanPhotos'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import Error from './components/Error'

import "./App.css"
import "./server"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="login"
      element={<Login />}
    />
    <Route
      path="vans"
      element={<Vans />}
      errorElement={<Error />}
      loader={vansLoader}
    />
    <Route path="vans/:id" element={<VanDetail />} />

    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="vans" element={<HostVans />} />
      <Route path="vans/:id" element={<HostVanDetail />}>
        <Route index element={<HostVanInfo />} />
        <Route path="pricing" element={<HostVanPricing />} />
        <Route path="photos" element={<HostVanPhotos />} />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App