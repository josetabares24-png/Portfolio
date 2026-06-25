import Reveal from './Reveal'

export default function Breaker() {
  return (
    <section className="breaker" id="filosofia">
      <Reveal className="wrap breaker-inner">
        <span className="breaker-mark" aria-hidden="true">✺</span>
        <p className="breaker-quote">"La ayuda no le sirve a nadie si nadie la encuentra.<br />Por eso esto existe: <em>para que se encuentren.</em>"</p>
        <p className="breaker-by mono">Proyecto ciudadano e independiente — no afiliado a ningún organismo oficial</p>
      </Reveal>
    </section>
  )
}
