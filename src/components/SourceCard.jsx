import Reveal from './Reveal'

export default function SourceCard({ tier, title, forWhom, text, items, link, href, featured, badge, delay = 0 }) {
  return (
    <Reveal as="article" className={`svc${featured ? ' featured' : ''}`} delay={delay}>
      {badge && <span className="svc-badge">{badge}</span>}
      <span className="svc-tier mono">{tier}</span>
      <h3>{title}</h3>
      <p className="svc-for">{forWhom}</p>
      <p>{text}</p>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <a className="svc-link" href={href} target="_blank" rel="noopener">{link}</a>
    </Reveal>
  )
}
