import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../routers/Routers'
import { BrowserRouter as Router } from 'react-router-dom'
function Layout() {
    return (
        <Router>
            <Header />
            <div className="pt-24 min-h-[70vh]">
                <Routers />
            </div>
            <Footer />
        </Router>
    )
}

export default Layout
