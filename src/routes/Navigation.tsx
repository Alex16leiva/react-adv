import { Suspense } from "react"
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'
import { routes } from "./routes"

import logo from '../logo.svg'




export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt='React Logo' />
                        <ul>
                            {
                                routes.map(route => (
                                    <li key={route.to}>
                                        <NavLink to={route.to}
                                            className={({ isActive }) => isActive ? 'nav-active' : ''}
                                        >
                                            {route.name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(route => (
                                <Route path={route.path} element={<route.component />} />
                            ))
                        }
                        <Route path='/*' element={<Navigate to={routes[0].to} />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}
