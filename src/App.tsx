import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { TechnicalExpertise } from './sections/TechnicalExpertise';
import { Architecture } from './sections/Architecture';
import { Projects } from './sections/Projects';
import { AIExpertise } from './sections/AIExpertise';
import { Services } from './sections/Services';
import { WhyWorkWithMe } from './sections/WhyWorkWithMe';
import { Contact } from './sections/Contact';
import { TechBackground3D } from './components/3d/TechBackground3D';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#070a10] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 w-full max-w-[100vw] overflow-x-clip">
      {/* Ambient 3D Particle Constellation Background */}
      <TechBackground3D />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow z-10 w-full max-w-full space-y-8 sm:space-y-12 overflow-x-clip">
        <Hero />
        <About />
        <TechnicalExpertise />
        <Architecture />
        <Projects />
        <AIExpertise />
        <Services />
        <WhyWorkWithMe />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
