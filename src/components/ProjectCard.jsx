export default function ProjectCard({ repo }) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <span className="pill">{repo.language || 'Linguagem não identificada'}</span>
        <span className="project-status">{repo.fork ? 'Fork' : 'Repositório próprio'}</span>
      </div>

      <h3>{repo.name}</h3>
      <p>{repo.description || 'Descrição pública ainda não informada.'}</p>

      <div className="project-meta">
        <span>Estrelas: {repo.stargazers_count ?? 0}</span>
        <span>Forks: {repo.forks_count ?? 0}</span>
      </div>

      <div className="card-actions">
        <a className="repository-link" href={repo.html_url} target="_blank" rel="noreferrer">
          Ver repositório
        </a>
        {repo.homepage ? (
          <a className="demo-link" href={repo.homepage} target="_blank" rel="noreferrer">
            Demonstração online
          </a>
        ) : null}
      </div>
    </article>
  )
}
