import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#problema', label: 'El problema' },
  { href: '#diagnostico', label: 'Diagnóstico' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#trabajo', label: 'Trabajo' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={[scrolled && 'scrolled', open && 'open'].filter(Boolean).join(' ')} aria-label="Navegación principal">
      <div className="nav-inner">
        <a className="logo" href="#inicio" aria-label="Ir al inicio" onClick={close}>
          José Tabares<span className="mark" aria-hidden="true">✺</span>
        </a>

        <ul className="nav-links" id="navLinks">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={close}>{link.label}</a>
            </li>
          ))}
          <li><a className="nav-cta" href="#contacto" onClick={close}>Pedir auditoría</a></li>
        </ul>

        <button
          className="burger"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-controls="navLinks"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
        </button>
      </div>
    </nav>
  )
}
