import React, { useState } from 'react';
import './services.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Services() {
    const [activeService, setActiveService] = useState(0);
    const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

    const services = [
        {
            id: "01",
            title: "Transporte Full",
            description: "Servicio de transporte completo con vehículo exclusivo para su carga. Ideal para grandes volúmenes que requieren todo el espacio del camión.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
            )
        },
        {
            id: "02",
            title: "Transporte Sencillo",
            description: "Transporte compartido optimizado para cargas de menor volumen. Solución para rutas consolidadas y tiempos de entrega eficientes.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 3h15v13H1z"></path>
                    <path d="M16 8h4l3 3v5h-7V8z"></path>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                    <path d="M5 6h6"></path>
                    <path d="M8 9h3"></path>
                </svg>
            )
        },
        {
            id: "03",
            title: "Tolvas",
            description: "Transporte especializado en tolvas para materiales a granel como arena, grava, cemento y otros materiales de construcción. Equipos modernos y seguros.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 2l-2 8h14l-2-8z"></path>
                    <path d="M5 10v3h14v-3"></path>
                    <polygon points="16 13 20 13 23 16 23 19 16 19 16 13"></polygon>
                    <circle cx="6" cy="20" r="2"></circle>
                    <circle cx="18" cy="20" r="2"></circle>
                </svg>
            )
        },
        {
            id: "04",
            title: "Contenedores",
            description: "Transporte de contenedores de 20 y 40 pies. Servicio especializado para carga contenerizada con equipos adecuados y personal capacitado.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="12" rx="1"></rect>
                    <line x1="6" y1="4" x2="6" y2="16"></line>
                    <line x1="10" y1="4" x2="10" y2="16"></line>
                    <line x1="14" y1="4" x2="14" y2="16"></line>
                    <line x1="18" y1="4" x2="18" y2="16"></line>
                    <circle cx="6" cy="19" r="2"></circle>
                    <circle cx="18" cy="19" r="2"></circle>
                </svg>
            )
        }
    ];

    return (
        <section className={`services-section scroll-reveal ${isVisible ? 'is-visible' : ''}`} id="servicios" ref={ref}>
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
                                <a href="/servicios" className="service-link">
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
