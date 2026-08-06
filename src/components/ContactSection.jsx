import './ContactSection.css';
import { ArrowUp } from 'lucide-react';
import { FaInstagram, FaTiktok, FaYoutube, FaSpotify, FaApple } from 'react-icons/fa';

const ContactSection = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contacto & <span>Redes</span></h2>
        <p className="section-subtitle">¿Listo para llevar la música de Peter y Frank a tu evento?</p>
        <div className="section-divider"></div>

        <div className="contact-card">
          <div className="contact-info">
            <div className="brand-badge-wrapper">
              <img src="/images/logo.jpg" alt="Peter y Frank Logo" className="contact-logo" />
              <div>
                <h3 className="contact-brand-title">Peter y Frank</h3>
                <p className="contact-brand-sub">Rock en Español & Canciones de Apego</p>
              </div>
            </div>

            <p className="contact-desc">
              Estamos disponibles para conciertos, eventos privados, festivales y presentaciones en bar. ¡Síguenos y contáctanos a través de nuestras redes sociales!
            </p>
          </div>

          <div className="socials-box">
            <h4 className="socials-heading">Síguenos & Escúchanos</h4>

            <div className="social-grid">
              <a href="https://www.instagram.com/peter_frank_music?igsh=MWhvcmszODllb3p3bA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="social-tile instagram">
                <FaInstagram size={26} />
                <span>Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@peter.y.frank?_r=1&_t=ZS-98fCyjiJ4IX" target="_blank" rel="noreferrer" className="social-tile tiktok">
                <FaTiktok size={24} />
                <span>TikTok</span>
              </a>
              <a href="https://youtube.com/@soundcheck_mx-h9y?si=GXNTGXNVg-AQYScE" target="_blank" rel="noreferrer" className="social-tile youtube">
                <FaYoutube size={26} />
                <span>YouTube</span>
              </a>
              <a href="#music" className="social-tile spotify">
                <FaSpotify size={26} />
                <span>Spotify</span>
              </a>
              <a href="#music" className="social-tile apple">
                <FaApple size={26} />
                <span>Apple Music</span>
              </a>
            </div>

            <div className="back-top-wrapper">
              <button onClick={scrollToTop} className="back-top-btn">
                <ArrowUp size={18} /> Volver arriba
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
