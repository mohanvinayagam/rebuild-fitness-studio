import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Programs from './components/Programs';
import Memberships from './components/Memberships';
import WhyRebuild from './components/WhyRebuild';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Transformations from './components/Transformations';
import OpeningHours from './components/OpeningHours';
import CTA from './components/CTA';
import Location from './components/Location';
import EnquiryForm from './components/EnquiryForm';
import BMICalculator from './components/BMICalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Programs />
        <Memberships />
        <WhyRebuild />
        <Facilities />
        <Gallery />
        <Transformations />
        <OpeningHours />
        <CTA />
        <Location />
        <BMICalculator />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
