import CertificationCard from '../components/CertificationCard'
import SectionTitle from '../components/SectionTitle'
import { certifications } from '../data/certifications'

export default function Certifications() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionTitle
          eyebrow="Cursos e certificações"
          title="Formação complementar"
          text="Aprofundamento em desenvolvimento, dados, infraestrutura e produtividade, com foco em crescimento profissional contínuo."
        />

        <div className="certification-grid">
          {certifications.map((item) => (
            <CertificationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
