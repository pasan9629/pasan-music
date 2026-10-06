import { PlayerProvider } from './components/Player'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Sound from './components/Sound'
import Contact from './components/Contact'
import Socials from './components/Socials'
import Footer from './components/Footer'

export default function App() {
  return (
    <PlayerProvider>
      <Nav />
      <main>
        <Hero /><Work /><Services /><About /><Sound /><Contact /><Socials />
      </main>
      <Footer />
    </PlayerProvider>
  )
}
