import './MusicSection.css';
import { Music, Disc3 } from 'lucide-react';
import { useRef, useState } from 'react';

const MusicSection = () => {
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const startFadeOut = () => {
    const audio = audioRef.current;

    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume > 0.05) {
        audio.volume -= 0.05;
      } else {
        audio.volume = 0;
        audio.pause();
        setIsPlaying(false);
        clearInterval(fadeIntervalRef.current);
      }
    }, 200);
  };

  const playAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      clearInterval(fadeIntervalRef.current);
      clearTimeout(timeoutRef.current);

      audio.volume = 1;

      await audio.play();
      setIsPlaying(true);

      // iniciar fade después de 15s
      timeoutRef.current = setTimeout(startFadeOut, 15000);

    } catch (err) {
      console.error("Error al reproducir:", err);
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
            </p>
            <ul className="music-list">
              <li><Music size={18} className="icon" /> Covers (Caifanes, Soda Stereo, Enanitos Verdes)</li>
              <li><Disc3 size={18} className="icon" /> "Tiempo perdido"</li>
              <li><Disc3 size={18} className="icon" /> EP en producción</li>
            </ul>
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
                <audio ref={audioRef}>
                  <source src="/audio/tiempo_perdido.mp3" type="audio/mpeg" />
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
                Escucha un fragmento de nuestro sencillo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;