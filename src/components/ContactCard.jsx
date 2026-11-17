export default function ContactCard({ title, value, description, href }) {
  return (
    <a className="contact-card" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
      <span className="eyebrow">{title}</span>
      <strong>{value}</strong>
      <small>{description}</small>
    </a>
  )
}
