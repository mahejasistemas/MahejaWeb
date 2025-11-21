// Configuración de EmailJS
// Para obtener estas credenciales:
// 1. Crea una cuenta en https://www.emailjs.com/
// 2. Crea un servicio de email (Gmail, Outlook, etc.)
// 3. Crea dos plantillas de email (una para cotizaciones y otra para contacto)
// 4. Obtén tu Public Key desde Account > API Keys
// 5. Reemplaza los valores a continuación con tus credenciales

export const EMAILJS_CONFIG = {
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_lic8u5r',
    TEMPLATE_ID_COTIZACION: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_COTIZACION || 'template_90d7901',
    TEMPLATE_ID_CONTACTO: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACTO || 'template_o9tfh09',
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'mX2WGB4rqe8e2IVis'
};

// Emails destino - Los correos se enviarán a estas direcciones
export const RECIPIENT_EMAILS = [
    'gabriela.geronimo@transportesmaheja.com',
    'facturacionmaheja@gmail.com'
];
