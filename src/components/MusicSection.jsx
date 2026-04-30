import './MusicSection.css';
import { Music, Disc3 } from 'lucide-react';
import { useRef, useState } from 'react';

const MusicSection = () => {
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  // detectar móviles
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

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
        // fallback para móviles que bloquean volumen
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

      // ⏱️ 10 segundos
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

        <div className="music-content">
          <div className="music-info">
            <h3>Rock Pop Original & Covers</h3>
            <p className="music-desc">
              Nuestro repertorio está diseñado para mantener la energía al máximo.
              Combinamos los clásicos más grandes del rock en español con nuestras canciones originales.
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
                  <source src="/audio/Tiempo_perdido.mp3" type="audio/mpeg" />
                  Tu navegador no soporta el reproductor de audio.
                </audio>

                <div className="controls">
                  {!isPlaying ? (
                    <button className="btn play" onClick={playAudio}>
                      ▶ Play
                    </button>
                  ) : (
                    <button className="btn pause" onClick={pauseAudio}>
                      ⏸ Pause
                    </button>
                  )}

                  <button className="btn restart" onClick={restartAudio}>
                    🔄 Reiniciar
                  </button>
                </div>
              </div>

              <p className="audio-footer">
                Escucha un fragmento de 10 segundos de nuestro primer sencillo original.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;