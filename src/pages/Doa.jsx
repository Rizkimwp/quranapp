import React from 'react'
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import DoaList from '../components/DoaList'
const Doa = () => {
    return (
        <div>
            <header>
                <nav>
                    <Navigation />
                </nav>
            </header>
            <main>
                <DoaList />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Doa
