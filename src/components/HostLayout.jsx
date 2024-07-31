import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <nav className="host-nav">
                <NavLink
                    to="/hosts"
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/hosts/income"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Income
                </NavLink>

                <NavLink
                    to="/hosts/vans"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>

                <NavLink
                    to="/hosts/reviews"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Reviews
                </NavLink>

            </nav>
            <Outlet />
        </>
    )
}