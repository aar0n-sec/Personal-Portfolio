import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Aurora from './components/Aurora';
import Particles from './components/Particles';
import Spotlight from './components/Spotlight';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function GlobalEffects() {
  const location = useLocation();

  useEffect(() => {
    // ── SCROLL REVEAL ──────────────────────────────────────────
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), (e.target.dataset.delay || 0) * 1);
          e.target.querySelectorAll('.bar-fill').forEach(b => b.classList.add('animate'));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    document.querySelectorAll('.tl-item').forEach(el => observer.observe(el));

    // ── 3D TILT ────────────────────────────────────────────────
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const intensity = parseFloat(card.dataset.tilt) || 6;
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const rx = ((y - r.height / 2) / r.height) * -intensity * 2;
      const ry = ((x - r.width / 2) / r.width) * intensity * 2;
      card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      card.style.transition = 'box-shadow .1s, border-color .3s';
    };

    const handleMouseLeave = (e) => {
      const card = e.currentTarget;
      card.style.transform = '';
      card.style.transition = 'all .5s cubic-bezier(0.4,0,0.2,1)';
    };

    const tiltElements = document.querySelectorAll('[data-tilt]');
    tiltElements.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    // ── STAGGER HELPER ─────────────────────────────────────────
    document.querySelectorAll('[data-stagger]').forEach((parent) => {
      const children = parent.querySelectorAll(parent.dataset.stagger);
      children.forEach((child, i) => {
        child.style.transitionDelay = `${i * 0.08}s`;
      });
    });

    return () => {
      observer.disconnect();
      tiltElements.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <Preloader />
      <Aurora />
      <Particles />
      <Spotlight />
      <Navigation />
      
      <div className="page-wrap">
        <GlobalEffects />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}
