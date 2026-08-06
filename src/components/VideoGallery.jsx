import './VideoGallery.css';
import { FaYoutube } from 'react-icons/fa';

const VideoGallery = () => {
  const videos = [
    { title: 'Prueba de Sonido en C3 Stage Guadalajara', id: '1nBjo4RNvUw', tag: 'En Vivo' },
    { title: 'Presentación en Vivo - Medley Rock en Español', id: 'Ob_75o4SbJc', tag: 'Concierto' },
    { title: 'Canción Original - Sesión en Estudio', id: '2PEsj6-9W28', tag: 'Original' }
  ];

  return (
    <section id="videos" className="video-section container">
      <h2 className="section-title">En <span>Acción</span></h2>
      <p className="section-subtitle">Mira nuestros últimos en vivo, pruebas de sonido y videoclips.</p>
      <div className="section-divider"></div>

      <div className="videos-grid">
        {videos.map((vid, idx) => (
          <div className="video-card-wrapper" key={idx}>
            <div className="video-card">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${vid.id}`}
                title={vid.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-meta">
              <span className="video-tag">{vid.tag}</span>
              <h3 className="video-title">{vid.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center" style={{ marginTop: '3.5rem' }}>
        <a href="https://youtube.com/@soundcheck_mx-h9y?si=GXNTGXNVg-AQYScE" target="_blank" rel="noreferrer" className="btn btn-coral">
          <FaYoutube size={20} /> Canal Oficial de YouTube
        </a>
      </div>
    </section>
  );
};

export default VideoGallery;
