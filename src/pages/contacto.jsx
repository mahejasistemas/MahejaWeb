import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Nav from '../compo/nav.jsx'
import Footer from '../compo/footer.jsx'
import './contacto.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { EMAILJS_CONFIG, RECIPIENT_EMAILS } from '../config/emailConfig'

export default function ContactoPage() {
    const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 });
    const [formRef, formVisible] = useScrollReveal({ threshold: 0.1 });
    const [infoRef, infoVisible] = useScrollReveal({ threshold: 0.1 });

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        servicio: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Preparar los datos del email
        const emailData = {
            to_emails: RECIPIENT_EMAILS.join(', '),
            nombre: formData.nombre,
            email: formData.email,
            telefono: formData.telefono,
            empresa: formData.empresa || 'No especificada',
            servicio: formData.servicio,
            mensaje: formData.mensaje
        };

        try {
            // Enviar email usando EmailJS
            const result = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID_CONTACTO,
                emailData,
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            console.log('Email enviado exitosamente:', result);
            alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');

            // Reset form
            setFormData({
                nombre: '',
                email: '',
                telefono: '',
                empresa: '',
                servicio: '',
                mensaje: ''
            });
        } catch (error) {
            console.error('Error al enviar email:', error);
            alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos directamente.');
        }
    };

    const contactInfo = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
            ),
            title: "Dirección",
            details: ["LIBRAMIENTO SANTA FE SAN JULIAN KM 3.7", "DELFINO VICTORIA SANTA FE", "CP 91690 VERACRUZ, VER"]
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
            ),
            title: "Teléfono",
            details: ["229 125 5074 - Tráfico", "229 438 8209 - Facturación y Cobranza"]
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            ),
            title: "Email",
            details: ["gabriela.geronimo@transportesmaheja.com", "facturacionmaheja@gmail.com"]
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
            ),
            title: "Horario",
            details: ["Lunes - Viernes", "9:00 AM - 7:00 PM", "Sábados: 9:00 AM - 2:00 PM"]
        }
    ];

    return (
        <>
            <Nav />

            {/* Hero Section */}
            <section className={`contact-hero scroll-reveal ${heroVisible ? 'is-visible' : ''}`} ref={heroRef}>
                <div className="contact-hero-overlay"></div>
                <div className="contact-hero-content">
                    <span className="contact-hero-badge">Contáctanos</span>
                    <h1 className="contact-hero-title">
                        Estamos aquí para <span className="highlight-red">ayudarte</span>
                    </h1>
                    <p className="contact-hero-description">
                        Nuestro equipo está listo para brindarte la mejor solución logística
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className={`contact-info-section scroll-reveal ${infoVisible ? 'is-visible' : ''}`} ref={infoRef}>
                <div className="contact-info-container">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="contact-info-card" style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="contact-info-icon">{info.icon}</div>
                            <h3 className="contact-info-title">{info.title}</h3>
                            <div className="contact-info-details">
                                {info.details.map((detail, idx) => (
                                    <p key={idx}>{detail}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className={`contact-form-section scroll-reveal ${formVisible ? 'is-visible' : ''}`} ref={formRef}>
                <div className="contact-form-container">
                    {/* Form */}
                    <div className="contact-form-wrapper">
                        <div className="contact-form-header">
                            <h2>Envíanos un mensaje</h2>
                            <p>Completa el formulario y nos pondremos en contacto contigo lo antes posible</p>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre completo *</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                        placeholder="Juan Pérez"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="juan@empresa.com"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="telefono">Teléfono *</label>
                                    <input
                                        type="tel"
                                        id="telefono"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        required
                                        placeholder="(55) 1234-5678"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="empresa">Empresa</label>
                                    <input
                                        type="text"
                                        id="empresa"
                                        name="empresa"
                                        value={formData.empresa}
                                        onChange={handleChange}
                                        placeholder="Nombre de tu empresa"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="servicio">Servicio de interés *</label>
                                <select
                                    id="servicio"
                                    name="servicio"
                                    value={formData.servicio}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecciona un servicio</option>
                                    <option value="transporte-full">Transporte Full</option>
                                    <option value="transporte-sencillo">Transporte Sencillo</option>
                                    <option value="tolvas">Tolvas</option>
                                    <option value="contenedores">Contenedores</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="mensaje">Mensaje *</label>
                                <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                                ></textarea>
                            </div>

                            <button type="submit" className="contact-submit-btn">
                                Enviar mensaje
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="contact-map-wrapper">
                        <div className="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.234!2d-96.3!3d19.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA5JzAwLjAiTiA5NsKwMTgnMDAuMCJX!5e0!3m2!1ses!2smx!4v1234567890&q=Libramiento+Santa+Fe+San+Julian+KM+3.7+Delfino+Victoria+Santa+Fe+Veracruz"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación Transportes Maheja"
                            ></iframe>
                        </div>

                        <div className="contact-map-info">
                            <h3>Visítanos</h3>
                            <p>Estamos ubicados en una zona estratégica para brindarte el mejor servicio</p>
                            <a href="https://www.google.com/maps/search/Libramiento+Santa+Fe+San+Julian+KM+3.7+Delfino+Victoria+Santa+Fe+Veracruz" target="_blank" rel="noopener noreferrer" className="map-directions-btn">
                                Obtener direcciones
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
