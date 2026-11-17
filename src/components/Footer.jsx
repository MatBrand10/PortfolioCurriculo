import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div>
          <p className="footer-brand">Matheus Romano Brandão</p>
          <p className="footer-copy">Desenvolvedor em formação | Tecnologia da Informação</p>
        </div>

        <div className="footer-links">
          <Link to="/sobre">Sobre</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/contato">Contato</Link>
        </div>
      </div>
    </footer>
  )
}
