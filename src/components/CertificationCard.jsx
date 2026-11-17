export default function CertificationCard({ item }) {
  return (
    <article className="certification-card">
      <span className="eyebrow">{item.institution}</span>
      <h3>{item.title}</h3>
      <p>{item.hours}</p>
      {item.note ? <strong>{item.note}</strong> : null}
    </article>
  )
}
