import React, { useState } from 'react';
import './services.css';

export default function Services() {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            id: "01",
            title: "Carga General",
            description: "Transporte seguro y eficiente para todo tipo de mercancías estándar. Flota moderna adaptada a tus necesidades de volumen.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
            )
        },
        {
            id: "02",
            title: "Transporte Especializado",
            description: "Soluciones para carga sobredimensionada, materiales peligrosos o requerimientos específicos de temperatura.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 9l-6 6"></path>
                    <path d="M10 9l6 6"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                </svg>
            )
        },
        {
            id: "03",
            title: "Logística Integral",
            description: "Gestión completa de la cadena de suministro, desde el almacenamiento hasta la distribución final.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
            )
        },
        {
            id: "04",
            title: "Renta de Maquinaria",
            description: "Disponibilidad de equipos pesados y maquinaria especializada para proyectos de construcción e industria.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            )
        }
    ];

    return (
        <section className="services-section" id="servicios">
            <div className="services-container">
                <div className="services-header">
                    <span className="services-subtitle">Nuestras Soluciones</span>
                    <h2 className="services-title">Servicios de <span className="highlight">Excelencia</span></h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`service-card ${activeService === index ? 'active' : ''}`}
                            onMouseEnter={() => setActiveService(index)}
                        >
                            <div className="service-number">{service.id}</div>
                            <div className="service-icon">{service.icon}</div>
                            <div className="service-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <a href="#cotizar" className="service-link">
                                    Cotizar ahora
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                            <div className="service-bg-hover"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
