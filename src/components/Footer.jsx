import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <h2>SOUND<span>CHECK</span></h2>
          <p>Tu banda de Rock en Español.</p>
        </div>
        <div className="footer-links">
          <p>&copy; {new Date().getFullYear()} Soundcheck. Todos los derechos reservados.</p>
          <div className="designer-tag">
            Diseñado para brillar en el escenario.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
