import { useEffect, useState, useRef } from 'react';

export default function Preloader() {
  const PRELOADER_KEY = 'homePreloaderSeen';
  const [isVisible, setIsVisible] = useState(() => sessionStorage.getItem(PRELOADER_KEY) !== 'true');
  const [typedText, setTypedText] = useState('');
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [glitchText, setGlitchText] = useState(null);
  const [accessGranted, setAccessGranted] = useState(false);

  const typedTextRef = useRef('');
  const audioContextRef = useRef(null);

  useEffect(() => {
    if (!isVisible) {
      document.body.classList.add('preloader-complete');
      return;
    }

    document.body.classList.add('has-preloader');

    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      audioContextRef.current = new AudioCtx();
      audioContextRef.current.resume().catch(() => {});
      
      const unlockAudio = () => {
        if (audioContextRef.current?.state === 'suspended') {
          audioContextRef.current.resume();
        }
        document.removeEventListener('click', unlockAudio, true);
      };
      document.addEventListener('click', unlockAudio, { capture: true, once: true });
    }

    const messages = [
      { text: 'initializing security modules...', speed: 40, pause: 220 },
      { text: 'scanning open ports...', speed: 35, pause: 180 },
      { text: 'system ready', speed: 45, pause: 260 }
    ];

    function playTone(freq, duration = 0.12, type = 'sine', gain = 0.18) {
      if (!audioContextRef.current) return;
      try {
        if (audioContextRef.current.state === 'suspended') audioContextRef.current.resume();
        const oscillator = audioContextRef.current.createOscillator();
        const envelope = audioContextRef.current.createGain();
        oscillator.type = type;
        oscillator.frequency.value = freq;
        oscillator.connect(envelope);
        envelope.connect(audioContextRef.current.destination);
        const now = audioContextRef.current.currentTime;
        envelope.gain.setValueAtTime(gain, now);
        envelope.gain.exponentialRampToValueAtTime(0.001, now + duration);
        oscillator.start(now);
        oscillator.stop(now + duration);
      } catch (error) {
        // Ignore playback errors
      }
    }

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
            
            if (Math.random() < 0.08) {
              setGlitchText(typedTextRef.current);
              setTimeout(() => setGlitchText(null), 150);
            }
            
            setProgress(((messageIndex + (charIndex / currentMessage.text.length)) / messages.length) * 100);
            timeoutId = setTimeout(typeWriter, currentMessage.speed);
          } else {
            playTone(320 + messageIndex * 40, 0.06, 'square', 0.12);
            isTyping = false;
            timeoutId = setTimeout(typeWriter, currentMessage.pause);
          }
        } else {
          typedTextRef.current = '';
          setTypedText('');
          charIndex = 0;
          isTyping = true;
          messageIndex++;
          timeoutId = setTimeout(typeWriter, 180);
        }
      } else {
        setProgress(100);
        setTypedText('access granted');
        setAccessGranted(true);
        playTone(520, 0.22, 'triangle', 0.22);
        
        timeoutId = setTimeout(() => {
          document.body.classList.add('preloader-complete');
          sessionStorage.setItem(PRELOADER_KEY, 'true');
          setIsFadingOut(true);
          
          setTimeout(() => {
            setIsVisible(false);
          }, 500);
        }, 900);
      }
    }

    timeoutId = setTimeout(typeWriter, 400);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div id="preloader" className={isFadingOut ? 'fade-out' : ''}>
      <div className="terminal">
        <div className="terminal-header">
          <span className="terminal-title">aaron.sec@terminal ~ $</span>
        </div>
        <div className="terminal-body">
          <span 
            id="typed-text" 
            className={glitchText ? 'glitch' : ''} 
            data-text={glitchText || ''}
            style={accessGranted ? { color: 'var(--accent2)', textShadow: '0 0 20px rgba(0,255,136,0.8)' } : {}}
          >
            {accessGranted ? 'access granted' : typedText}
          </span>
          <span className="cursor" style={{ opacity: accessGranted ? 0 : 1, animation: accessGranted ? 'none' : 'blink 1s infinite' }}>|</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
