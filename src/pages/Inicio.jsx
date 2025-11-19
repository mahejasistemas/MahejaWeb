import Nav from '../compo/nav.jsx'
import Hero from '../compo/hero.jsx'
import Stats from '../compo/stats.jsx'
import Services from '../compo/services.jsx'
import Banner from '../compo/banner.jsx'
import CTA from '../compo/cta.jsx'
import Contacto from '../compo/contacto.jsx'
import Footer from '../compo/footer.jsx'

export default function Inicio() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Banner />
      <Services />
      <CTA />
      <Contacto />
      <Footer />
    </>
  )
}
