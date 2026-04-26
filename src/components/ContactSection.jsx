import './ContactSection.css';
import { Mail, Phone } from 'lucide-react';
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contáctanos</h2>
        <p className="section-subtitle">¿Listo para llevar tu evento al siguiente nivel?</p>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <p>Estamos disponibles para eventos, fiestas privadas, foros y más. ¡Escríbenos y hagamos ruido!</p>

            <ul className="info-list">
              <li><Phone className="icon" /> 33 1068 7855</li>
            </ul>

            <div className="social-links">
              <a href="https://instagram.com/soundcheck_mx1" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram size={28} /></a>
              <a href="https://tiktok.com/@soundcheck_899199" target="_blank" rel="noreferrer" aria-label="TikTok"><FaTiktok size={28} /></a>
              <a href="https://youtube.com/@soundcheck_mx-h9y?si=GXNTGXNVg-AQYScE" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube size={28} /></a>
            </div>

            <a href="https://wa.me/523310687855" target="_blank" rel="noreferrer" className="btn whatsapp-btn">
              Escríbenos por WhatsApp
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a href="#home" className="btn btn-outline" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              Volver al inicio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
