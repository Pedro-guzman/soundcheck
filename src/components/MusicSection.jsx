import './MusicSection.css';
import { Music, Disc3 } from 'lucide-react';
import { useRef, useState } from 'react';

const MusicSection = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPreview = () => {
    const audio = audioRef.current;
    if (!audio) return;

    // Reiniciar audio
    audio.currentTime = 0;
    audio.volume = 1;
    audio.play();
    setIsPlaying(true);

    // Después de 15 segundos inicia fade out
    setTimeout(() => {
      let fadeInterval = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume -= 0.05;
        } else {
          audio.volume = 0;
          audio.pause();
          setIsPlaying(false);
          clearInterval(fadeInterval);
        }
      }, 200); // velocidad del fade
    }, 15000); // 15 segundos
  };

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
              <li><Music size={18} className="icon" /> Covers aclamados (Caifanes, Soda Stereo, Enanitos Verdes)</li>
              <li><Disc3 size={18} className="icon" /> Sencillo Original: "Tiempo perdido"</li>
              <li><Disc3 size={18} className="icon" /> EP en producción: "Canciones de apego y otros temas dolorosos"</li>
            </ul>
            <a href="#contact" className="btn" style={{ marginTop: '1.5rem' }}>
              Pide nuestro Setlist
            </a>
          </div>

          <div className="audio-player-container">
            <div className="audio-player-card">
              <div className="audio-header">
                <Disc3
                  size={48}
                  className={`spinning-disc ${isPlaying ? 'playing' : ''}`}
                />
                <div>
                  <h4>Adelanto Exclusivo</h4>
                  <p className="song-title">"Tiempo Perdido"</p>
                </div>
              </div>

              <div className="audio-controls">
                <audio ref={audioRef} className="custom-audio">
                  <source src="/audio/tiempo_perdido_fragmento.mp3" type="audio/mpeg" />
                  Tu navegador no soporta el reproductor de audio.
                </audio>

                <button
                  className="btn"
                  onClick={playPreview}
                  disabled={isPlaying}
                >
                  {isPlaying ? 'Reproduciendo...' : '▶ Escuchar fragmento'}
                </button>
              </div>

              <p className="audio-footer">
                Escucha un fragmento de nuestro primer sencillo original antes de su lanzamiento oficial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;