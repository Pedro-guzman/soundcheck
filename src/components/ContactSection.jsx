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

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" id="name" placeholder="Tu Nombre completo" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder="Correo electrónico" required />
            </div>
            <div className="form-group">
              <textarea id="message" rows="5" placeholder="Cuéntanos sobre tu evento..." required></textarea>
            </div>
            <button type="submit" className="btn">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
