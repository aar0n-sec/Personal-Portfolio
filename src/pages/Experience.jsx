import PageHero from '../components/PageHero';
import AnimatedIcon from '../components/AnimatedIcon';

export default function Experience() {
  return (
    <>
      <PageHero 
        tag="03 / Background"
        titlePrefix="Experience &"
        titleHighlight="Background"
        description="Honest accounts of what I've done, where I did it, and what I can demonstrate as a result. No inflated numbers."
      />

      <div className="section-wrap" style={{ paddingTop: 0 }}>
        <div className="timeline">

          {/* INTERNSHIP */}
          <div className="tl-item">
            <div className="exp-card glass">
              <div className="exp-meta">
                <span className="exp-date">2024</span>
                <span className="exp-badge">Internship</span>
                <span className="exp-badge" style={{ color: 'var(--accent2)', borderColor: 'rgba(0,255,136,.15)' }}>Completed</span>
              </div>
              <div className="exp-title">Cybersecurity Analyst Intern</div>
              <div className="exp-org">// Security Operations · Internship Program</div>
              <div className="impact-list">
                <div className="impact-item">
                  <span className="impact-arrow">→</span>
                  <span>Performed vulnerability scans using Nmap on a subset of internal systems; documented open ports, service versions, and potential findings in a structured report reviewed by the senior analyst.</span>
                </div>
                <div className="impact-item">
                  <span className="impact-arrow">→</span>
                  <span>Assisted in configuring VLAN segmentation in the lab environment under supervision — set up inter-VLAN routing rules and verified traffic isolation using Wireshark captures.</span>
                </div>
                <div className="impact-item">
                  <span className="impact-arrow">→</span>
                  <span>Reviewed and updated RBAC policies for a set of user accounts, identifying over-provisioned permissions and flagging them for review — no live changes were made without sign-off.</span>
                </div>
                <div className="impact-item">
                  <span className="impact-arrow">→</span>
                  <span>Participated in a tabletop incident response exercise, contributed to drafting a runbook section on log collection steps, and wrote a post-exercise summary documenting gaps identified.</span>
                </div>
                <div className="impact-item">
                  <span className="impact-arrow">→</span>
                  <span>Reviewed firewall rule sets and assisted in identifying redundant or overly permissive rules; recommendations were documented and presented to the team lead.</span>
                </div>
              </div>
              <div className="context-note">// All actions were performed in supervised or lab environments. Claims reflect direct participation, not sole ownership of outcomes.</div>
            </div>
          </div>

          {/* SIEM LAB */}
          <div className="tl-item" style={{ transitionDelay: '.12s' }}>
            <div className="exp-card glass">
              <div className="exp-meta">
                <span className="exp-date">2023–2024</span>
                <span className="exp-badge">Self-Directed Project</span>
              </div>
              <div className="exp-title">Home Security Lab — SIEM &amp; Detection</div>
              <div className="exp-org">// Independent Research · Documented on GitHub</div>
              <div className="impact-list">
                <div className="impact-item">
                  <span className="impact-arrow">→</span>
                  <span>Built a home lab using Proxmox with Kali Linux, a Windows 10 victim VM, and Elastic SIEM — all running locally. Network isolated via pfSense.</span>
                </div>
                <div className="impact-item">
                  <span className="impact-arrow">→</span>
                  <span>Configured Filebeat and Winlogbeat log shippers to forward event logs to Elastic. Wrote three custom detection rules targeting failed login patterns and PowerShell execution.</span>
                </div>
                <div className="impact-item">
                  <span className="impact-arrow">→</span>
                  <span>Simulated brute-force and lateral movement attacks using Hydra and Mimikatz in the isolated environment. Verified detections fired as expected and tuned for false positive reduction.</span>
                </div>
                <div className="impact-item">
                  <span className="impact-arrow">→</span>
                  <span>Documented the entire setup — topology, tool configs, attack scenarios, detection results — in structured GitHub markdown files intended for portfolio review.</span>
                </div>
              </div>
              <div className="context-note">// This was a personal lab project. All attack simulations were conducted on machines I own in an isolated network.</div>
            </div>
          </div>

          {/* CTF */}
          <div className="tl-item" style={{ transitionDelay: '.24s' }}>
            <div className="exp-card glass">
              <div className="exp-meta">
                <span className="exp-date">2023–Present</span>
                <span className="exp-badge">CTF / Continuous Learning</span>
                <span className="exp-badge" style={{ color: 'var(--accent2)', borderColor: 'rgba(0,255,136,.15)' }}>Ongoing</span>
              </div>
              <div className="exp-title">HackTheBox &amp; TryHackMe — CTF Challenges</div>
              <div className="exp-org">// Offensive Security Practice · Write-ups on GitHub</div>
              <div className="impact-list">
                <div className="impact-item">
                  <span className="impact-arrow">→</span>
                  <span>Completed over 20 challenges across both platforms covering web exploitation, privilege escalation, enumeration, and basic reverse engineering.</span>
                </div>
                <div className="impact-item">
                  <span className="impact-arrow">→</span>
                  <span>For each challenge: documented reconnaissance steps, the specific vulnerability exploited, the exact tools and commands used, and what I learned — published as markdown write-ups.</span>
                </div>
                <div className="impact-item">
                  <span className="impact-arrow">→</span>
                  <span>Topics covered include: SQL injection, path traversal, SUID privesc, kernel exploits (guided), password hash cracking, OSINT enumeration, and Metasploit framework usage.</span>
                </div>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="tl-item" style={{ transitionDelay: '.36s' }}>
            <div className="exp-card glass">
              <div className="exp-meta">
                <span className="exp-date">Ongoing</span>
                <span className="exp-badge">Education</span>
              </div>
              <div className="exp-title">Formal &amp; Self-Directed Education</div>
              <div className="exp-org">// CEH · CND · Google IT · TryHackMe Learning Paths</div>
              <div className="impact-list">
                <div className="impact-item">
                  <span className="impact-arrow">→</span>
                  <span>Completed EC-Council CEH v12 and CND v3 programs — covering penetration testing methodology, network defense strategy, threat intelligence, and security operations.</span>
                </div>
                <div className="impact-item">
                  <span className="impact-arrow">→</span>
                  <span>Completed Google IT Support Professional Certificate covering networking fundamentals, system administration, and troubleshooting — foundational to all security work.</span>
                </div>
                <div className="impact-item">
                  <span className="impact-arrow">→</span>
                  <span>Working through TryHackMe's "Jr Penetration Tester" and "SOC Level 1" learning paths to build structured, verifiable skill progression.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CONTINUOUS LEARNING */}
      <section>
        <div className="section-wrap">
          <div className="section-header reveal">
            <span className="section-num">+</span>
            <h2 className="section-title">How I Keep Learning</h2>
            <div className="section-line"></div>
          </div>
          <div className="learning-grid">
            <div className="learn-card glass reveal" data-tilt="4">
              <AnimatedIcon name="target" className="learn-icon" />
              <div className="learn-title">Active CTF Practice</div>
              <div className="learn-desc">Regular HackTheBox and TryHackMe sessions with write-ups published after each challenge.</div>
              <div className="learn-tag">// Weekly</div>
            </div>
            <div className="learn-card glass reveal" data-tilt="4" data-delay="80">
              <AnimatedIcon name="book" className="learn-icon" />
              <div className="learn-title">Security Reading</div>
              <div className="learn-desc">MITRE ATT&amp;CK framework, threat intel reports (Mandiant, CrowdStrike), and CVE advisories.</div>
              <div className="learn-tag">// Ongoing</div>
            </div>
            <div className="learn-card glass reveal" data-tilt="4" data-delay="160">
              <AnimatedIcon name="lab" className="learn-icon" />
              <div className="learn-title">Lab Expansion</div>
              <div className="learn-desc">Continuously expanding the home lab — next: Active Directory attack/defense scenarios.</div>
              <div className="learn-tag">// In Progress</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
