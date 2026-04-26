import './PhotoGallery.css';

const PhotoGallery = () => {
  const photos = [
    '/images/frank_bateria2.jpeg',
    '/images/foto9.jpeg',
    '/images/bajo2.jpeg',
  ];

  return (
    <section id="gallery" className="gallery-section container">
      <h2 className="section-title">Nuestra <span>Galería</span></h2>

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div className="photo-item" key={index}>
            <img src={photo} alt={`Soundcheck momento ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
