import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

const IMG = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1400&q=85'

export default function BeforeAfter() {
  const stageRef = useRef(null)
  const draggingRef = useRef(false)
  const [percent, setPercent] = useState(50)
  const [stageWidth, setStageWidth] = useState(0)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const pointerX = (event) => (event.touches ? event.touches[0].clientX : event.clientX)

    const setPosition = (clientX) => {
      const rect = stage.getBoundingClientRect()
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width))
      setPercent(ratio * 100)
    }

    const startDrag = (event) => {
      draggingRef.current = true
      setPosition(pointerX(event))
    }

    const moveDrag = (event) => {
      if (!draggingRef.current) return
      if (event.cancelable) event.preventDefault()
      setPosition(pointerX(event))
    }

    const endDrag = () => {
      draggingRef.current = false
    }

    const onClick = (event) => setPosition(pointerX(event))

    const resizeObserver = new ResizeObserver(([entry]) => {
      setStageWidth(entry.contentRect.width)
    })

    stage.addEventListener('mousedown', startDrag)
    stage.addEventListener('touchstart', startDrag, { passive: true })
    stage.addEventListener('click', onClick)
    window.addEventListener('mousemove', moveDrag)
    window.addEventListener('touchmove', moveDrag, { passive: false })
    window.addEventListener('mouseup', endDrag)
    window.addEventListener('touchend', endDrag)
    resizeObserver.observe(stage)

    return () => {
      stage.removeEventListener('mousedown', startDrag)
      stage.removeEventListener('touchstart', startDrag)
      stage.removeEventListener('click', onClick)
      window.removeEventListener('mousemove', moveDrag)
      window.removeEventListener('touchmove', moveDrag)
      window.removeEventListener('mouseup', endDrag)
      window.removeEventListener('touchend', endDrag)
      resizeObserver.disconnect()
    }
  }, [])

  const onKeyDown = (event) => {
    if (event.key === 'ArrowLeft') setPercent((p) => Math.max(0, p - 5))
    if (event.key === 'ArrowRight') setPercent((p) => Math.min(100, p + 5))
  }

  return (
    <section className="ba" id="antes-despues">
      <div className="wrap ba-grid">
        <Reveal>
          <p className="eyebrow mono">La diferencia</p>
          <h2 className="display">Que se note menos el efecto<br />y más el <em>criterio.</em></h2>
          <p className="section-copy">
            Usa este bloque para enseñar un antes/después real: color, subtítulos, limpieza de audio, estructura o miniatura.
            La comparación vende mejor que cualquier promesa.
          </p>
        </Reveal>

        <div>
          <Reveal
            as="div"
            className="ba-stage"
            ref={stageRef}
            role="slider"
            tabIndex={0}
            aria-label="Comparador antes y después"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(percent)}
            onKeyDown={onKeyDown}
          >
            <img className="ba-img ba-before" src={IMG} alt="Antes de la edición" loading="lazy" />
            <span className="ba-label before">Antes</span>

            <div className="ba-after-wrap" style={{ width: `${percent}%` }}>
              <div className="ba-after-inner" style={{ width: stageWidth || '100%' }}>
                <img className="ba-img ba-after" src={IMG} alt="Después de la edición" loading="lazy" style={{ width: stageWidth || '100%' }} />
              </div>
            </div>

            <span className="ba-label after">Después</span>
            <div className="ba-handle" style={{ left: `${percent}%` }}></div>
            <div className="ba-knob" style={{ left: `${percent}%` }}>⇆</div>
          </Reveal>
          <p className="ba-note">Reemplazar por material real cuando esté listo</p>
        </div>
      </div>
    </section>
  )
}
