import React from 'react';
import './hero.css';
import fondo from '../assets/fondo.jpg';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero__background">
                <img src={fondo} alt="Ocean Background" />
                <div className="hero__overlay"></div>
            </div>

            <div className="hero__content">
                <div className="hero__main-text">
                    <h1>
                        Low Emission <br />
                        Ocean <br />
                        Transportation
                    </h1>

                </div>

                <div className="hero__footer">
                    <div className="hero__investors">
                        <p>Backed by these top-tier investors:</p>
                        <div className="hero__investor-logos">
                            {/* Logos placeholders */}
                            <span>Bayern Kapital</span>
                            <span>SOSV</span>
                            <span>LOWERCARBON</span>
                            <span>FTTF</span>
                            <span>FARVATN</span>
                        </div>
                    </div>

                    <div className="hero__description-container">
                        <div className="hero__description">
                            <p>
                                We develop a novel ship to transport freight <span className="highlight">more flexibly</span>, <span className="highlight">with lower emissions</span> and <span className="highlight">at lower costs</span> than today.
                            </p>
                        </div>
                        <div className="hero__scroll">
                            <span>down to discover how it works • Scroll down</span>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}
