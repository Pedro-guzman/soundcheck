import './MusicSection.css';
import { Music, Disc3, Radio } from 'lucide-react';
import { FaSpotify, FaApple } from 'react-icons/fa';
import { useRef, useState } from 'react';

const MusicSection = () => {
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  // detectar móviles
  const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const startFadeOut = () => {
    const audio = audioRef.current;
    if (!audio) return;

    let steps = 20;
    let stepTime = 50;
    let volumeStep = audio.volume / steps;

    fadeIntervalRef.current = setInterval(() => {
      try {
        if (audio.volume > volumeStep) {
          audio.volume -= volumeStep;
        } else {
          audio.volume = 0;
          audio.pause();
          setIsPlaying(false);
          clearInterval(fadeIntervalRef.current);
        }
      } catch (e) {
        audio.pause();
        setIsPlaying(false);
        clearInterval(fadeIntervalRef.current);
      }
    }, stepTime);
  };

  const playAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      clearInterval(fadeIntervalRef.current);
      clearTimeout(timeoutRef.current);

      audio.currentTime = 0;
      audio.volume = 1;

      await audio.play();
      setIsPlaying(true);

      if (isMobile) {
        timeoutRef.current = setTimeout(() => {
          audio.pause();
          setIsPlaying(false);
        }, 10000);
      } else {
        timeoutRef.current = setTimeout(startFadeOut, 10000);
      }

    } catch (error) {
      console.error("Error al reproducir:", error);
    }
  };

  const pauseAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    setIsPlaying(false);

    clearInterval(fadeIntervalRef.current);
    clearTimeout(timeoutRef.current);
  };

  const restartAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    clearInterval(fadeIntervalRef.current);
    clearTimeout(timeoutRef.current);

    audio.currentTime = 0;
    audio.volume = 1;

    playAudio();
  };

  return (
    <section id="music" className="music-section">
      <div className="container">
        <h2 className="section-title">Nuestra <span>Música</span></h2>
        <div className="section-divider"></div>

        <div className="music-content">
          <div className="music-info">
            <span className="repertoire-badge">Pop Indie & Música Original</span>
            <h3 className="music-heading">Sonido potente, auténtico y directo al corazón</h3>
            <p className="music-desc">
              Un espectáculo diseñado para conectar. Interpretamos la mejor selección de música original y pop indie recopilada en nuestro proyecto <strong>"Canciones de Apego"</strong>.
            </p>

            <ul className="music-list">
              <li>
                <div className="list-icon-wrapper coral"><Disc3 size={18} /></div>
                <span><strong>Primer sencillo original:</strong> "No es un tiempo"</span>
              </li>
              <li>
                <div className="list-icon-wrapper teal"><Radio size={18} /></div>
                <span><strong>EP Original:</strong> "Canciones de apego y otros temas dolorosos"</span>
              </li>
            </ul>

            <div className="streaming-links">
              <span className="streaming-label">Escúchanos en:</span>
              <div className="platform-badges">
                <a href="#music" className="platform-btn spotify" title="Spotify">
                  <FaSpotify size={20} /> Spotify
                </a>
                <a href="#music" className="platform-btn apple" title="Apple Music">
                  <FaApple size={20} /> Apple Music
                </a>
              </div>
            </div>
          </div>

          <div className="audio-player-container">
            <div className="audio-player-card">
              <div className="audio-header">
                <div className="disc-wrapper">
                  <Disc3
                    size={54}
                    className={`spinning-disc ${isPlaying ? 'playing' : ''}`}
                  />
                </div>
                <div>
                  <span className="badge-preview">Preview Exclusivo</span>
                  <h4 className="song-title">"No es un tiempo"</h4>
                  <p className="artist-subtitle">Peter y Frank</p>
                </div>
              </div>

              <div className="audio-controls">
                <audio ref={audioRef} className="custom-audio">
                  <source src="/audio/no_es_un_tiempo.mp3" type="audio/mpeg" />
                  Tu navegador no soporta el reproductor de audio.
                </audio>

                <div className="controls-row">
                  {!isPlaying ? (
                    <button className="player-btn play-btn" onClick={playAudio}>
                      ▶ Reproducir
                    </button>
                  ) : (
                    <button className="player-btn pause-btn" onClick={pauseAudio}>
                      ⏸ Pausar
                    </button>
                  )}

                  <button className="player-btn restart-btn" onClick={restartAudio}>
                    ↺ Reiniciar
                  </button>
                </div>
              </div>

              <p className="audio-footer">
                ⚡ Fragmento de 10 segundos del primer sencillo de <strong>Peter y Frank</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;