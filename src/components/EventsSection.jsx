import './EventsSection.css';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

const EventsSection = () => {
  const events = [
    { date: '13 FEB', title: 'La Molienda', location: 'Guadalajara, Jalisco', type: 'Restaurante / Show' },
    { date: '07 MAR', title: 'C3 Stage', location: 'Guadalajara, Jalisco', type: 'Foro de Conciertos' },
    { date: '18 ABR', title: 'Ala Negra Capital Norte', location: 'Zapopan, Jalisco', type: 'Bar & Live Music' },
  ];

  return (
    <section id="events" className="events-section container">
      <h2 className="section-title">Próximos <span>Eventos</span></h2>
      <p className="section-subtitle">Acompáñanos en vivo y vive la experiencia de Peter y Frank.</p>
      <div className="section-divider"></div>

      <div className="timeline">
        {events.map((evt, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-date">
              <span className="date-badge">{evt.date}</span>
            </div>
            <div className="timeline-content">
              <h3 className="evt-title">{evt.title}</h3>
              <p className="evt-location">
                <MapPin size={16} className="evt-icon" /> {evt.location}
              </p>
              <span className="evt-badge">{evt.type}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="events-cta text-center">
        <p>¿Quieres llevar a Peter y Frank a tu foro, bar o evento privado?</p>
        <a href="#contact" className="btn btn-teal">
          Consultar Disponibilidad <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
};

export default EventsSection;
