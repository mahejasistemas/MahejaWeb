import { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__brand">
          <img src="/src/assets/logo.svg" alt="Transportes Maheja" className="navbar__logo" />
        </Link>

        <button
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar__bar" />
          <span className="navbar__bar" />
          <span className="navbar__bar" />
        </button>

        <ul className={`navbar__menu ${open ? 'is-open' : ''}`}>
          <li><Link to="/" className="navbar__link" onClick={() => setOpen(false)}>Inicio</Link></li>
          <li><Link to="/servicios" className="navbar__link" onClick={() => setOpen(false)}>Servicios</Link></li>
          <li><Link to="/galeria" className="navbar__link" onClick={() => setOpen(false)}>Galería</Link></li>
          <li><Link to="/contacto" className="navbar__link" onClick={() => setOpen(false)}>Contacto</Link></li>

          <li className="navbar__menu-actions">
            <Link to="/cotizar" className="navbar__btn navbar__btn--primary" onClick={() => setOpen(false)}>
              Cotizar
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </li>
        </ul>

        <div className="navbar__actions">
          <Link to="/cotizar" className="navbar__btn navbar__btn--primary">
            Cotizar
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  )
}
