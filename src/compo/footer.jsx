import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <div className="footer-logo">
                            {/* Logo filter applied in CSS to make it white */}
                            <img src="/src/assets/logo.svg" alt="Transportes Maheja" className="footer-logo-img" />
                            <span className="footer-brand-name">Transportes Maheja</span>
                        </div>
                        <p className="footer-description">
                            Soluciones logísticas integrales para mover a México.
                            Seguridad, eficiencia y compromiso en cada kilómetro.
                        </p>
                    </div>

                    {/* Links Column */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Navegación</h4>
                        <ul className="footer-links">
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#servicios">Servicios</a></li>
                            <li><a href="#galeria">Galería</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Servicios</h4>
                        <ul className="footer-links">
                            <li><a href="#general">Carga General</a></li>
                            <li><a href="#especializada">Carga Especializada</a></li>
                            <li><a href="#logistica">Logística Integral</a></li>
                            <li><a href="#maquinaria">Renta de Maquinaria</a></li>
                        </ul>
                    </div>

                    {/* Social/Contact Column */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Síguenos</h4>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook" className="social-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="#" aria-label="Instagram" className="social-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="social-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-legal">
                        <p>&copy; {new Date().getFullYear()} Transportes Maheja.</p>
                        <span className="separator">|</span>
                        <a href="#">Privacidad</a>
                        <a href="#">Términos</a>
                    </div>
                    <div className="footer-credit">
                        Made by <a href="https://metawebdev.com" target="_blank" rel="noopener noreferrer">MetaWeb Dev Solutions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
