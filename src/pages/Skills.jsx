import { useState } from 'react'
import { Cloud, Code2, CodeXml, Database, Wrench } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard'
import { skills } from '../data/skills'

const categoryIcons = {
  programacao: Code2,
  web: CodeXml,
  dados: Database,
  ferramentas: Wrench,
  cloud: Cloud,
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].id)

  const selectedSkills =
    skills.find((category) => category.id === activeCategory) ?? skills[0]

  return (
    <section className="page-section">
      <div className="container">
        <SectionTitle
          eyebrow="Habilidades"
          title="Conhecimentos técnicos e ferramentas"
          text="Conhecimentos em desenvolvimento, dados, infraestrutura e ferramentas digitais, sempre buscando aplicar teoria e prática de forma eficiente."
        />

        <div className="skills-tabs" aria-label="Categorias de habilidades">
          {skills.map((category) => (
            <button
              key={category.id}
              type="button"
              className={activeCategory === category.id ? 'tab-button active' : 'tab-button'}
              onClick={() => setActiveCategory(category.id)}
            >
              {(() => {
                const Icon = categoryIcons[category.id]
                return <Icon size={16} aria-hidden="true" />
              })()}
              {category.title}
            </button>
          ))}
        </div>

        <div className="skill-grid">
          {selectedSkills.items.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
