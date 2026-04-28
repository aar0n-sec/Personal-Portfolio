import { Link } from 'react-router-dom';
import AnimatedIcon from '../components/AnimatedIcon';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="hero">
        <div className="hero-grid"></div>
        <div className="hero-inner">
          <div className="hero-eyebrow"><span className="dot"></span>Available for opportunities</div>
          <h1 className="hero-name">
            <span className="grad" data-text="Aaron">Aaron</span>
          </h1>
          <p className="hero-tagline">Security Analyst · Vulnerability Assessment &amp; Network Defense</p>
          <p className="hero-value">I find vulnerabilities, reduce attack surface, and secure systems.</p>
          <div className="hero-ctas">
            <Link to="/projects" className="btn btn-primary"><span>View My Work ↓</span></Link>
            <Link to="/contact" className="btn btn-ghost"><span>Get In Touch</span></Link>
            <a href="/Aaron_Resume.pdf" className="btn btn-ghost" download><span>↓ Download Resume</span></a>
          </div>
        </div>
        <div className="hire-badge">
          <div className="hire-card glass">
            <div className="hire-num">CEH</div>
            <div className="hire-lbl">v12 Certified</div>
          </div>
          <div className="hire-card glass">
            <div className="hire-num">CND</div>
            <div className="hire-lbl">v3 Certified</div>
          </div>
          <div className="hire-card glass">
            <div className="hire-num">3+</div>
            <div className="hire-lbl">Credentials</div>
          </div>
        </div>
        <div className="scroll-hint"><span className="scroll-line"></span>scroll to explore</div>
      </section>

      {/* HIGHLIGHTS */}
      <section id="highlights">
        <div className="hl-card glass reveal" data-delay="0">
          <AnimatedIcon name="sword" className="hl-icon" />
          <div className="hl-label">Offensive</div>
          <div className="hl-title">Penetration Testing & Vuln Assessment</div>
          <div className="hl-desc">Hands-on assessment using Nmap, Metasploit, Burp Suite and Nessus across lab and internship environments.</div>
          <Link to="/projects" className="hl-link">See proof of work →</Link>
        </div>
        <div className="hl-card glass reveal" data-delay="80">
          <AnimatedIcon name="shield" className="hl-icon" />
          <div className="hl-label">Defensive</div>
          <div className="hl-title">Network Defense & Incident Response</div>
          <div className="hl-desc">VLAN segmentation, firewall policy, SIEM deployment (Splunk/Elastic), and structured IR runbooks.</div>
          <Link to="/experience" className="hl-link">View experience →</Link>
        </div>
        <div className="hl-card glass reveal" data-delay="160">
          <AnimatedIcon name="radar" className="hl-icon" />
          <div className="hl-label">Architecture</div>
          <div className="hl-title">Secure Network Design & Access Control</div>
          <div className="hl-desc">LAN/WAN architecture, RBAC implementation, PKI, and documented audit-ready security configurations.</div>
          <Link to="/about" className="hl-link">About me →</Link>
        </div>
      </section>

      {/* CERT STRIP */}
      <section id="cert-strip">
        <div className="cert-pill glass reveal">
          <AnimatedIcon name="sword" className="badge" />
          <div><div className="cert-name">Certified Ethical Hacker</div><div className="cert-body">EC-Council · CEH v12</div></div>
        </div>
        <div className="cert-pill glass reveal" data-delay="60">
          <AnimatedIcon name="shield" className="badge" />
          <div><div className="cert-name">Certified Network Defender</div><div className="cert-body">EC-Council · CND v3</div></div>
        </div>
        <div className="cert-pill glass reveal" data-delay="120">
          <AnimatedIcon name="tool" className="badge" />
          <div><div className="cert-name">Google IT Support</div><div className="cert-body">Google · Professional Certificate</div></div>
        </div>
      </section>
    </>
  );
}
