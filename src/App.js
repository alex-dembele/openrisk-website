import React, { useEffect } from 'react';
import gsap from 'gsap'; 
import { Particles } from '@tsparticles/react';
import { loadFull } from 'tsparticles'; 
import 'tailwindcss/tailwind.css';

function App() {
  useEffect(() => {
    gsap.fromTo('.hero-content > *', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
    gsap.fromTo('.feature', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, scrollTrigger: { trigger: '.features-section', start: 'top 80%' } });
    gsap.fromTo('.testimonial', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: '.testimonials-section', start: 'top 80%' } });
  }, []);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: 0 },
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: "none", random: true, straight: false, outModes: { default: "out" } }
    },
    interactivity: { events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: true, mode: "push" } } },
    detectRetina: true
  };

  return (
    <div className="relative bg-gradient-to-br from-primary-blue to-dark-bg min-h-screen text-white overflow-hidden">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0" />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center text-center relative z-10 px-4">
        <div className="hero-content max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 neumorphic-hover">OpenRisk</h1>
          <p className="text-xl md:text-3xl mb-8">Unified Risk & Threat Management – Open Source Excellence</p>
          <a href="https://github.com/youruser/OpenRisk" className="bg-accent-green px-8 py-4 rounded-full neumorphic-hover text-lg font-semibold hover:bg-opacity-90 transition">Get Started</a>
        </div>
      </section>

      {/* Features */}
      <section className="features-section py-20 relative z-10">
        <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
          <div className="feature p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg neumorphic-hover">
            <h3 className="text-2xl font-bold mb-2">Seamless Integrations</h3>
            <p>Connect OpenRMF, TheHive, Cortex, and OpenCTI effortlessly.</p>
          </div>
          <div className="feature p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg neumorphic-hover">
            <h3 className="text-2xl font-bold mb-2">Real-Time Sync</h3>
            <p>Automatic updates for risks, incidents, and threats.</p>
          </div>
          <div className="feature p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg neumorphic-hover">
            <h3 className="text-2xl font-bold mb-2">Custom Dashboard</h3>
            <p>Drag-and-drop widgets for personalized views.</p>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="py-20 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8">Live Demo</h2>
        <div className="container mx-auto px-4">
          <iframe
            src="https://openrisk-dashboard.vercel.app" 
            className="w-full h-[600px] border-4 border-accent-green rounded-lg neumorphic-hover"
            title="OpenRisk Dashboard Demo"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section py-20 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8">What Users Say</h2>
        <div className="flex overflow-x-auto space-x-6 px-4 container mx-auto snap-x snap-mandatory scrollbar-hide">
          <div className="testimonial min-w-[300px] p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg neumorphic-hover snap-center">
            <p>"Transformed our risk management!"</p>
            <span className="block mt-4 text-right">- CISO, Tech Corp</span>
          </div>
          <div className="testimonial min-w-[300px] p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg neumorphic-hover snap-center">
            <p>"Intuitive and powerful sync features."</p>
            <span className="block mt-4 text-right">- Security Analyst, Enterprise</span>
          </div>
          <div className="testimonial min-w-[300px] p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg neumorphic-hover snap-center">
            <p>"Best open-source tool for threats."</p>
            <span className="block mt-4 text-right">- DevOps Lead, Startup</span>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center relative z-10">
        <p>© 2025 OpenRisk | <a href="https://github.com/alex-dembele/OpenRisk" className="underline">GitHub</a> | <a href="/docs" className="underline">Documentation</a></p>
      </footer>
    </div>
  );
}

export default App;