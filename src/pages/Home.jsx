import { Link } from 'react-router-dom'

const quickSkills = ['React', 'JavaScript', 'Node.js', 'SQL', 'Git', 'AWS']

const focusAreas = [
  'Suporte a usuários',
  'Testes e manutenção de sistemas',
  'Relatórios e melhorias de processos',
  'Desenvolvimento e inovação'
]

export default function Home() {
  return (
    <section className="hero-section page-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Desenvolvedor em formação</span>
          <h1>Matheus Romano Brandão</h1>
          <p className="lead">Transformando conhecimento, experiência e tecnologia em soluções.</p>
          <p className="intro-text">
            Profissional com formação em Administração, experiência prática em Tecnologia da
            Informação e interesse crescente em desenvolvimento de software, sistemas e inovação.
          </p>

          <div className="hero-actions">
            <Link to="/projetos" className="primary-button">
              Conheça meus projetos
            </Link>
            <Link to="/contato" className="secondary-button">
              Entre em contato
            </Link>
          </div>

          <div className="hero-links">
            <a href="https://github.com/MatBrand10" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="mailto:matheusromano76@gmail.com">E-mail</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Avatar profissional de Matheus Romano Brandão">
          <div className="avatar-card">
            <div className="profile-card-top">
              <span className="profile-card-label">PERFIL PROFISSIONAL</span>
              <span className="profile-status-dot" aria-label="Perfil ativo" />
            </div>
            <div className="avatar-orbit">
              <img
                className="avatar-circle"
                src="/profile.jpg"
                alt="Foto de perfil de Matheus Romano Brandão"
              />
              <span className="orbit-tag orbit-tag-code" aria-hidden="true">&lt;/&gt;</span>
              <span className="orbit-tag orbit-tag-db" aria-hidden="true">DB</span>
            </div>
            <div className="profile-card-info">
              <h2>Matheus Romano Brandão</h2>
              <p>Desenvolvedor em formação</p>
            </div>
            <div className="profile-card-divider" />
            <div className="profile-card-details">
              <span>Administração</span>
              <span>Análise e Desenvolvimento de Sistemas</span>
            </div>
            <div className="status-pill">São José do Rio Preto · SP</div>
          </div>
        </div>
      </div>

      <div className="container tech-strip" aria-label="Tecnologias em destaque">
        {quickSkills.map((item) => (
          <span key={item} className="tech-badge">
            {item}
          </span>
        ))}
      </div>

      <div className="container highlights-wrap">
        <div className="highlights-grid">
          {focusAreas.map((item) => (
            <article key={item} className="highlight-card">
              <span className="mini-dot" aria-hidden="true" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
