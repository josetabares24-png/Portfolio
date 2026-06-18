import Reveal from './Reveal'

export default function CTA() {
  return (
    <section className="cta" id="contacto">
      <Reveal className="wrap cta-inner">
        <p className="eyebrow mono" style={{ textAlign: 'center' }}>El siguiente paso</p>
        <h2>Envíame tu canal.<br />Te digo dónde está <em>perdiendo atención.</em></h2>
        <p className="cta-sub">
          Mándame tu perfil o uno de tus videos. Si veo una oportunidad clara, hablamos de cómo trabajarlo. Si no, te digo qué podrías corregir por tu cuenta.
        </p>

        <div className="cta-actions">
          <a
            href="mailto:josetabaresp@gmail.com?subject=Quiero%20una%20auditor%C3%ADa%20de%20mi%20canal&body=Hola%20Jos%C3%A9%2C%20te%20paso%20mi%20canal%20para%20que%20lo%20revises%3A%0A%0AMi%20objetivo%20es%3A%0A%0ALo%20que%20m%C3%A1s%20me%20cuesta%20ahora%20es%3A"
            className="btn"
          >
            Pedir auditoría por email <span className="arr">→</span>
          </a>
          <a href="https://www.instagram.com/josetabares24/" target="_blank" rel="noopener" className="btn secondary">
            Escribirme por Instagram
          </a>
        </div>

        <div className="socials" aria-label="Redes sociales">
          <a href="https://www.instagram.com/josetabares24/" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.tiktok.com/@josetabares24" target="_blank" rel="noopener">TikTok</a>
          <a href="mailto:josetabaresp@gmail.com">Email</a>
        </div>
      </Reveal>
    </section>
  )
}
