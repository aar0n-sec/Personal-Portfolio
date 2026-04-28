import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import AnimatedIcon from '../components/AnimatedIcon';

export default function Projects() {
  return (
    <>
      <PageHero 
        tag="Proof of Work"
        titlePrefix="Projects That"
        titleHighlight="Prove Skill"
        description="Real work, documented methodology, verifiable tools. No inflated metrics — just honest accounts of what was built and what was learned."
      />

      <div className="section-wrap" style={{ paddingTop: 0 }}>
        <div className="project-list">

          {/* PROJECT 1 */}
          <div className="project-card glass reveal">
            <div className="terminal-bar">
              <div className="t-dot red"></div><div className="t-dot yellow"></div><div className="t-dot green"></div>
              <span className="t-title">~/lab/siem-detection-lab</span>
            </div>
            <div className="project-body">
              <div className="project-meta">
                <span className="project-num">P-01</span>
                <span className="project-type">Home Lab / Detection Engineering</span>
                <span className="project-status">Completed</span>
              </div>
              <div className="project-title-row">
                <AnimatedIcon name="radar" className="project-icon" />
                <div>
                  <div className="project-title">SIEM Home Lab — Elastic Stack Threat Detection</div>
                  <div className="project-tagline">// Deployed a detection environment to simulate, detect, and document real attack patterns</div>
                </div>
              </div>

              <div className="pf-grid">
                <div className="pf-block">
                  <div className="pf-label">Problem</div>
                  <div className="pf-text">No hands-on detection experience beyond theory. Needed a safe environment to simulate attacks, tune alerts, and practice structured response.</div>
                </div>
                <div className="pf-block">
                  <div className="pf-label">What I did</div>
                  <div className="pf-text">Deployed Elastic SIEM on a local VM cluster. Configured Filebeat and Winlogbeat agents. Wrote custom detection rules targeting brute-force and lateral movement TTPs.</div>
                </div>
              </div>

              <div className="project-result">
                <strong>RESULT //</strong> Successfully detected simulated brute-force logins within 2 minutes of attack initiation using custom Elastic rules. Documented full attack chain (initial access → persistence → lateral movement) in a structured write-up. Rules and config files committed to GitHub.
              </div>

              <div className="project-tools">
                <span className="tag">Elastic Stack</span><span className="tag">Filebeat</span><span className="tag">Winlogbeat</span>
                <span className="tag">Ubuntu Server</span><span className="tag">Kali Linux</span><span className="tag">Hydra</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/aaron" className="proj-link" target="_blank" rel="noreferrer"><AnimatedIcon name="code" className="link-icon" />GitHub Repo</a>
                <a href="#" className="proj-link"><AnimatedIcon name="document" className="link-icon" />Write-up (PDF)</a>
              </div>
            </div>
            <div className="terminal-demo">
              <div className="t-line"><span className="t-prompt">$</span><span className="t-cmd">curl -X POST "localhost:9200/_security/role/analyst_read"</span></div>
              <div className="t-line t-out ok">{`{"role":{"created":true}}`}</div>
              <div className="t-line"><span className="t-prompt">$</span><span className="t-cmd">./run-detection-tests.sh --scenario brute_force</span></div>
              <div className="t-line t-out">[*] Simulating SSH brute-force on 192.168.10.15...</div>
              <div className="t-line t-out warn">[!] ALERT triggered — rule: SSH_BRUTE_FORCE_ATTEMPT (2m 14s)</div>
              <div className="t-line t-out ok">[✓] Detection confirmed. Event logged to Elastic index.</div>
              <div className="t-line"><span className="t-prompt">$</span><span className="t-cursor"></span></div>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="project-card glass reveal" data-delay="60">
            <div className="terminal-bar">
              <div className="t-dot red"></div><div className="t-dot yellow"></div><div className="t-dot green"></div>
              <span className="t-title">~/tools/port-scanner</span>
            </div>
            <div className="project-body">
              <div className="project-meta">
                <span className="project-num">P-02</span>
                <span className="project-type">Custom Tool / Python</span>
                <span className="project-status">Completed</span>
              </div>
              <div className="project-title-row">
                <AnimatedIcon name="terminal" className="project-icon" />
                <div>
                  <div className="project-title">Custom Python Port Scanner &amp; Service Enumerator</div>
                  <div className="project-tagline">// Built from scratch to understand what Nmap does under the hood</div>
                </div>
              </div>

              <div className="pf-grid">
                <div className="pf-block">
                  <div className="pf-label">Problem</div>
                  <div className="pf-text">Relying on tools without understanding their internals limits both effectiveness and credibility. Built this to deepen understanding of TCP handshakes and service detection logic.</div>
                </div>
                <div className="pf-block">
                  <div className="pf-label">What I did</div>
                  <div className="pf-text">Wrote a multi-threaded Python scanner using raw sockets. Implemented SYN scanning, banner grabbing, and a basic CVE cross-reference from NVD API. Outputs structured JSON reports.</div>
                </div>
              </div>

              <div className="project-result">
                <strong>RESULT //</strong> Functional tool that scans a /24 range in under 30 seconds with thread pool concurrency. Banner grabbing correctly identified SSH, FTP, HTTP versions on lab VMs. Source code and documentation published on GitHub.
              </div>

              <div className="project-tools">
                <span className="tag">Python 3</span><span className="tag">Socket</span><span className="tag">Threading</span>
                <span className="tag">NVD API</span><span className="tag">JSON</span><span className="tag">Argparse</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/aaron" className="proj-link" target="_blank" rel="noreferrer"><AnimatedIcon name="code" className="link-icon" />GitHub Repo</a>
              </div>
            </div>
            <div className="terminal-demo">
              <div className="t-line"><span className="t-prompt">$</span><span className="t-cmd">python3 scanner.py --target 192.168.1.0/24 --threads 50</span></div>
              <div className="t-line t-out">[*] Starting scan on 254 hosts | threads: 50</div>
              <div className="t-line t-out ok">[+] 192.168.1.12  22/tcp   OPEN   OpenSSH 8.4</div>
              <div className="t-line t-out ok">[+] 192.168.1.15  80/tcp   OPEN   Apache/2.4.51</div>
              <div className="t-line t-out warn">[!] 192.168.1.15  80/tcp   CVE-2021-41773  Path traversal (CRITICAL)</div>
              <div className="t-line t-out">[*] Scan complete: 28s | Report → report_20240814.json</div>
              <div className="t-line"><span className="t-prompt">$</span><span className="t-cursor"></span></div>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="project-card glass reveal" data-delay="120">
            <div className="terminal-bar">
              <div className="t-dot red"></div><div className="t-dot yellow"></div><div className="t-dot green"></div>
              <span className="t-title">~/lab/network-hardening</span>
            </div>
            <div className="project-body">
              <div className="project-meta">
                <span className="project-num">P-03</span>
                <span className="project-type">Home Lab / Network Architecture</span>
                <span className="project-status">Completed</span>
              </div>
              <div className="project-title-row">
                <AnimatedIcon name="network" className="project-icon" />
                <div>
                  <div className="project-title">Segmented Home Lab Network with pfSense</div>
                  <div className="project-tagline">// Designed a multi-zone network to practice real enterprise segmentation patterns</div>
                </div>
              </div>

              <div className="pf-grid">
                <div className="pf-block">
                  <div className="pf-label">Problem</div>
                  <div className="pf-text">Flat lab networks don't reflect enterprise reality. Needed to practice VLAN segmentation, inter-zone firewall rules, and network hardening in a controlled environment.</div>
                </div>
                <div className="pf-block">
                  <div className="pf-label">What I did</div>
                  <div className="pf-text">Configured pfSense with four VLANs (Management, User, DMZ, Security-tools). Wrote firewall rules restricting cross-zone traffic. Set up Snort IDS on the perimeter interface. Documented full topology and ruleset.</div>
                </div>
              </div>

              <div className="project-result">
                <strong>RESULT //</strong> Isolated attack traffic to the security-tools VLAN during simulated scans — user and management zones showed no bleed-over. Snort detected Nmap OS fingerprinting attempts in under 10 seconds. Full topology diagram and firewall rule export on GitHub.
              </div>

              <div className="project-tools">
                <span className="tag">pfSense</span><span className="tag">VLANs</span><span className="tag">Snort IDS</span>
                <span className="tag">Proxmox</span><span className="tag">Network Diagrams</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/aaron" className="proj-link" target="_blank" rel="noreferrer"><AnimatedIcon name="code" className="link-icon" />GitHub Repo</a>
                <a href="#" className="proj-link"><AnimatedIcon name="topology" className="link-icon" />Topology Diagram</a>
              </div>
            </div>
            <div className="terminal-demo">
              <div className="t-line"><span className="t-prompt">[pfSense]#</span><span className="t-cmd"> ifconfig vlan20 | grep inet</span></div>
              <div className="t-line t-out ok">inet 10.20.0.1 netmask 0xffffff00</div>
              <div className="t-line"><span className="t-prompt">[pfSense]#</span><span className="t-cmd"> pfctl -sr | grep block</span></div>
              <div className="t-line t-out">block drop in on vlan10 from &lt;user_net&gt; to &lt;mgmt_net&gt;</div>
              <div className="t-line t-out">block drop in on vlan30 from any to &lt;mgmt_net&gt;</div>
              <div className="t-line t-out warn">[SNORT] OS scan detected from 192.168.10.50 — Alert #1042</div>
              <div className="t-line"><span className="t-prompt">[pfSense]#</span><span className="t-cursor"></span></div>
            </div>
          </div>

          {/* PROJECT 4 */}
          <div className="project-card glass reveal" data-delay="180">
            <div className="terminal-bar">
              <div className="t-dot red"></div><div className="t-dot yellow"></div><div className="t-dot green"></div>
              <span className="t-title">~/ctf/write-ups</span>
            </div>
            <div className="project-body">
              <div className="project-meta">
                <span className="project-num">P-04</span>
                <span className="project-type">CTF / Offensive Research</span>
                <span className="project-status">Ongoing</span>
              </div>
              <div className="project-title-row">
                <AnimatedIcon name="target" className="project-icon" />
                <div>
                  <div className="project-title">HackTheBox &amp; TryHackMe — Documented Write-ups</div>
                  <div className="project-tagline">// 20+ challenges with structured exploitation methodology and root cause analysis</div>
                </div>
              </div>

              <div className="pf-grid">
                <div className="pf-block">
                  <div className="pf-label">Scope</div>
                  <div className="pf-text">Web exploitation (SQLi, XSS, path traversal), privilege escalation (SUID binaries, sudo misconfig), OSINT, and binary reverse engineering challenges.</div>
                </div>
                <div className="pf-block">
                  <div className="pf-label">Approach</div>
                  <div className="pf-text">Each challenge is documented with: initial reconnaissance steps, vulnerability identified, exploit used, root/flag obtained, and a one-paragraph lesson learned. Published as markdown on GitHub.</div>
                </div>
              </div>

              <div className="project-result">
                <strong>RESULT //</strong> 20+ completed challenges across HackTheBox and TryHackMe. Write-ups demonstrate structured offensive thinking and clear technical communication — the same skills used in real penetration testing reports.
              </div>

              <div className="project-tools">
                <span className="tag">HackTheBox</span><span className="tag">TryHackMe</span><span className="tag">SQLmap</span>
                <span className="tag">GoBuster</span><span className="tag">GTFOBins</span><span className="tag">John the Ripper</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/aaron" className="proj-link" target="_blank" rel="noreferrer"><AnimatedIcon name="code" className="link-icon" />GitHub Write-ups</a>
                <a href="https://app.hackthebox.com" className="proj-link" target="_blank" rel="noreferrer"><AnimatedIcon name="target" className="link-icon" />HTB Profile</a>
              </div>
            </div>
            <div className="terminal-demo">
              <div className="t-line"><span className="t-prompt">$</span><span className="t-cmd">gobuster dir -u http://10.10.10.165 -w /usr/share/wordlists/dirb/common.txt</span></div>
              <div className="t-line t-out ok">/admin       (Status: 301)</div>
              <div className="t-line t-out ok">/backup      (Status: 200)</div>
              <div className="t-line"><span className="t-prompt">$</span><span className="t-cmd">curl http://10.10.10.165/backup/ -s | grep -i pass</span></div>
              <div className="t-line t-out warn">password=Sup3rS3cr3tP@ssw0rd  # db.conf</div>
              <div className="t-line"><span className="t-prompt">$</span><span className="t-cmd">ssh admin@10.10.10.165  # → privesc → root</span></div>
              <div className="t-line t-out ok">root@Blunder:~# cat root.txt</div>
              <div className="t-line"><span className="t-prompt">$</span><span className="t-cursor"></span></div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
