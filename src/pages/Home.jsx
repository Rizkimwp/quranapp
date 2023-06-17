import React from 'react'
import Navigation from '../components/Navigation'
import "../css/Home.css"
import ListSurat from '../components/ListSurat'
import Intro from '../components/Intro'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Intro />
        <ListSurat />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
