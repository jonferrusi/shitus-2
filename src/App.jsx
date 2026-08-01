import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import Gallery from './components/Gallery.jsx';
import Location from './components/Location.jsx';
import Testimonials from './components/Testimonials.jsx';
import Reservations from './components/Reservations.jsx';
import Footer from './components/Footer.jsx';
import StickyCTA from './components/StickyCTA.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal-950">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Location />
        <Reservations />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
