import './AboutSection.css';

const AboutSection = () => {
  const members = [
    {
      name: 'Frank',
      role: 'Baterista & Percusión',
      img: '/images/frank_vista_arriba.jpeg',
      tag: 'Ritmo'
    },
    {
      name: 'Pedro',
      role: 'Guitarrista & Voz Principal',
      img: '/images/peter_vista_arriba.jpeg',
      tag: 'Voz & Guitarra'
    }
  ];

  return (
    <section id="about" className="about-section container">
      <h2 className="section-title">Nuestra <span>Historia</span></h2>
      <div className="section-divider"></div>

      <div className="about-content">
        <div className="about-text-card">
          <p className="lead-text">
            <strong>Peter y Frank</strong> es más que una banda, es un proyecto familiar nacido de la pasión por la música en vivo.
          </p>
          <p>
            Formado por dos hermanos, nuestro sello combina Pop Indie con una mezcla de sonidos originales recopilados en nuestro proyecto <strong>"Canciones de Apego"</strong>.
          </p>
          <p>
            Llevamos un sonido fresco, enérgico y auténtico a cada bar, foro y festival que visitamos.
          </p>
        </div>

        <div className="members-grid">
          {members.map((member, index) => (
            <div className="member-card" key={index}>
              <div className="member-img-wrapper">
                <img src={member.img} alt={`Peter y Frank - ${member.name}`} className="member-img" />
                <div className="member-tag-badge">{member.tag}</div>
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
