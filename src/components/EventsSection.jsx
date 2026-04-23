import './EventsSection.css';
import { MapPin, Calendar } from 'lucide-react';

const EventsSection = () => {
  const events = [
    { date: '13 FEB', title: 'La Molienda', location: 'Guadalajara, Jalisco', type: 'Restaurante' },
    { date: '07 MAR', title: 'C3 Stage', location: 'Guadalajara, Jalisco', type: 'Foro' },
    { date: '18 ABR', title: 'Ala Negra Capital Norte', location: 'Zapopan, Jalisco', type: 'Bar' },
  ];

  return (
    <section id="events" className="events-section container">
      <h2 className="section-title">En <span>Vivo</span></h2>
      <p className="section-subtitle">Nuestra experiencia en los mejores lugares.</p>
      
      <div className="timeline">
        {events.map((evt, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-date">
              <h3>{evt.date}</h3>
            </div>
            <div className="timeline-content">
              <h4>{evt.title}</h4>
              <p className="evt-location"><MapPin size={16} className="evt-icon"/> {evt.location}</p>
              <span className="evt-badge">{evt.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
