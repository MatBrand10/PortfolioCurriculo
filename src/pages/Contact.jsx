import ContactCard from '../components/ContactCard'
import SectionTitle from '../components/SectionTitle'

const contactItems = [
  {
    title: 'E-mail profissional',
    value: 'matheusromano76@gmail.com',
    description: 'Para oportunidades, propostas e parcerias.',
    href: 'mailto:matheusromano76@gmail.com'
  },
  {
    title: 'WhatsApp',
    value: '(17) 99629-2999',
    description: 'Posso responder rapidamente por mensagem.',
    href: 'https://wa.me/5517996292999?text=Ol%C3%A1%20Matheus%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.'
  },
  {
    title: 'GitHub',
    value: 'github.com/MatBrand10',
    description: 'Acompanhe repositórios e projetos em desenvolvimento.',
    href: 'https://github.com/MatBrand10'
  },
  {
    title: 'Localização',
    value: 'São José do Rio Preto – SP',
    description: 'Disponível para atuar em diferentes contextos.',
    href: 'https://maps.google.com/?q=S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20SP'
  }
]

export default function Contact() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionTitle
          eyebrow="Contato"
          title="Vamos conversar sobre tecnologia e oportunidades"
          text="Estou aberto a projetos, oportunidades de estágio, parceria acadêmica e projetos pessoais que envolvam desenvolvimento, inovação e boas soluções."
        />

        <div className="contact-grid">
          {contactItems.map((item) => (
            <ContactCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
