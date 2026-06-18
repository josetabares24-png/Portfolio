import Reveal from './Reveal'

export default function Breaker() {
  return (
    <section className="breaker" id="filosofia">
      <Reveal className="wrap breaker-inner">
        <span className="breaker-mark" aria-hidden="true">✺</span>
        <p className="breaker-quote">"Un video bien editado que nadie termina de ver<br />no es bueno. <em>Es bonito.</em>"</p>
        <p className="breaker-by mono">— José Tabares</p>
      </Reveal>
    </section>
  )
}
