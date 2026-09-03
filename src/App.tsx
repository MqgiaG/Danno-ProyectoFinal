import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'
import ShootingConditions from './components/ShootingConditions/ShootingConditions'
import AuthorPage from './pages/AuthorPage'

import './App.css'

function HomePage() {
  return (
    <div className="app">
      <Loader />

      <Header />

      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <ShootingConditions />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre-el-autor" element={<AuthorPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
