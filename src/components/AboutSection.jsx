import './AboutSection.css';

const AboutSection = () => {
  const members = [
    {
      name: 'Francisco',
      role: 'Baterista',
      img: '/images/frank_bateria2.jpeg',
    },
    {
      name: 'Eduardo',
      role: 'Bajista y Vocalista',
      img: '/images/eduardo_bajo.JPG',
    },
    {
      name: 'Pedro',
      role: 'Guitarrista y Voz Principal',
      img: '/images/pedro_guitarra.jpeg',
    }
  ];

  return (
    <section id="about" className="about-section container">
      <h2 className="section-title">Nuestra <span>Historia</span></h2>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            <strong>Soundcheck</strong> es más que una banda, es un proyecto nacido en familia. Formado por tres hermanos apasionados por la música, nuestro objetivo es llevar la mejor energía a cada escenario que pisamos.
          </p>
          <p>
            Nos especializamos en interpretar los mejores himnos del <em>Rock en Español</em>, acompañados de un emocionante proyecto original de canciones de rock pop con un sonido fresco, moderno y potente. Si buscas una experiencia musical auténtica para tu evento o bar, nosotros somos la opción ideal.
          </p>
        </div>
        
        <div className="members-grid">
          {members.map((member, index) => (
            <div className="member-card" key={index}>
              <div className="member-img-wrapper">
                <img src={member.img} alt={member.name} className="member-img" />
                <div className="member-overlay">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
