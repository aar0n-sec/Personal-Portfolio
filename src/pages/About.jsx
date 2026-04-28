import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import AnimatedIcon from '../components/AnimatedIcon';

export default function About() {
  return (
    <>
      <PageHero 
        tag="01 / Profile"
        titlePrefix="About"
        titleHighlight="Me"
        description="Cybersecurity analyst bridging the gap between vulnerability discovery and practical remediation. Trained offensively. Thinking defensively."
      />

      <div className="section-wrap" style={{ paddingTop: 0 }}>
        <div className="about-layout">
          <div className="about-text reveal">
            <p>
              I'm a <strong>cybersecurity analyst</strong> with hands-on experience across both offensive and defensive security disciplines.
              My work focuses on translating technical findings into <span className="hl-mono">actionable risk reduction</span> — every vulnerability report, access policy, and audit trail is written to be acted on, not filed away.
            </p>
            <p>
              Trained in <strong>penetration testing methodology</strong> (CEH v12), network defense architecture (CND v3), and structured audit frameworks.
              I treat security engineering as both a craft and a strategic function.
            </p>
            <p>
              I've deployed SIEM environments, configured VLAN-segmented networks, written incident response runbooks, and completed 20+ CTF challenges across HackTheBox and TryHackMe — all documented with write-ups designed to communicate methodology, not just results.
            </p>
            <p>
              Currently seeking roles in <strong>security operations, penetration testing, or network defense</strong> where technical precision meets real-world impact.
            </p>
            <div style={{ marginTop: 28 }}>
              <Link to="/contact" className="btn btn-primary"><span>Get In Touch →</span></Link>
              &nbsp;&nbsp;
              <a href="/Aaron_Resume.pdf" className="btn btn-ghost" download><span>↓ Resume</span></a>
            </div>
          </div>
          
          <div className="info-stack reveal" data-delay="80">
            <div className="info-card glass">
              <AnimatedIcon name="target" className="info-icon" />
              <div><div className="info-lbl">Specialization</div><div className="info-val">Offensive &amp; Defensive Security</div></div>
            </div>
            <div className="info-card glass">
              <AnimatedIcon name="badge" className="info-icon" />
              <div><div className="info-lbl">Lead Certifications</div><div className="info-val">CEH v12 · CND v3 · Google IT</div></div>
            </div>
            <div className="info-card glass">
              <AnimatedIcon name="search" className="info-icon" />
              <div><div className="info-lbl">Focus Areas</div><div className="info-val">Vuln Assessment · Network Defense · IAM</div></div>
            </div>
            <div className="info-card glass">
              <AnimatedIcon name="server" className="info-icon" />
              <div><div className="info-lbl">Environments</div><div className="info-val">Kali Linux · Windows Server · pfSense</div></div>
            </div>
            <div className="info-card glass">
              <AnimatedIcon name="signal" className="info-icon" />
              <div><div className="info-lbl">Status</div><div className="info-val" style={{ color: 'var(--accent2)' }}>● Open to Opportunities</div></div>
            </div>
            <div className="info-card glass">
              <AnimatedIcon name="link" className="info-icon" />
              <div><div className="info-lbl">Profiles</div><div className="info-val">LinkedIn · GitHub · HackTheBox</div></div>
            </div>
          </div>
        </div>
      </div>

      <section id="skills" style={{ background: 'transparent' }}>
        <div className="section-wrap">
          <div className="section-header reveal">
            <span className="section-num">02</span>
            <h2 className="section-title">Technical Skills</h2>
            <div className="section-line"></div>
          </div>
          <div className="skills-grid">
            <div className="skill-block glass reveal" data-tilt="4">
              <div className="skill-block-head">
                <AnimatedIcon name="sword" className="skill-icon" />
                <div className="skill-title">Offensive Security</div>
              </div>
              <div className="tool-list">
                <div className="tool-row">
                  <span className="tool-name">Nmap</span>
                  <span className="tool-context">Network discovery and port scanning across lab and internship environments</span>
                </div>
                <div className="tool-row">
                  <span className="tool-name">Metasploit</span>
                  <span className="tool-context">Exploitation framework used during CEH training and CTF challenges</span>
                </div>
                <div className="tool-row">
                  <span className="tool-name">Burp Suite</span>
                  <span className="tool-context">Web application testing for OWASP Top 10 vulnerabilities in CTF scenarios</span>
                </div>
                <div className="tool-row">
                  <span className="tool-name">Nessus</span>
                  <span className="tool-context">Vulnerability scanning and report generation during internship assessments</span>
                </div>
              </div>
              <div className="tool-tags">
                <span className="tag">Kali Linux</span><span className="tag">Wireshark</span><span className="tag">OSINT</span><span className="tag">Recon-ng</span>
              </div>
            </div>

            <div className="skill-block glass reveal" data-tilt="4" data-delay="80">
              <div className="skill-block-head">
                <AnimatedIcon name="shield" className="skill-icon" />
                <div className="skill-title">Defensive Security</div>
              </div>
              <div className="tool-list">
                <div className="tool-row">
                  <span className="tool-name">Splunk / Elastic</span>
                  <span className="tool-context">SIEM deployment and custom detection rules in home lab environment</span>
                </div>
                <div className="tool-row">
                  <span className="tool-name">Firewall Config</span>
                  <span className="tool-context">pfSense rule sets for VLAN segmentation and traffic filtering</span>
                </div>
                <div className="tool-row">
                  <span className="tool-name">RBAC / IAM</span>
                  <span className="tool-context">Role-based access policies applied during internship to reduce privilege creep</span>
                </div>
                <div className="tool-row">
                  <span className="tool-name">IDS / IPS</span>
                  <span className="tool-context">Snort rules and Suricata signatures for lab-based intrusion detection</span>
                </div>
              </div>
              <div className="tool-tags">
                <span className="tag">PKI</span><span className="tag">VPN</span><span className="tag">Log Analysis</span><span className="tag">Incident Response</span>
              </div>
            </div>

            <div className="skill-block glass reveal" data-tilt="4" data-delay="0">
              <div className="skill-block-head">
                <AnimatedIcon name="terminal" className="skill-icon" />
                <div className="skill-title">Systems &amp; Scripting</div>
              </div>
              <div className="tool-list">
                <div className="tool-row">
                  <span className="tool-name">Linux / Bash</span>
                  <span className="tool-context">Daily driver for lab automation, log parsing, and tool chaining</span>
                </div>
                <div className="tool-row">
                  <span className="tool-name">Python</span>
                  <span className="tool-context">Custom scripts for port enumeration, log scraping, and report automation</span>
                </div>
                <div className="tool-row">
                  <span className="tool-name">C++</span>
                  <span className="tool-context">Algorithmic problem solving; competitive programming background</span>
                </div>
                <div className="tool-row">
                  <span className="tool-name">Git / GitHub</span>
                  <span className="tool-context">Version control and portfolio hosting for all lab write-ups and tools</span>
                </div>
              </div>
              <div className="tool-tags">
                <span className="tag">Windows Server</span><span className="tag">Active Directory</span><span className="tag">PowerShell</span>
              </div>
            </div>

            <div className="skill-block glass reveal" data-tilt="4" data-delay="80">
              <div className="skill-block-head">
                <AnimatedIcon name="network" className="skill-icon" />
                <div className="skill-title">Network Architecture</div>
              </div>
              <div className="tool-list">
                <div className="tool-row">
                  <span className="tool-name">VLAN Design</span>
                  <span className="tool-context">Segmented lab network with dedicated security, user, and DMZ zones</span>
                </div>
                <div className="tool-row">
                  <span className="tool-name">Wireshark</span>
                  <span className="tool-context">Packet capture and protocol analysis for traffic inspection in CTF and lab</span>
                </div>
                <div className="tool-row">
                  <span className="tool-name">TCP/IP / DNS</span>
                  <span className="tool-context">Protocol-level understanding applied to attack surface reduction</span>
                </div>
                <div className="tool-row">
                  <span className="tool-name">Cisco / pfSense</span>
                  <span className="tool-context">Routing, switching, and firewall configuration in lab topology</span>
                </div>
              </div>
              <div className="tool-tags">
                <span className="tag">DHCP</span><span className="tag">Routing</span><span className="tag">NAT</span><span className="tag">Network Hardening</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
