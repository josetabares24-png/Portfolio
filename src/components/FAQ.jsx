import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'

const QUESTIONS = [
  {
    q: '¿Esta página es oficial?',
    a: 'No. Es un proyecto independiente, sin afiliación a ningún gobierno, ONG u organismo. No recibimos donaciones ni gestionamos datos de personas: solo enlazamos a las fuentes oficiales y plataformas ciudadanas que ya existen.',
  },
  {
    q: '¿Por qué hay varias plataformas para buscar a una persona y no una sola?',
    a: 'Cada plataforma (Cruz Roja, Venezuela Te Busca, Encuéntralos, etc.) se construyó por separado y tiene registros distintos. Mientras no exista una base unificada oficial, reportar en varias a la vez aumenta las probabilidades de que alguien vea tu caso.',
  },
  {
    q: '¿Qué hago si un enlace está roto o desactualizado?',
    a: 'Escríbenos por el correo o redes de abajo con el enlace exacto y qué encontraste. Esta página se revisa a mano, así que toda corrección ayuda a quien la use después.',
  },
  {
    q: '¿Cómo evito caer en una estafa al donar?',
    a: 'Dona solo a organizaciones con trayectoria verificable, nunca a una cuenta personal "para los damnificados" que llegue por mensaje privado. Si algo en esta página te parece sospechoso, repórtalo: preferimos quitar un enlace a dejarlo si hay duda.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="faq" id="faq">
      <div className="wrap faq-grid">
        <Reveal>
          <p className="eyebrow mono">Antes de usar esta página</p>
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
