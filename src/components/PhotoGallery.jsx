import './PhotoGallery.css';

const PhotoGallery = () => {
  const photos = [
    { src: '/images/frank_bateria2.jpeg', alt: 'Peter y Frank - Batería en vivo', caption: 'Batería & Poder' },
    { src: '/images/foto9.jpeg', alt: 'Peter y Frank - Escenario', caption: 'Energía en Escenario' },
    { src: '/images/pedro_guitarra.jpeg', alt: 'Peter y Frank - Guitarra', caption: 'Solos & Voz' },
    { src: '/images/foto1.jpeg', alt: 'Peter y Frank - Concierto', caption: 'Noche de Rock' },
    { src: '/images/foto3.jpeg', alt: 'Peter y Frank - En Vivo', caption: 'En Vivo' },
    { src: '/images/foto8.jpeg', alt: 'Peter y Frank - En vivo', caption: 'Canciones de Apego' },
  ];

  return (
    <section id="gallery" className="gallery-section container">
      <h2 className="section-title">Nuestra <span>Galería</span></h2>
      <p className="section-subtitle">Momentos capturados en el escenario y en vivo.</p>
      <div className="section-divider"></div>

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div className="photo-card" key={index}>
            <div className="photo-wrapper">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="photo-overlay">
                <span className="photo-caption">{photo.caption}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
