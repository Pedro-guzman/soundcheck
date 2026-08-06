import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <img src="/images/logo.jpg" alt="Peter y Frank Logo" className="footer-logo-img" />
          <div>
            <h2 className="footer-title">Peter <span className="highlight">y</span> Frank</h2>
            <p className="footer-tagline">Rock en Español & Canciones de Apego</p>
          </div>
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} Peter y Frank. Todos los derechos reservados.</p>
          <p className="designer-tag">
            Hecho con pasión para brillar en cada escenario.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
