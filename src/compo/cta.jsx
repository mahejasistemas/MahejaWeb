import React from 'react';
import './cta.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CTA() {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

    return (
        <section className={`cta-section scroll-reveal ${isVisible ? 'is-visible' : ''}`} id="contacto" ref={ref}>
            <div className="cta-container">
                <div className="cta-content">
                    <h2 className="cta-title">
                        ¿Listo para mover tu <br />
                        <span className="highlight-text-cta">carga al siguiente nivel?</span>
                    </h2>
                    <p className="cta-description">
                        Obtén una cotización competitiva en minutos y descubre por qué las empresas líderes confían en Transportes Maheja.
                    </p>

                    <div className="cta-actions">
                        <a href="#contacto" className="btn-cta btn-primary-cta">
                            Cotizar Ahora
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                        <a href="#servicios" className="btn-cta btn-secondary-cta">
                            Contactar Ventas
                        </a>
                    </div>
                </div>

                <div className="cta-visual">
                    <div className="circle-decoration"></div>
                    <div className="truck-graphic">
                        {/* Abstract representation or placeholder for a truck/cargo graphic */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="icon-graphic">
                            <rect x="1" y="3" width="15" height="13"></rect>
                            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                            <circle cx="5.5" cy="18.5" r="2.5"></circle>
                            <circle cx="18.5" cy="18.5" r="2.5"></circle>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
