import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function NotFound() {
  const [typedText, setTypedText] = useState('');
  const [glitchText, setGlitchText] = useState(null);
  const [terminalState, setTerminalState] = useState('typing');
  const typedTextRef = useRef('');
  const navigate = useNavigate();

  useEffect(() => {
    const messages = [
      { text: '[ ERROR ] 404 : SECTOR NOT FOUND\n', speed: 40, pause: 400 },
      { text: '> Initiating diagnostic protocol...\n', speed: 30, pause: 200 },
      { text: '> Scanning neural pathways...\n', speed: 20, pause: 300 },
      { text: '> WARNING: Requested data packet does not exist or has been heavily encrypted.\n', speed: 35, pause: 500 },
      { text: '> Suggesting immediate extraction to safe zone.', speed: 40, pause: 0 }
    ];

    let messageIndex = 0;
    let charIndex = 0;
    let isTyping = true;
    let timeoutId;

    function typeWriter() {
      if (messageIndex < messages.length) {
        const currentMessage = messages[messageIndex];
        
        if (isTyping) {
          if (charIndex < currentMessage.text.length) {
            const char = currentMessage.text[charIndex];
            typedTextRef.current += char;
            setTypedText(typedTextRef.current);
            charIndex++;
            
            // Random glitch effect during typing
            if (Math.random() < 0.05) {
              setGlitchText(typedTextRef.current);
              setTimeout(() => setGlitchText(null), 80);
            }
            
            timeoutId = setTimeout(typeWriter, currentMessage.speed);
          } else {
            isTyping = false;
            timeoutId = setTimeout(typeWriter, currentMessage.pause);
          }
        } else {
          charIndex = 0;
          isTyping = true;
          messageIndex++;
          timeoutId = setTimeout(typeWriter, 50);
        }
      } else {
        setTerminalState('done');
      }
    }

    timeoutId = setTimeout(typeWriter, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <PageHero 
        tag="Security Breach"
        titlePrefix="404"
        titleHighlight="Error"
        description="We couldn't locate the requested node in our database."
      />
      <div className="section-wrap" style={{ paddingTop: 0, minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div 
          className="terminal reveal glass" 
          data-tilt="3" 
          style={{ width: '100%', maxWidth: '800px', borderColor: 'rgba(255, 60, 110, 0.3)' }}
        >
          <div className="terminal-header" style={{ color: 'var(--accent3)', borderBottomColor: 'rgba(255, 60, 110, 0.3)', background: 'rgba(255, 60, 110, 0.05)' }}>
            <span className="terminal-title">system_error_log.sh</span>
          </div>
          <div className="terminal-body" style={{ minHeight: '260px' }}>
            <span 
              id="typed-text" 
              className={glitchText ? 'glitch' : ''} 
              data-text={glitchText || ''}
              style={{ whiteSpace: 'pre-wrap', color: 'var(--text-bright)' }}
            >
              {typedText}
            </span>
            <span className="cursor" style={{ color: 'var(--accent3)', opacity: terminalState === 'done' ? 0 : 1, animation: terminalState === 'done' ? 'none' : 'blink 1s infinite' }}>_</span>
            
            {terminalState === 'done' && (
              <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', animation: 'terminalSlide 0.4s ease-out' }}>
                <Link to="/" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, var(--accent3), var(--accent))' }}>
                  <span>← RETRACT TO SAFE ZONE</span>
                </Link>
                <button onClick={() => navigate(-1)} className="btn btn-ghost" style={{ borderColor: 'var(--accent3)', color: 'var(--accent3)' }}>
                  <span>ABORT MISSION</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
