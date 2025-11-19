import { useState } from 'react'
import './nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="/" className="navbar__brand">
          <img src="/src/assets/logo.svg" alt="Transportes Maheja" className="navbar__logo" />
        </a>

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
          <li><a href="#inicio" className="navbar__link" onClick={() => setOpen(false)}>Inicio</a></li>
          <li><a href="#servicios" className="navbar__link" onClick={() => setOpen(false)}>Servicios</a></li>
          <li><a href="#galeria" className="navbar__link" onClick={() => setOpen(false)}>Galería</a></li>
          <li><a href="#contacto" className="navbar__link" onClick={() => setOpen(false)}>Contacto</a></li>

          <li className="navbar__menu-actions">
            <a href="#login" className="navbar__btn navbar__btn--login" onClick={() => setOpen(false)}>Login</a>
            <a href="#cotizar" className="navbar__btn navbar__btn--primary" onClick={() => setOpen(false)}>
              Cotizar
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </li>
        </ul>

        <div className="navbar__actions">
          <a href="#login" className="navbar__btn navbar__btn--login">Login</a>
          <a href="#cotizar" className="navbar__btn navbar__btn--primary">
            Cotizar
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}
