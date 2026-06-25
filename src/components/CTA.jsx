import Reveal from './Reveal'

export default function CTA() {
  return (
    <section className="cta" id="contacto">
      <Reveal className="wrap cta-inner">
        <p className="eyebrow mono" style={{ textAlign: 'center' }}>Ayuda a mejorar esto</p>
        <h2>¿Conoces una fuente que falta,<br />o un enlace <em>que ya no funciona?</em></h2>
        <p className="cta-sub">
          Esta página la mantiene una sola persona. Si tienes un enlace verificado para agregar, una corrección
          o detectas algo sospechoso, avísame y lo reviso.
        </p>

        <div className="cta-actions">
          <a
            href="mailto:josetabaresp@gmail.com?subject=Correcci%C3%B3n%20o%20fuente%20para%20el%20centro%20de%20ayuda&body=Hola%20Jos%C3%A9%2C%20quiero%20reportar%20lo%20siguiente%20sobre%20la%20p%C3%A1gina%20del%20terremoto%3A%0A%0AEnlace%20o%20secci%C3%B3n%3A%0A%0ALo%20que%20encontr%C3%A9%3A"
            className="btn"
          >
            Reportar por email <span className="arr">→</span>
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
