import './VideoGallery.css';
import { FaYoutube } from 'react-icons/fa';

const VideoGallery = () => {
  const videos = [
    { title: 'En Vivo Bar 1', id: 'video_id_1' },
    { title: 'Cover Rock 1', id: 'video_id_2' },
    { title: 'Canción Original', id: 'video_id_3' }
  ];

  return (
    <section id="videos" className="video-section container">
      <h2 className="section-title">En <span>Acción</span></h2>
      <p className="section-subtitle">Mira nuestras últimas presentaciones y videoclips.</p>
      
      <div className="videos-grid">
        {videos.map((vid, idx) => (
          <div className="video-card" key={idx}>
            <div className="video-placeholder">
              <FaYoutube size={64} className="youtube-icon" />
              <p>Thumbnail {vid.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center" style={{ marginTop: '3rem' }}>
        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="btn btn-outline">Visita nuestro Canal</a>
      </div>
    </section>
  );
};

export default VideoGallery;
