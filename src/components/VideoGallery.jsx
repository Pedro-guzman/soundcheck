import './VideoGallery.css';
import { FaYoutube } from 'react-icons/fa';

const VideoGallery = () => {
  const videos = [
    { title: 'Prueba de sonido en C3 Stage Guadalajara', id: 'cl-CpzpnZFI', type: 'youtube' },
    { title: 'En Vivo Bar 1', id: 'video_id_2' },
    { title: 'Canción Original', id: 'video_id_3' }
  ];

  return (
    <section id="videos" className="video-section container">
      <h2 className="section-title">En <span>Acción</span></h2>
      <p className="section-subtitle">Mira nuestras últimas presentaciones y videoclips.</p>
      
      <div className="videos-grid">
        {videos.map((vid, idx) => (
          <div className="video-card" key={idx}>
            {vid.type === 'youtube' ? (
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${vid.id}`} 
                title={vid.title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              ></iframe>
            ) : (
              <div className="video-placeholder">
                <FaYoutube size={64} className="youtube-icon" />
                <p>Thumbnail {vid.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center" style={{ marginTop: '3rem' }}>
        <a href="https://youtube.com/@soundcheck_mx-h9y?si=GXNTGXNVg-AQYScE" target="_blank" rel="noreferrer" className="btn btn-outline">Visita nuestro Canal</a>
      </div>
    </section>
  );
};

export default VideoGallery;
