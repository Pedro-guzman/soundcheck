import './HeroSection.css';
import { Play, Music, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="hero-container">
      <div className="hero-bg-shapes">
        <div className="shape shape-teal"></div>
        <div className="shape shape-coral"></div>
      </div>
      <div className="hero-content">
        <div className="logo-card-wrapper">
          <div className="hero-logo-badge">
            <img src="/images/logo.jpg" alt="Peter y Frank Logo" className="hero-logo-img" />
          </div>
          <span className="album-tag">Canciones de Apego</span>
        </div>

        <h1 className="hero-title">
          Peter <span className="highlight-coral">y</span> Frank
        </h1>
        <p className="hero-subtitle">
          Pop Indie.
        </p>

        <div className="hero-btns">
          <a href="#music" className="btn btn-teal">
            <Music size={20} /> Escuchar Música
          </a>
          <a href="#contact" className="btn btn-coral">
            <Calendar size={20} /> Contrátanos
          </a>
          <a href="#videos" className="btn btn-outline">
            <Play size={20} /> Ver Videos
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
