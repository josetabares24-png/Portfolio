import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'

const QUESTIONS = [
  {
    q: '¿Trabajas con creadores pequeños?',
    a: 'Sí. De hecho, muchas veces ahí se nota más el cambio porque todavía hay margen para ordenar nicho, formatos, ganchos y métricas desde la base.',
  },
  {
    q: '¿Solo editas o también ayudas con ideas?',
    a: 'También ayudo con ideas, estructura y lectura de métricas. La edición final mejora mucho cuando la idea ya viene con una promesa clara.',
  },
  {
    q: '¿Qué necesito enviarte para empezar?',
    a: 'Tu canal o perfil, 2–3 videos recientes, el material en bruto si quieres edición y una idea clara de qué quieres mejorar: retención, estética, ritmo, clics o consistencia.',
  },
  {
    q: '¿Y si no sé qué servicio necesito?',
    a: 'Empieza por una auditoría. Si después no hace falta trabajar juntos, igual te llevas una lectura honesta de qué cambiar en tus próximos videos.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="faq" id="faq">
      <div className="wrap faq-grid">
        <Reveal>
          <p className="eyebrow mono">Antes de escribirme</p>
          <h2 className="display">Preguntas que conviene resolver <em>antes.</em></h2>
        </Reveal>

        <Reveal className="faq-list" delay={0.06}>
          {QUESTIONS.map((item, i) => (
            <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={item.q}>
              <button
                className="faq-q"
                type="button"
                onClick={() => setOpenIndex((current) => (current === i ? null : i))}
              >
                {item.q}<span className="faq-plus">+</span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    className="faq-a"
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
