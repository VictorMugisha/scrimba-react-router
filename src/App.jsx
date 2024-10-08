import React from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader } from './pages/vans/Vans'
import VanDetail, { loader as vanDetailLoader } from "./pages/vans/VanDetail"
import Dashboard from './pages/hosts/Dashboard'
import Income from './pages/hosts/Income'
import Reviews from './pages/hosts/Reviews'
import HostVans, { loader as hostVansLoader } from './pages/hosts/HostsVans'
import HostVanDetail, { loader as hostVanDetailLoader } from './pages/hosts/HostsVanDetail'
import HostVanInfo from './pages/hosts/HostVanInfo'
import HostVanPricing from './pages/hosts/HostVanPricing'
import HostVanPhotos from './pages/hosts/HostVanPhotos'
import NotFound from './pages/NotFound'
// import Login from './pages/Login'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import Error from './components/Error'

import "./App.css"
import "./server"
import { requireAuth } from './utils'

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
    <Route
      path="vans/:id"
      element={<VanDetail />}
      loader={vanDetailLoader}
    />

    <Route path="hosts" element={<HostLayout />}>
      <Route
        index
        element={<Dashboard />}
        loader={async () => await requireAuth()}
      />
      <Route
        path="income"
        element={<Income />}
        loader={async () => await requireAuth()}
      />
      <Route
        path="reviews"
        element={<Reviews />}
        loader={async () => await requireAuth()}
      />
      <Route
        path="vans"
        element={<HostVans />}
        loader={hostVansLoader}
      />
      <Route
        path="vans/:id"
        element={<HostVanDetail />}
        loader={hostVanDetailLoader}
      >
        <Route
          index
          element={<HostVanInfo />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="pricing"
          element={<HostVanPricing />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="photos"
          element={<HostVanPhotos />}
          loader={async () => await requireAuth()}
        />
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