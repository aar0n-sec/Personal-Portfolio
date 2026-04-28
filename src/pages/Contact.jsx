import { useState } from 'react';
import PageHero from '../components/PageHero';
import AnimatedIcon from '../components/AnimatedIcon';

export default function Contact() {
  const [formStatus, setFormStatus] = useState({ state: null, message: '' }); // 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ state: 'loading', message: '' });

    // REPLACE THIS with your free access key from https://web3forms.com/
    const accessKey = "e121a5d7-8253-4fa9-bc93-704f648891f3";



    const formData = new FormData(e.target);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({ state: 'success', message: "// Message received. I'll respond within 24 hours." });
        e.target.reset();
      } else {
        setFormStatus({ state: 'error', message: `// Error: ${data.message || 'Failed to send message.'}` });
      }
    } catch (error) {
      setFormStatus({ state: 'error', message: "// Error: Network issue. Please check your connection." });
    }

    setTimeout(() => setFormStatus({ state: null, message: '' }), 5000);
  };

  return (
    <>
      <PageHero
        tag="05 / Contact"
        titlePrefix="Let's"
        titleHighlight="Connect"
        description="Open to full-time analyst roles, security internships, and collaborative projects. Recruiters and hiring managers — reach out directly."
      />

      <div className="section-wrap" style={{ paddingTop: 0 }}>
        <div className="contact-layout">

          {/* LEFT */}
          <div className="contact-intro reveal">
            <h2>Ready to contribute to your security team.</h2>
            <p>CEH v12 and CND v3 certified, with hands-on lab experience in vulnerability scanning, network segmentation, SIEM deployment, and CTF-based offensive research. Honest about what I know and eager to grow.</p>

            <div className="contact-links">
              <a href="https://linkedin.com/in/YOUR_PROFILE" className="clink" target="_blank" rel="noopener noreferrer">
                <AnimatedIcon name="briefcase" className="clink-icon" />
                <div className="clink-info">
                  <div className="clink-label">LinkedIn</div>
                  <div className="clink-val">linkedin.com/in/aaron-[lastname]</div>
                </div>
                <span className="clink-arrow">→</span>
              </a>
              <a href="https://github.com/YOUR_USERNAME" className="clink" target="_blank" rel="noopener noreferrer">
                <AnimatedIcon name="code" className="clink-icon" />
                <div className="clink-info">
                  <div className="clink-label">GitHub</div>
                  <div className="clink-val">github.com/aaron-[username]</div>
                </div>
                <span className="clink-arrow">→</span>
              </a>
              <a href="https://app.hackthebox.com/profile/YOUR_ID" className="clink" target="_blank" rel="noopener noreferrer">
                <AnimatedIcon name="target" className="clink-icon" />
                <div className="clink-info">
                  <div className="clink-label">HackTheBox</div>
                  <div className="clink-val">app.hackthebox.com/profile/aaron</div>
                </div>
                <span className="clink-arrow">→</span>
              </a>
              <a href="mailto:your.email@example.com" className="clink">
                <AnimatedIcon name="mail" className="clink-icon" />
                <div className="clink-info">
                  <div className="clink-label">Email</div>
                  <div className="clink-val">your.email@example.com</div>
                </div>
                <span className="clink-arrow">→</span>
              </a>
            </div>

            {/* RESUME DOWNLOAD */}
            <div className="resume-cta">
              <a href="/Aaron_Resume.pdf" className="btn btn-ghost" download style={{ width: '100%', justifyContent: 'center' }}>
                <span>↓ Download Resume (PDF)</span>
              </a>
            </div>

            {/* AVAILABILITY */}
            <div className="avail-card glass">
              <div className="avail-pulse"></div>
              <div>
                <div className="avail-text">Currently Available</div>
                <div className="avail-sub">Full-time · Internship · Contract — open to discuss</div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="contact-form-wrap glass reveal" data-delay="80">
            <div className="form-title">// Send a message</div>

            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="from_name">Your Name</label>
                  <input id="from_name" name="from_name" type="text" className="form-input" placeholder="Jane Smith" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="organization">Organization</label>
                  <input id="organization" name="organization" type="text" className="form-input" placeholder="Acme Security Inc." />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="reply_to">Email</label>
                <input id="reply_to" name="reply_to" type="email" className="form-input" placeholder="recruiter@company.com" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" className="form-input" placeholder="Security Analyst Role — [Company]" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea id="message" name="message" className="form-textarea" placeholder="I'd like to discuss an opportunity..." required></textarea>
              </div>
              <div className="form-footer">
                <button type="submit" className={`btn btn-primary btn-submit ${formStatus.state === 'loading' ? 'loading' : ''} ${formStatus.state === 'success' ? 'success' : ''}`}>
                  <span>
                    {formStatus.state === 'loading' ? 'Sending...' :
                      formStatus.state === 'success' ? '✓ Sent!' : 'Send Message →'}
                  </span>
                </button>
                <span className="form-note">// Typically responds within 24h</span>
              </div>
            </form>

            <div
              id="form-status"
              className={`form-status ${formStatus.state === 'success' ? 'success' : formStatus.state === 'error' ? 'error' : ''}`}
              style={{ display: formStatus.state === 'success' || formStatus.state === 'error' ? 'block' : 'none' }}
            >
              {formStatus.message}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
