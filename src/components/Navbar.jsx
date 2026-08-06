import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <img src="/images/logo.jpg" alt="Peter y Frank Logo" className="logo-img" />
          <span className="logo-text">Peter <span className="highlight">y</span> Frank</span>
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={closeMenu}>Inicio</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={closeMenu}>Nosotros</a>
          </li>
          <li className="nav-item">
            <a href="#music" className="nav-links" onClick={closeMenu}>Música</a>
          </li>
          <li className="nav-item">
            <a href="#videos" className="nav-links" onClick={closeMenu}>Videos</a>
          </li>
          <li className="nav-item">
            <a href="#gallery" className="nav-links" onClick={closeMenu}>Galería</a>
          </li>
          <li className="nav-item">
            <a href="#events" className="nav-links" onClick={closeMenu}>Eventos</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links nav-cta" onClick={closeMenu}>Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
