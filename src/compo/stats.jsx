import React, { useEffect, useRef, useState } from 'react';
import './stats.css';

export default function Stats() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const statsData = [
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
            ),
            label: "Eficiencia Operativa",
            value: "4x",
            sub: "Más rápido",
            description: "Reducción drástica en tiempos de entrega comparado con el promedio."
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                    <line x1="4" y1="22" x2="4" y2="15"></line>
                </svg>
            ),
            label: "Sostenibilidad",
            value: "50%",
            sub: "Menos CO2",
            description: "Comprometidos con el medio ambiente reduciendo nuestra huella de carbono."
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            ),
            label: "Confianza",
            value: "+500",
            sub: "Clientes",
            description: "Empresas líderes confían en nuestra logística integral."
        }
    ];

    return (
        <section className={`stats-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
            <div className="stats-bg-pattern"></div>
            <div className="stats-container">
                <div className="stats-header">
                    <span className="stats-badge">Rendimiento</span>
                    <h2 className="stats-title">Resultados que impulsan <br /> <span className="highlight-text">tu negocio</span></h2>
                </div>

                <div className="stats-grid">
                    {statsData.map((stat, index) => (
                        <div key={index} className="stat-card" style={{ transitionDelay: `${index * 150}ms` }}>
                            <div className="stat-icon-wrapper">
                                {stat.icon}
                            </div>
                            <div className="stat-content">
                                <div className="stat-value-wrapper">
                                    <span className="stat-value">{stat.value}</span>
                                    <span className="stat-sub">{stat.sub}</span>
                                </div>
                                <span className="stat-label">{stat.label}</span>
                                <p className="stat-description">{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
