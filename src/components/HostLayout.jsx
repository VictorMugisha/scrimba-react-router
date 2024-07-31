import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function HostLayout() {
    return (
        <>
            <nav className="host-nav">
                <Link to="/hosts">Dashboard</Link>
                <Link to="/hosts/income">Income</Link>
                <Link to="/hosts/reviews">Reviews</Link>
            </nav>
            <Outlet />
        </>
    )
}