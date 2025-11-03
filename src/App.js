import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Particles } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import 'tailwindcss/tailwind.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.fromTo('.hero-content > *', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
    gsap.fromTo('.bento-item', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, scrollTrigger: { trigger: '.features-section', start: 'top 80%' } });
    gsap.fromTo('.testimonial', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: '.testimonials-section', start: 'top 80%' } });
  }, []);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: 0 },
    particles: {
      number: { value: 50, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: "none", random: true, straight: false, outModes: { default: "out" } }
    },
    interactivity: { events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: true, mode: "push" } } },
    retina_detect: true
  };

  return (
    <ParallaxProvider>
      <div className="relative bg-gradient-to-br from-primary-blue to-dark-bg min-h-screen text-white overflow-hidden">
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0" />

        {/* Hero*/}
        <section className="min-h-screen flex items-center justify-center text-center relative z-10 px-4">
          <Parallax speed={-10} className="hero-content max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold-kinetic mb-4 neumorphic-hover animate-kinetic">OpenRisk</h1>
            <p className="text-xl md:text-3xl mb-8">Revolutionize Risk Management with Open Source Power</p>
            <a href="https://github.com/alex-dembele/OpenRisk" className="bg-accent-green px-8 py-4 rounded-full neumorphic-hover text-lg font-semibold hover:bg-opacity-90 transition">Start Now</a>
          </Parallax>
        </section>

        {/* Features */}
        <section className="features-section py-20 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-8">Key Features</h2>
          <div className="container mx-auto bento-grid px-4">
            <div className="bento-item p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg neumorphic-hover metal-shader">
              <h3 className="text-2xl font-bold mb-2">Seamless Sync</h3>
              <p>Auto-updates from global threats.</p>
            </div>
            <div className="bento-item p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg neumorphic-hover metal-shader">
              <h3 className="text-2xl font-bold mb-2">AI-Ready Dashboard</h3>
              <p>Customizable, immersive views.</p>
            </div>
            <div className="bento-item p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg neumorphic-hover metal-shader">
              <h3 className="text-2xl font-bold mb-2">Secure Integrations</h3>
              <p>Connect tools with ease and security.</p>
            </div>
            {/* Ajoutez plus pour bento flexibilité */}
          </div>
        </section>

        {/* Demo */}
        <Parallax speed={5} className="py-20 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-8">Interactive Demo</h2>
          <div className="container mx-auto px-4">
            <iframe
              src="https://openrisk-dashboard.vercel.app"
              className="w-full h-[600px] border-4 border-accent-green rounded-lg neumorphic-hover"
              title="OpenRisk Demo"
              allowFullScreen
            ></iframe>
          </div>
        </Parallax>

        {/* Testimonials */}
        <section className="testimonials-section py-20 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-8">User Testimonials</h2>
          <div className="flex overflow-x-auto space-x-6 px-4 container mx-auto snap-x snap-mandatory scrollbar-hide">
            <div className="testimonial min-w-[300px] p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg neumorphic-hover snap-center metal-shader">
              <p>"Game-changer for risk teams!"</p>
              <span className="block mt-4 text-right">- CISO, Global Corp</span>
            </div>
            <div className="testimonial min-w-[300px] p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg neumorphic-hover snap-center metal-shader">
              <p>"Intuitive and powerful."</p>
              <span className="block mt-4 text-right">- Analyst, Enterprise</span>
            </div>
            <div className="testimonial min-w-[300px] p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg neumorphic-hover snap-center metal-shader">
              <p>"Best open-source platform."</p>
              <span className="block mt-4 text-right">- Dev, Startup</span>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center relative z-10">
          <p>© 2025 OpenRisk | <a href="https://github.com/alex-dembele/OpenRisk" className="underline">GitHub</a> | <a href="/docs" className="underline">Docs</a></p>
        </footer>
      </div>
    </ParallaxProvider>
  );
}

export default App;