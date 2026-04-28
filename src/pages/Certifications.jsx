import PageHero from '../components/PageHero';
import AnimatedIcon from '../components/AnimatedIcon';

export default function Certifications() {
  return (
    <>
      <PageHero 
        tag="04 / Credentials"
        titlePrefix="Certifications &"
        titleHighlight="Learning"
        description="Not just a list of credentials — each cert is broken down by what it covers and how I've applied the knowledge in real environments."
      />

      <div className="section-wrap" style={{ paddingTop: 0 }}>
        <div className="cert-cases">

          {/* CEH */}
          <div className="cert-case glass reveal" data-tilt="2">
            <div className="cert-header">
              <AnimatedIcon name="sword" className="cert-emoji" />
              <div className="cert-header-text">
                <div className="cert-name">Certified Ethical Hacker (CEH v12)</div>
                <div className="cert-issuer">EC-COUNCIL · Global credential · 2024</div>
              </div>
              <div className="cert-status-badge">Certified</div>
            </div>
            <div className="cert-body">
              <div>
                <div className="cert-col-label">What the cert covers</div>
                <div className="domain-list">
                  <div className="domain-item">Reconnaissance: passive & active information gathering</div>
                  <div className="domain-item">Scanning networks, enumeration, vulnerability analysis</div>
                  <div className="domain-item">System hacking, privilege escalation, covering tracks</div>
                  <div className="domain-item">Web application attacks (OWASP Top 10)</div>
                  <div className="domain-item">Social engineering, session hijacking, evading IDS</div>
                  <div className="domain-item">Penetration testing methodology &amp; report writing</div>
                </div>
              </div>
              <div>
                <div className="cert-col-label">How I've applied it</div>
                <div className="application-text">
                  The structured methodology from CEH directly informed how I approach CTF challenges and lab assessments — starting from <strong>reconnaissance before exploitation</strong>, never jumping straight to tools.
                  The web application modules gave me grounding for Burp Suite use in HackTheBox web challenges. The report-writing emphasis shaped how I document all lab work: findings before impact, impact before remediation.
                </div>
              </div>
            </div>
            <div className="cert-footer">
              <span className="tag">Penetration Testing</span>
              <span className="tag">Ethical Hacking</span>
              <span className="tag">Vulnerability Analysis</span>
              <span className="tag">Web App Security</span>
              <span className="tag">Report Writing</span>
            </div>
          </div>

          {/* CND */}
          <div className="cert-case glass reveal" data-tilt="2" data-delay="80">
            <div className="cert-header">
              <AnimatedIcon name="shield" className="cert-emoji" />
              <div className="cert-header-text">
                <div className="cert-name">Certified Network Defender (CND v3)</div>
                <div className="cert-issuer">EC-COUNCIL · Global credential · 2024</div>
              </div>
              <div className="cert-status-badge">Certified</div>
            </div>
            <div className="cert-body">
              <div>
                <div className="cert-col-label">What the cert covers</div>
                <div className="domain-list">
                  <div className="domain-item">Network security fundamentals &amp; threat landscape</div>
                  <div className="domain-item">Network perimeter defense — firewalls, IDS/IPS, VPNs</div>
                  <div className="domain-item">Endpoint security, patch management, hardening</div>
                  <div className="domain-item">Security monitoring, log management, SIEM</div>
                  <div className="domain-item">Incident detection, response, and recovery procedures</div>
                  <div className="domain-item">Risk management &amp; compliance frameworks</div>
                </div>
              </div>
              <div>
                <div className="cert-col-label">How I've applied it</div>
                <div className="application-text">
                  CND gave me the <strong>defensive counterpart to CEH</strong>. The firewall and segmentation modules directly informed my home lab pfSense configuration — I approached VLAN design with a deliberate threat model rather than just topology convenience. The SIEM modules gave me enough grounding to set up Elastic with structured detection goals rather than just "log everything."
                </div>
              </div>
            </div>
            <div className="cert-footer">
              <span className="tag">Network Defense</span>
              <span className="tag">Firewall Policy</span>
              <span className="tag">SIEM</span>
              <span className="tag">Incident Response</span>
              <span className="tag">Risk Management</span>
            </div>
          </div>

          {/* Google IT */}
          <div className="cert-case glass reveal" data-tilt="2" data-delay="160">
            <div className="cert-header">
              <AnimatedIcon name="tool" className="cert-emoji" />
              <div className="cert-header-text">
                <div className="cert-name">Google IT Support Professional Certificate</div>
                <div className="cert-issuer">Google · Coursera · 2023</div>
              </div>
              <div className="cert-status-badge">Certified</div>
            </div>
            <div className="cert-body">
              <div>
                <div className="cert-col-label">What the cert covers</div>
                <div className="domain-list">
                  <div className="domain-item">Networking fundamentals — TCP/IP, DNS, DHCP</div>
                  <div className="domain-item">Operating system administration (Linux &amp; Windows)</div>
                  <div className="domain-item">System troubleshooting and hardware support</div>
                  <div className="domain-item">Security basics — encryption, AAA, CIA triad</div>
                  <div className="domain-item">IT automation fundamentals with Python</div>
                </div>
              </div>
              <div>
                <div className="cert-col-label">Why it matters for security</div>
                <div className="application-text">
                  Security work is built on a foundation of understanding how systems actually operate. This program gave me <strong>solid networking and OS fundamentals</strong> — before I could exploit vulnerabilities or write detection rules, I needed to understand what normal looked like. That grounding now makes my security work more precise.
                </div>
              </div>
            </div>
            <div className="cert-footer">
              <span className="tag">Networking</span>
              <span className="tag">Linux Admin</span>
              <span className="tag">Troubleshooting</span>
              <span className="tag">Python Basics</span>
            </div>
          </div>

        </div>
      </div>

      {/* WHAT'S NEXT */}
      <section>
        <div className="section-wrap">
          <div className="section-header reveal">
            <span className="section-num">+</span>
            <h2 className="section-title">Certification Roadmap</h2>
            <div className="section-line"></div>
          </div>
          <div className="roadmap reveal" data-delay="0">
            <div className="roadmap-item glass">
              <span className="roadmap-status active">// Active</span>
              <div>
                <div className="roadmap-cert">CompTIA Security+</div>
                <div className="roadmap-desc">Industry-standard baseline — widely required by employers and DoD 8570 compliant</div>
              </div>
            </div>
            <div className="roadmap-item glass">
              <span className="roadmap-status planned">// Planned</span>
              <div>
                <div className="roadmap-cert">eJPT (eLearnSecurity)</div>
                <div className="roadmap-desc">Hands-on penetration testing cert with a real exam network — no multiple choice</div>
              </div>
            </div>
            <div className="roadmap-item glass">
              <span className="roadmap-status planned">// Planned</span>
              <div>
                <div className="roadmap-cert">OSCP (Offensive Security)</div>
                <div className="roadmap-desc">Industry gold standard for penetration testing — 24-hour hands-on exam</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
