import React from 'react';
import './hero.css';
import fondo from '../assets/fondo.jpg';
import wilmarLogo from '../assets/Img/wilmar.png';
import zucarmexLogo from '../assets/Img/Zucarmex.png';
import pacifexLogo from '../assets/Img/PACIFEX.png';
import agrogen from '../assets/Img/agrogen.png';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
    const [ref, isVisible] = useScrollReveal();

    return (
        <section className="hero-section" ref={ref}>
            <div className="hero__background">
                <img src={fondo} alt="Ocean Background" />
                <div className="hero__overlay"></div>
            </div>

            <div className="hero__content">
                <div className={`hero__main-text scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
                    <h1>
                        La Confianza <br />
                        viaja con<br />
                        nosotros
                    </h1>

                </div>

                <div className="hero__footer">
                    <div className={`hero__investors scroll-reveal ${isVisible ? 'is-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                        <p>Marcas que confian en Maheja</p>
                        <div className="hero__investor-logos">
                            <img src={agrogen} alt="agrogen" className="partner-logo" />
                            <img src={wilmarLogo} alt="Wilmar" className="partner-logo" />
                            <img src={zucarmexLogo} alt="Zucarmex" className="partner-logo" />
                            <img src={pacifexLogo} alt="Pacifex" className="partner-logo" />
                        </div>
                    </div>

                    <div className={`hero__description-container scroll-reveal ${isVisible ? 'is-visible' : ''}`} style={{ animationDelay: '0.4s' }}>
                        <div className="hero__description">
                            <p>
                                La solución de transporte que se adapta a su escala
                            </p>
                        </div>
                        <div className="hero__scroll">
                            <span>descubre nuestros servicios • Desplázate hacia abajo</span>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}
