import './PhotoGallery.css';

const PhotoGallery = () => {
  const photos = [
    '/images/frank_bateria2.jpeg',
    '/images/eduardo_bajo.JPG',
    '/images/pedro_guitarra.jpeg',
    '/images/foto1.jpeg',
    '/images/foto2.jpeg',
    '/images/foto3.jpeg',
    '/images/foto4.jpeg',
    '/images/foto5.jpeg',
    '/images/foto6.jpeg',
    '/images/foto7.jpeg',
    '/images/foto8.jpeg',
    '/images/foto9.jpeg',
    '/images/foto10.jpeg',
    '/images/foto11.jpeg',
    '/images/foto12.jpeg',
    '/images/foto13.jpeg',
    '/images/foto14.jpeg',
    '/images/foto15.jpeg',
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
