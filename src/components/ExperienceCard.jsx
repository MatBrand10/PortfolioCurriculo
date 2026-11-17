export default function ExperienceCard({ experience, isExpanded, onToggle }) {
  return (
    <article className={`timeline-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="timeline-marker" aria-hidden="true" />

      <div className="experience-content">
        <div className="experience-header">
          <div>
            <span className="eyebrow">Empresa</span>
            <h3>{experience.empresa}</h3>
          </div>

          <button type="button" className="ghost-button" onClick={onToggle}>
            {isExpanded ? 'Ocultar detalhes' : 'Ver detalhes'}
          </button>
        </div>

        <div className="experience-meta">
          <p>
            <strong>Cargo:</strong> {experience.cargo}
          </p>
          <p>
            <strong>Período:</strong> {experience.periodo}
          </p>
          <p>
            <strong>Local:</strong> {experience.local}
          </p>
        </div>

        {isExpanded ? (
          <div className="experience-body">
            <ul>
              {experience.atividades.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  )
}
