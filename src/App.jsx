import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import './styles/components.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <Layout darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/experiencia" element={<Experience />} />
        <Route path="/habilidades" element={<Skills />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/certificacoes" element={<Certifications />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
