import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Nav from '../compo/nav.jsx'
import Footer from '../compo/footer.jsx'
import './cotizar.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { EMAILJS_CONFIG, RECIPIENT_EMAILS } from '../config/emailConfig'

export default function Cotizar() {
    const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 });
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 4;

    const [formData, setFormData] = useState({
        // Step 1: Tipo de servicio
        tipoServicio: '',

        // Step 2: Detalles de carga
        tipoCarga: '',
        peso: '',
        tipoUnidad: '',
        metrosCubicos: '',
        valorMercancia: '',
        requiereSeguro: false,

        // Step 3: Origen y destino
        origen: '',
        destino: '',
        fechaRecogida: '',
        fechaEntrega: '',
        tipoEntrega: 'estandar',

        // Step 4: Información de contacto
        nombreEmpresa: '',
        nombreContacto: '',
        email: '',
        telefono: '',
        comentarios: ''
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Calcular cotización estimada
        const cotizacionEstimada = calcularCotizacion(formData);

        // Preparar los datos del email
        const emailData = {
            to_emails: RECIPIENT_EMAILS.join(', '),
            tipo_servicio: servicios.find(s => s.id === formData.tipoServicio)?.title || formData.tipoServicio,
            tipo_carga: formData.tipoCarga,
            peso: formData.peso,
            dimensiones: `Tipo: ${formData.tipoUnidad} - Volumen: ${formData.metrosCubicos}m³`,
            valor_mercancia: formData.valorMercancia || 'No especificado',
            requiere_seguro: formData.requiereSeguro ? 'Sí' : 'No',
            origen: formData.origen,
            destino: formData.destino,
            fecha_recogida: formData.fechaRecogida,
            fecha_entrega: formData.fechaEntrega || 'No especificada',
            tipo_entrega: formData.tipoEntrega,
            nombre_empresa: formData.nombreEmpresa || 'No especificada',
            nombre_contacto: formData.nombreContacto,
            email: formData.email,
            reply_to: formData.email,
            telefono: formData.telefono,
            comentarios: formData.comentarios || 'Sin comentarios',
            cotizacion_estimada: `$${cotizacionEstimada.toLocaleString()} MXN`
        };

        try {
            // Enviar email usando EmailJS
            const result = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID_COTIZACION,
                emailData,
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            console.log('Email enviado exitosamente:', result);
            alert(`¡Cotización enviada exitosamente!\n\nEstimado: $${cotizacionEstimada.toLocaleString()} MXN\n\nRecibirás una cotización detallada por email en las próximas 24 horas.`);

            // Reset form
            setFormData({
                tipoServicio: '',
                tipoCarga: '',
                peso: '',
                tipoUnidad: '',
                metrosCubicos: '',
                valorMercancia: '',
                requiereSeguro: false,
                origen: '',
                destino: '',
                fechaRecogida: '',
                fechaEntrega: '',
                tipoEntrega: 'estandar',
                nombreEmpresa: '',
                nombreContacto: '',
                email: '',
                telefono: '',
                comentarios: ''
            });
            setCurrentStep(1);
        } catch (error) {
            console.error('Error al enviar email:', error);
            alert('Hubo un error al enviar la cotización. Por favor, intenta nuevamente o contáctanos directamente.');
        }
    };

    const calcularCotizacion = (data) => {
        let base = 5000;

        // Tipo de servicio
        if (data.tipoServicio === 'full') base *= 1.5;
        if (data.tipoServicio === 'sencillo') base *= 1.0;
        if (data.tipoServicio === 'tolvas') base *= 1.3;
        if (data.tipoServicio === 'contenedores') base *= 1.4;

        // Peso
        const peso = parseFloat(data.peso) || 0;
        base += peso * 10;

        // Seguro
        if (data.requiereSeguro) {
            const valor = parseFloat(data.valorMercancia) || 0;
            base += valor * 0.02;
        }

        // Tipo de entrega
        if (data.tipoEntrega === 'express') base *= 1.4;
        if (data.tipoEntrega === 'programada') base *= 1.1;

        return Math.round(base);
    };

    const isStepValid = () => {
        switch (currentStep) {
            case 1:
                return formData.tipoServicio !== '';
            case 2:
                return formData.tipoCarga !== '' && formData.peso !== '' && formData.tipoUnidad !== '' && formData.metrosCubicos !== '';
            case 3:
                return formData.origen !== '' && formData.destino !== '' && formData.fechaRecogida !== '';
            case 4:
                return formData.nombreContacto !== '' && formData.email !== '' && formData.telefono !== '';
            default:
                return false;
        }
    };

    const servicios = [
        {
            id: 'full',
            title: 'Transporte Full',
            description: 'Vehículo exclusivo para su carga completa',
            icon: '🚛'
        },
        {
            id: 'sencillo',
            title: 'Transporte Sencillo',
            description: 'Transporte compartido optimizado',
            icon: '📦'
        },
        {
            id: 'tolvas',
            title: 'Tolvas',
            description: 'Materiales a granel (azúcar, fertilizante, coque)',
            icon: '🏗️'
        },
        {
            id: 'contenedores',
            title: 'Contenedores',
            description: 'Contenedores de 20 y 40 pies',
            icon: '📦'
        }
    ];

    return (
        <>
            <Nav />

            {/* Hero Section */}
            <section className={`quote-hero scroll-reveal ${heroVisible ? 'is-visible' : ''}`} ref={heroRef}>
                <div className="quote-hero-content">
                    <span className="quote-hero-badge">Cotización</span>
                    <h1 className="quote-hero-title">
                        Solicita tu cotización
                    </h1>
                    <p className="quote-hero-description">
                        Completa el formulario en 4 sencillos pasos
                    </p>
                </div>
            </section>

            {/* Quote Form Section */}
            <section className="quote-form-section">
                <div className="quote-container">

                    {/* Step Indicator */}
                    <div className="step-indicator">
                        Paso {currentStep} de {totalSteps}
                    </div>

                    {/* Progress Bar */}
                    <div className="quote-progress">
                        {[1, 2, 3, 4].map((step) => (
                            <div key={step} className={`progress-step ${currentStep >= step ? 'active' : ''} ${currentStep === step ? 'current' : ''}`}>
                                <span className="progress-label">
                                    {step === 1 && 'Servicio'}
                                    {step === 2 && 'Detalles'}
                                    {step === 3 && 'Ruta'}
                                    {step === 4 && 'Contacto'}
                                </span>
                            </div>
                        ))}
                        <div className="progress-line" style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}></div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="quote-form">

                        {/* Step 1: Tipo de Servicio */}
                        {currentStep === 1 && (
                            <div className="form-step">
                                <h2 className="step-title">Selecciona el tipo de servicio</h2>
                                <p className="step-description">Elige el servicio que mejor se adapte a tus necesidades</p>

                                <div className="service-grid">
                                    {servicios.map((servicio) => (
                                        <div
                                            key={servicio.id}
                                            className={`service-option ${formData.tipoServicio === servicio.id ? 'selected' : ''}`}
                                            onClick={() => setFormData({ ...formData, tipoServicio: servicio.id })}
                                        >
                                            <div className="service-icon">{servicio.icon}</div>
                                            <h3>{servicio.title}</h3>
                                            <p>{servicio.description}</p>
                                            <div className="service-check">
                                                {formData.tipoServicio === servicio.id && (
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 2: Detalles de Carga */}
                        {currentStep === 2 && (
                            <div className="form-step">
                                <h2 className="step-title">Detalles de la carga</h2>
                                <p className="step-description">Proporciona información sobre tu mercancía</p>

                                <div className="form-grid two-col">
                                    <div className="form-group full-width">
                                        <label htmlFor="tipoCarga">Tipo de carga *</label>
                                        <select
                                            id="tipoCarga"
                                            name="tipoCarga"
                                            value={formData.tipoCarga}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Selecciona el tipo de carga</option>
                                            <option value="general">Carga General</option>
                                            <option value="perecedera">Perecedera</option>
                                            <option value="fragil">Frágil</option>
                                            <option value="peligrosa">Peligrosa</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="peso">Peso aproximado (kg) *</label>
                                        <input
                                            type="number"
                                            id="peso"
                                            name="peso"
                                            value={formData.peso}
                                            onChange={handleInputChange}
                                            placeholder="1000"
                                            min="1"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="tipoUnidad">Tipo de unidad</label>
                                    <select
                                        id="tipoUnidad"
                                        name="tipoUnidad"
                                        value={formData.tipoUnidad}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Selecciona el tipo</option>
                                        <option value="Carga suelta">Carga suelta</option>
                                        <option value="Sencillo">Sencillo</option>
                                        <option value="Full">Full</option>
                                        <option value="Contenedor 20">Contenedor 20</option>
                                        <option value="Contenedor 40">Contenedor 40</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="metrosCubicos">Metros Cúbicos (m³)</label>
                                    <input
                                        type="number"
                                        id="metrosCubicos"
                                        name="metrosCubicos"
                                        value={formData.metrosCubicos}
                                        onChange={handleInputChange}
                                        placeholder="Ej: 30"
                                        min="0"
                                    />
                                </div>

                                <div className="form-group full-width checkbox-group">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            name="requiereSeguro"
                                            checked={formData.requiereSeguro}
                                            onChange={handleInputChange}
                                        />
                                        <span>Requiero seguro de carga</span>
                                    </label>
                                </div>
                            </div>

                        )}

                        {/* Step 3: Origen y Destino */}
                        {currentStep === 3 && (
                            <div className="form-step">
                                <h2 className="step-title">Ruta y fechas</h2>
                                <p className="step-description">Define el origen, destino y fechas de tu envío</p>

                                <div className="form-grid two-col">
                                    <div className="form-group">
                                        <label htmlFor="origen">Origen *</label>
                                        <input
                                            type="text"
                                            id="origen"
                                            name="origen"
                                            value={formData.origen}
                                            onChange={handleInputChange}
                                            placeholder="Ciudad de México, CDMX"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="destino">Destino *</label>
                                        <input
                                            type="text"
                                            id="destino"
                                            name="destino"
                                            value={formData.destino}
                                            onChange={handleInputChange}
                                            placeholder="Monterrey, NL"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="fechaRecogida">Fecha de recogida *</label>
                                        <input
                                            type="date"
                                            id="fechaRecogida"
                                            name="fechaRecogida"
                                            value={formData.fechaRecogida}
                                            onChange={handleInputChange}
                                            min={new Date().toISOString().split('T')[0]}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="fechaEntrega">Fecha de entrega estimada</label>
                                        <input
                                            type="date"
                                            id="fechaEntrega"
                                            name="fechaEntrega"
                                            value={formData.fechaEntrega}
                                            onChange={handleInputChange}
                                            min={formData.fechaRecogida || new Date().toISOString().split('T')[0]}
                                        />
                                    </div>

                                    <div className="form-group full-width">
                                        <label>Tipo de entrega</label>
                                        <div className="radio-group">
                                            <label className="radio-label">
                                                <input
                                                    type="radio"
                                                    name="tipoEntrega"
                                                    value="estandar"
                                                    checked={formData.tipoEntrega === 'estandar'}
                                                    onChange={handleInputChange}
                                                />
                                                <span>Estándar (5-7 días)</span>
                                            </label>
                                            <label className="radio-label">
                                                <input
                                                    type="radio"
                                                    name="tipoEntrega"
                                                    value="programada"
                                                    checked={formData.tipoEntrega === 'programada'}
                                                    onChange={handleInputChange}
                                                />
                                                <span>Programada (+10%)</span>
                                            </label>
                                            <label className="radio-label">
                                                <input
                                                    type="radio"
                                                    name="tipoEntrega"
                                                    value="express"
                                                    checked={formData.tipoEntrega === 'express'}
                                                    onChange={handleInputChange}
                                                />
                                                <span>Express 24-48h (+40%)</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Información de Contacto */}
                        {currentStep === 4 && (
                            <div className="form-step">
                                <h2 className="step-title">Información de contacto</h2>
                                <p className="step-description">¿Cómo podemos contactarte?</p>

                                <div className="form-grid two-col">
                                    <div className="form-group">
                                        <label htmlFor="nombreEmpresa">Nombre de empresa</label>
                                        <input
                                            type="text"
                                            id="nombreEmpresa"
                                            name="nombreEmpresa"
                                            value={formData.nombreEmpresa}
                                            onChange={handleInputChange}
                                            placeholder="Mi Empresa S.A."
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="nombreContacto">Nombre de contacto *</label>
                                        <input
                                            type="text"
                                            id="nombreContacto"
                                            name="nombreContacto"
                                            value={formData.nombreContacto}
                                            onChange={handleInputChange}
                                            placeholder="Juan Pérez"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="juan@empresa.com"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="telefono">Teléfono *</label>
                                        <input
                                            type="tel"
                                            id="telefono"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleInputChange}
                                            placeholder="(55) 1234-5678"
                                            required
                                        />
                                    </div>

                                    <div className="form-group full-width">
                                        <label htmlFor="comentarios">Comentarios adicionales</label>
                                        <textarea
                                            id="comentarios"
                                            name="comentarios"
                                            value={formData.comentarios}
                                            onChange={handleInputChange}
                                            rows="4"
                                            placeholder="Información adicional sobre tu envío..."
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Summary */}
                                <div className="quote-summary">
                                    <h3>Resumen de tu cotización</h3>
                                    <div className="summary-grid">
                                        <div className="summary-item">
                                            <span className="summary-label">Servicio:</span>
                                            <span className="summary-value">{servicios.find(s => s.id === formData.tipoServicio)?.title}</span>
                                        </div>
                                        <div className="summary-item">
                                            <span className="summary-label">Tipo de carga:</span>
                                            <span className="summary-value">{formData.tipoCarga}</span>
                                        </div>
                                        <div className="summary-item">
                                            <span className="summary-label">Peso:</span>
                                            <span className="summary-value">{formData.peso} kg</span>
                                        </div>
                                        <div className="summary-item">
                                            <span className="summary-label">Ruta:</span>
                                            <span className="summary-value">{formData.origen} → {formData.destino}</span>
                                        </div>
                                        <div className="summary-item">
                                            <span className="summary-label">Fecha de recogida:</span>
                                            <span className="summary-value">{formData.fechaRecogida}</span>
                                        </div>
                                        <div className="summary-item">
                                            <span className="summary-label">Tipo de entrega:</span>
                                            <span className="summary-value">{formData.tipoEntrega}</span>
                                        </div>
                                    </div>
                                    <div className="estimated-price">
                                        <span>Cotización estimada:</span>
                                        <strong>${calcularCotizacion(formData).toLocaleString()} MXN</strong>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="form-navigation">
                            {currentStep > 1 && (
                                <button type="button" onClick={prevStep} className="btn-secondary">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M19 12H5M12 19l-7-7 7-7" />
                                    </svg>
                                    Anterior
                                </button>
                            )}

                            {currentStep < totalSteps ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    disabled={!isStepValid()}
                                    className="btn-primary"
                                >
                                    Siguiente
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            ) : (
                                <button type="submit" className="btn-primary">
                                    Enviar cotización
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                </button>
                            )}
                        </div>
                    </form>
                </div >
            </section >

            <Footer />
        </>
    )
}
