import SectionTitle from '../components/SectionTitle'

export default function About() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionTitle
          eyebrow="Sobre mim"
          title="Perfil profissional e trajetória"
          text="Formado em Administração e estudante de Análise e Desenvolvimento de Sistemas, com trajetória marcada por organização, atendimento, adaptação e evolução constante em tecnologia."
        />

        <div className="about-grid">
          <div className="content-card">
            <h3>Minha trajetória</h3>
            <p>
              Sou formado em Administração e atualmente curso Análise e Desenvolvimento de
              Sistemas. Minha trajetória profissional me proporcionou experiências com atendimento,
              processos administrativos, organização e resolução de problemas.
            </p>
            <p>
              Atualmente, também atuo na área de Tecnologia da Informação, desenvolvendo
              conhecimentos práticos em suporte, testes, manutenção e desenvolvimento de sistemas.
            </p>
          </div>

          <div className="content-card">
            <h3>Interesses profissionais</h3>
            <ul className="check-list">
              <li>Desenvolvimento de software</li>
              <li>Desenvolvimento Web</li>
              <li>Banco de dados</li>
              <li>Análise e desenvolvimento de sistemas</li>
              <li>Tecnologia e inovação</li>
              <li>Automação e melhoria de processos</li>
            </ul>
          </div>
        </div>

        <div className="content-card objective-card">
          <h3>Objetivo profissional</h3>
          <p>
            Continuar evoluindo na área de tecnologia, aplicando conhecimentos técnicos e
            experiências profissionais para desenvolver soluções eficientes e contribuir com
            projetos de software.
          </p>
        </div>
      </div>
    </section>
  )
}
