import { useState } from 'react'
import ExperienceCard from '../components/ExperienceCard'
import SectionTitle from '../components/SectionTitle'
import { experiences } from '../data/experiences'

export default function Experience() {
  const [expandedId, setExpandedId] = useState(experiences[0].id)

  return (
    <section className="page-section">
      <div className="container">
        <SectionTitle
          eyebrow="Experiência profissional"
          title="Linha do tempo da minha evolução"
          text="Trajetória profissional com destaque para a transição entre atendimento administrativo, suporte e atuação em tecnologia da informação."
        />

        <div className="timeline">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isExpanded={expandedId === experience.id}
              onToggle={() =>
                setExpandedId((current) =>
                  current === experience.id ? '' : experience.id
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
