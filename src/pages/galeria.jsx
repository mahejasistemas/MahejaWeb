import Nav from '../compo/nav.jsx'
import Footer from '../compo/footer.jsx'
import './galeria.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

// Importar todas las imágenes
import img1 from '../assets/Img/IMG-20251030-WA0007.jpg'
import img2 from '../assets/Img/IMG-20251030-WA0008.jpg'
import img4 from '../assets/Img/IMG-20251030-WA0010.jpg'
import img5 from '../assets/Img/IMG-20251030-WA0011.jpg'
import img6 from '../assets/Img/IMG-20251030-WA0012.jpg'
import img7 from '../assets/Img/IMG-20251030-WA0013.jpg'
import img8 from '../assets/Img/IMG-20251030-WA0014.jpg'
import img9 from '../assets/Img/IMG-20251030-WA0015.jpg'
import img10 from '../assets/Img/IMG-20251106-WA0008.jpg'
import img11 from '../assets/Img/IMG-20251106-WA0009.jpg'
import img12 from '../assets/Img/IMG-20251106-WA0010.jpg'
import img13 from '../assets/Img/IMG-20251106-WA0011.jpg'
import img14 from '../assets/Img/IMG-20251106-WA0012.jpg'
import img15 from '../assets/Img/IMG-20251106-WA0013.jpg'
import img16 from '../assets/Img/IMG-20251106-WA0014.jpg'
import img17 from '../assets/Img/IMG-20251106-WA0015.jpg'

export default function Galeria() {
    const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 });
    const [galleryRef, galleryVisible] = useScrollReveal({ threshold: 0.1 });

    const galleryItems = [
        { id: 1, image: img1 },
        { id: 2, image: img2 },
        { id: 4, image: img4 },
        { id: 5, image: img5 },
        { id: 6, image: img6 },
        { id: 7, image: img7 },
        { id: 8, image: img8 },
        { id: 9, image: img9 },
        { id: 10, image: img10 },
        { id: 11, image: img11 },
        { id: 12, image: img12 },
        { id: 13, image: img13 },
        { id: 14, image: img14 },
        { id: 15, image: img15 },
        { id: 16, image: img16 },
        { id: 17, image: img17 }
    ];

    return (
        <>
            <Nav />

            {/* Hero Section */}
            <section className={`gallery-hero scroll-reveal ${heroVisible ? 'is-visible' : ''}`} ref={heroRef}>
                <div className="gallery-hero-overlay"></div>
                <div className="gallery-hero-content">
                    <span className="gallery-hero-badge">Nuestra Galería</span>
                    <h1 className="gallery-hero-title">
                        Conoce nuestras <span className="highlight-red">Operaciones</span>
                    </h1>
                    <p className="gallery-hero-description">
                        Descubre nuestra infraestructura, equipos y el equipo que hace posible un servicio de excelencia
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className={`gallery-section scroll-reveal ${galleryVisible ? 'is-visible' : ''}`} ref={galleryRef}>
                <div className="gallery-container">
                    {/* Gallery Grid */}
                    <div className="gallery-grid">
                        {galleryItems.map((item, index) => (
                            <div
                                key={item.id}
                                className="gallery-item"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="gallery-item-image">
                                    <img src={item.image} alt={`Galería ${item.id}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
