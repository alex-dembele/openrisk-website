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
      number: { value: 30, density: { enable: true, area: 800 } },
      color: { value: ["#ffffff", "#06B6D4", "#A855F7"] }, // Cyan et violet pour vibe cyber
      shape: { type: "circle" },
      opacity: { value: 0.3, random: true },
      size: { value: 2, random: true },
      links: { enable: true, distance: 200, color: "#06B6D4", opacity: 0.2, width: 1 },
      move: { enable: true, speed: 1, direction: "none", random: true, straight: false, outModes: { default: "out" } }
    },
    interactivity: { events: { onHover: { enable: true, mode: "attract" }, onClick: { enable: true, mode: "push" } } },
    retina_detect: true,
    background: { color: { value: "transparent" } }
  };

  return (
    <ParallaxProvider>
      <div className="relative bg-gradient-to-br from-primary-blue to-dark-bg min-h-screen text-white overflow-hidden">
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0" />

        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-20 bg-black/30 backdrop-blur-md px-8 py-4 flex items-center justify-between rounded-b-xl shadow-neon">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-cyber-cyan">OpenRisk</span>
          </div>
          <div className="hidden md:flex space-x-6 text-gray-300">
            <a href="#features" className="hover:text-cyber-cyan">Features</a>
            <a href="#demo" className="hover:text-cyber-cyan">Demo</a>
            <a href="#testimonials" className="hover:text-cyber-cyan">Testimonials</a>
            <a href="#docs" className="hover:text-cyber-cyan">Docs</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-cyber-cyan">Discord</a>
            <a href="#" className="text-gray-300 hover:text-cyber-cyan">Login</a>
            <a href="https://github.com/alex-dembele/OpenRisk" className="bg-cyber-cyan px-4 py-2 rounded-full text-white font-semibold hover:bg-opacity-90 transition">Get Started →</a>
          </div>
        </nav>

        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center text-center relative z-10 px-4 pt-20">
          <Parallax speed={-10} className="hero-content max-w-5xl">
            <div className="flex flex-col items-center">
              <button className="bg-black/50 text-gray-300 px-4 py-2 rounded-full mb-4 flex items-center">
                Cybersecurity Risk Management <span className="ml-2">→ Learn how it works</span>
              </button>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyber-cyan to-cyber-violet">
                Secure Your Risks<br />with OpenRisk
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
                Open-source tool for risk registry and continuous automatic assessment. Protect your assets with real-time evaluation and seamless integrations.
              </p>
              {/* Illustration cyber au lieu de la main/téléphone */}
              <img 
                src="https://thumbs.dreamstime.com/b/abstract-cloud-padlock-icon-glowing-data-streams-illustrating-cybersecurity-themes-356279493.jpg" 
                alt="Cybersecurity cloud lock with data streams" 
                className="w-80 md:w-128 mb-8 shadow-neon rounded-3xl"
              />
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm text-gray-400">Open Source</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-sm text-gray-400">Continuous Assessment</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">Secure</p>
                  <p className="text-sm text-gray-400">Data Protection</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/alex-dembele/OpenRisk" className="bg-cyber-cyan px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition">Get Started →</a>
                <a href="#" className="bg-transparent border border-cyber-cyan px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyber-cyan/20 transition">Join Discord</a>
              </div>
            </div>
          </Parallax>
        </section>

        {/* Features */}
        <section id="features" className="features-section py-20 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyber-cyan to-cyber-violet">Key Features</h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            <div className="bento-item p-6 bg-black/50 backdrop-blur-md rounded-2xl shadow-neon border border-cyber-violet/30">
              <h3 className="text-2xl font-bold mb-2 text-cyber-cyan">Risk Registry</h3>
              <p className="text-gray-300">Centralized database for tracking and managing risks.</p>
            </div>
            <div className="bento-item p-6 bg-black/50 backdrop-blur-md rounded-2xl shadow-neon border border-cyber-violet/30">
              <h3 className="text-2xl font-bold mb-2 text-cyber-cyan">Continuous Evaluation</h3>
              <p className="text-gray-300">Automatic real-time assessments of threats.</p>
            </div>
            <div className="bento-item p-6 bg-black/50 backdrop-blur-md rounded-2xl shadow-neon border border-cyber-violet/30">
              <h3 className="text-2xl font-bold mb-2 text-cyber-cyan">Secure Integrations</h3>
              <p className="text-gray-300">Connect tools with end-to-end encryption.</p>
            </div>
          </div>
        </section>

        {/* Demo */}
        <Parallax speed={5} className="py-20 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyber-cyan to-cyber-violet">Interactive Demo</h2>
          <div className="container mx-auto px-4">
            <iframe
              src="https://openrisk-dashboard.vercel.app"
              className="w-full h-[600px] border-4 border-cyber-cyan rounded-2xl shadow-neon"
              title="OpenRisk Demo"
              allowFullScreen
            ></iframe>
          </div>
        </Parallax>

        {/* Testimonials */}
        <section className="testimonials-section py-20 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyber-cyan to-cyber-violet">User Testimonials</h2>
          <div className="flex overflow-x-auto space-x-6 px-4 container mx-auto snap-x snap-mandatory scrollbar-hide">
            <div className="testimonial min-w-[300px] p-6 bg-black/50 backdrop-blur-md rounded-2xl shadow-neon snap-center border border-cyber-violet/30">
              <p className="text-gray-300">"Game-changer for cybersecurity risk management!"</p>
              <span className="block mt-4 text-right text-gray-400">- CISO, Global Corp</span>
            </div>
            <div className="testimonial min-w-[300px] p-6 bg-black/50 backdrop-blur-md rounded-2xl shadow-neon snap-center border border-cyber-violet/30">
              <p className="text-gray-300">"Automated evaluations save us hours."</p>
              <span className="block mt-4 text-right text-gray-400">- Analyst, Enterprise</span>
            </div>
            <div className="testimonial min-w-[300px] p-6 bg-black/50 backdrop-blur-md rounded-2xl shadow-neon snap-center border border-cyber-violet/30">
              <p className="text-gray-300">"Best open-source risk registry tool."</p>
              <span className="block mt-4 text-right text-gray-400">- Dev, Startup</span>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center relative z-10 text-gray-300">
          <p>© 2025 OpenRisk | <a href="https://github.com/alex-dembele/OpenRisk" className="underline hover:text-cyber-cyan">GitHub</a> | <a href="/docs" className="underline hover:text-cyber-cyan">Docs</a></p>
        </footer>
      </div>
    </ParallaxProvider>
  );
}

export default App;