import { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadRepositories = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/MatBrand10/repos?sort=updated&per_page=100'
        )

        if (!response.ok) {
          throw new Error('Não foi possível acessar os repositórios públicos do GitHub.')
        }

        const data = await response.json()
        if (!Array.isArray(data)) {
          throw new Error(data.message || 'A resposta do GitHub veio em um formato inesperado.')
        }

        const publicRepos = data.sort((a, b) => b.updated_at.localeCompare(a.updated_at))
        setRepos(publicRepos)
      } catch (requestError) {
        setError(
          requestError instanceof Error
            ? requestError.message
            : 'Erro inesperado ao carregar os repositórios.'
        )
      } finally {
        setLoading(false)
      }
    }

    loadRepositories()
  }, [])

  return (
    <section className="page-section">
      <div className="container">
        <SectionTitle
          eyebrow="Projetos"
          title="Repositórios públicos e trabalhos em destaque"
          text="Consulta aos dados públicos do GitHub para apresentar projetos reais, com linguagem principal, descrição e links oficiais."
        />

        {loading ? (
          <div className="status-panel">Carregando repositórios do GitHub...</div>
        ) : null}

        {!loading && error ? (
          <div className="status-panel error-panel">
            <p>{error}</p>
            <a href="https://github.com/MatBrand10?tab=repositories" target="_blank" rel="noreferrer">
              Abrir repositórios diretamente no GitHub
            </a>
          </div>
        ) : null}

        {!loading && !error && repos.length === 0 ? (
          <div className="status-panel">
            Nenhum repositório público foi encontrado para esse perfil.
          </div>
        ) : null}

        {!loading && !error ? (
          <div className="project-grid">
            {repos.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
