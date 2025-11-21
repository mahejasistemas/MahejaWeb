import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import Servicios from './pages/Servicios.jsx'
import Galeria from './pages/galeria.jsx'
import ContactoPage from './pages/contacto.jsx'
import Cotizar from './pages/cotizar.jsx'
import WeatherWidget from './compo/WeatherWidget.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/cotizar" element={<Cotizar />} />
      </Routes>
      <WeatherWidget />
    </>
  )
}

export default App
