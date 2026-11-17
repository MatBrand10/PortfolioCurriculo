import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Experiência', to: '/experiencia' },
  { label: 'Habilidades', to: '/habilidades' },
  { label: 'Projetos', to: '/projetos' },
  { label: 'Certificações', to: '/certificacoes' },
  { label: 'Contato', to: '/contato' }
]

export default function Header({ darkMode, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" to="/" aria-label="Página inicial do portfólio">
          <img src="/profile.jpg" alt="" />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? 'Fechar' : 'Menu'}
        </button>

        <nav
          id="main-navigation"
          className={`site-nav ${isMenuOpen ? 'open' : ''}`}
          aria-label="Navegação principal"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={darkMode ? 'Ativar tema claro' : 'Ativar tema escuro'}
          >
            {darkMode ? 'Claro' : 'Escuro'}
          </button>
        </nav>
      </div>
    </header>
  )
}
