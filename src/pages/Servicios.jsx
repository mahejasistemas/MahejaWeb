import Nav from '../compo/nav.jsx'
import Footer from '../compo/footer.jsx'
import CTA from '../compo/cta.jsx'
import './service.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import heroImage from '../assets/Img/IMG-20251030-WA0008.jpg'

export default function Servicios() {
    const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 });
    const [servicesRef, servicesVisible] = useScrollReveal({ threshold: 0.1 });

    const services = [
        {
            id: "01",
            title: "Transporte Full",
            description: "Servicio de transporte completo con vehículo exclusivo para su carga. Ideal para grandes volúmenes que requieren todo el espacio del camión.",
            features: [
                "Vehículo exclusivo para su carga",
                "Ideal para grandes volúmenes",
                "Entrega directa sin transbordos",
                "Mayor seguridad y control"
            ],
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
            features: [
                "Solución eficiente",
                "Rutas consolidadas optimizadas",
                "Ideal para cargas de menor volumen",
                "Tiempos de entrega competitivos"
            ],
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
            description: "Transporte especializado en tolvas para materiales a granel como azucar , fertilizante , coque y otros materiales de construcción. Equipos modernos y seguros.",
            features: [
                "Transporte de materiales a granel",
                "Azucar, fertilizante, coque y más",
                "Equipos modernos y seguros",
                "Personal especializado"
            ],
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
            features: [
                "Contenedores de 20 y 40 pies",
                "Personal capacitado",
                "Manejo seguro de carga contenerizada"
            ],
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
        <>
            <Nav />

            {/* Hero Section */}
            <section className={`services-hero scroll-reveal ${heroVisible ? 'is-visible' : ''}`} ref={heroRef}>
                <div className="services-hero-background">
                    <img src={heroImage} alt="Servicios Background" />
                </div>
                <div className="services-hero-overlay"></div>
                <div className="services-hero-content">
                    <span className="services-hero-badge">Nuestros Servicios</span>
                    <h1 className="services-hero-title">
                        Soluciones de <span className="highlight-red">Transporte</span><br />
                        para cada necesidad
                    </h1>
                    <p className="services-hero-description">
                        Ofrecemos una gama completa de servicios logísticos diseñados para impulsar tu negocio
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className={`services-page-section scroll-reveal ${servicesVisible ? 'is-visible' : ''}`} ref={servicesRef}>
                <div className="services-page-container">
                    {services.map((service, index) => (
                        <div key={index} className="service-detail-card" style={{ transitionDelay: `${index * 150}ms` }}>
                            <div className="service-detail-header">
                                <div className="service-detail-number">{service.id}</div>
                                <div className="service-detail-icon">{service.icon}</div>
                            </div>

                            <div className="service-detail-content">
                                <h3 className="service-detail-title">{service.title}</h3>
                                <p className="service-detail-description">{service.description}</p>

                                <ul className="service-detail-features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#cotizar" className="service-detail-link">
                                    Solicitar cotización
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CTA />
            <Footer />
        </>
    )
}
