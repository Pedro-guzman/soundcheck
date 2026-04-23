import './MusicSection.css';
import { Music, Disc3 } from 'lucide-react';

const MusicSection = () => {
  return (
    <section id="music" className="music-section">
      <div className="container">
        <h2 className="section-title">Nuestra <span>Música</span></h2>
        
        <div className="music-content">
          <div className="music-info">
            <h3>Rock Pop Original & Covers</h3>
            <p className="music-desc">
              Nuestro repertorio está diseñado para mantener la energía al máximo. Combinamos los clásicos más grandes del rock en español con nuestras canciones originales, logrando un setlist dinámico y explosivo.
            </p>
            <ul className="music-list">
              <li><Music size={18} className="icon"/> Covers aclamados (Caifanes, Soda Stereo, Enanitos Verdes)</li>
              <li><Disc3 size={18} className="icon"/> Sencillo Original: "Tiempo perdido"</li>
              <li><Disc3 size={18} className="icon"/> EP en producción: "Canciones de apego y otros temas dolorosos"</li>
            </ul>
            <a href="#contact" className="btn" style={{ marginTop: '1.5rem' }}>Pide nuestro Setlist</a>
          </div>
          
          <div className="spotify-placeholder">
            <div className="spotify-mockup">
              <div className="spotify-disc">
                <div className="inner-disc"></div>
              </div>
              <p>Escúchanos Próximamente en</p>
              <h4 style={{ color: '#1DB954', fontSize: '1.5rem' }}>Spotify</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
