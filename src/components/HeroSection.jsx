import './HeroSection.css';
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          LA ENERGÍA DEL <span className="highlight">ROCK</span> EN TU EVENTO
        </h1>
        <p className="hero-subtitle">
          Somos el soundtrack en vivo que tu fiesta, bar o festival necesita.
        </p>
        <div className="hero-btns">
          <a href="#contact" className="btn">Contrátanos</a>
          <a href="#videos" className="btn btn-outline">
            Ver Videos <Play size={20} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
