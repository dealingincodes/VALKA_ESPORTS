import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Teams from './components/Teams'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen section-gradient">
      <Navbar />
      <Hero />
      <Highlights />
      <Teams />
      <Footer />
    </main>
  )
}
