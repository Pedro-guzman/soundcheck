import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import VideoGallery from './components/VideoGallery';
import PhotoGallery from './components/PhotoGallery';
import MusicSection from './components/MusicSection';
import EventsSection from './components/EventsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VideoGallery />
      <PhotoGallery />
      <MusicSection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
