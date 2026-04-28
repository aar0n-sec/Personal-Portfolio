export default function AnimatedIcon({ name, className = '', ...props }) {
  const icons = {
    sword: `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="icon-stroke" d="M14 4l6 6-9.5 9.5H5V14L14 4z"/><path class="icon-stroke" d="M12.5 5.5l6 6"/><path class="icon-scan" d="M6 18l3-3"/><circle class="icon-dot" cx="17.5" cy="6.5" r="1.2"/></svg>`,
    shield: `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="icon-fill" d="M12 3.5l7 2.8v5.2c0 4.4-2.8 7.5-7 9-4.2-1.5-7-4.6-7-9V6.3l7-2.8z"/><path class="icon-scan" d="M8.2 11.5h7.6"/><path class="icon-stroke" d="M9 14l2 2 4-6"/></svg>`,
    radar: `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle class="icon-stroke" cx="12" cy="12" r="7.5"/><circle class="icon-stroke" cx="12" cy="12" r="3.2"/><path class="icon-sweep" d="M12 12l5-5"/><circle class="icon-dot" cx="12" cy="12" r="1.25"/></svg>`,
    badge: `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="icon-fill" d="M12 3l2.1 1.5 2.6-.2.9 2.4 2.1 1.4-.9 2.4.9 2.4-2.1 1.4-.9 2.4-2.6-.2L12 18l-2.1-1.5-2.6.2-.9-2.4-2.1-1.4.9-2.4-.9-2.4 2.1-1.4.9-2.4 2.6.2L12 3z"/><path class="icon-stroke" d="M9.2 12l1.8 1.8 4-4.5"/></svg>`,
    tool: `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="icon-stroke" d="M14.7 5.1a4.2 4.2 0 0 0 5.2 5.2l-8.6 8.6a2.4 2.4 0 0 1-3.4-3.4l8.6-8.6z"/><path class="icon-scan" d="M8.8 17.2l1.9-1.9"/><circle class="icon-dot" cx="8.7" cy="17.3" r="1"/></svg>`,
    target: `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle class="icon-stroke" cx="12" cy="12" r="8.5"/><circle class="icon-stroke" cx="12" cy="12" r="4.8"/><circle class="icon-dot" cx="12" cy="12" r="1.6"/><path class="icon-scan" d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3"/></svg>`,
    terminal: `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="icon-fill" d="M4 6h16v12H4z"/><path class="icon-stroke" d="M7 10l3 2-3 2"/><path class="icon-scan" d="M12.5 15h4.5"/></svg>`,
    network: `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="icon-stroke" d="M7 8l5 4 5-4M7 16l5-4 5 4"/><circle class="icon-fill" cx="7" cy="8" r="2.1"/><circle class="icon-fill" cx="17" cy="8" r="2.1"/><circle class="icon-fill" cx="12" cy="12" r="2.1"/><circle class="icon-fill" cx="7" cy="16" r="2.1"/><circle class="icon-fill" cx="17" cy="16" r="2.1"/></svg>`,
    book: `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="icon-fill" d="M5 5.5h5.7c1.2 0 2 .8 2 2v11c-.4-.7-1.2-1-2.2-1H5V5.5z"/><path class="icon-fill" d="M19 5.5h-5.7c-1.2 0-2 .8-2 2v11c.4-.7 1.2-1 2.2-1H19V5.5z"/><path class="icon-scan" d="M7.8 9.2h2.7M15 9.2h2.1"/></svg>`,
    lab: `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="icon-stroke" d="M10 4h4M11 4v5.5l-4.8 8.2c-.7 1.2.1 2.8 1.5 2.8h8.6c1.4 0 2.2-1.6 1.5-2.8L13 9.5V4"/><path class="icon-scan" d="M8 16h8"/><circle class="icon-dot" cx="10.2" cy="18.2" r=".9"/><circle class="icon-dot" cx="14.7" cy="18" r=".75"/></svg>`,
    briefcase: `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="icon-fill" d="M4 8h16v10H4z"/><path class="icon-stroke" d="M9 8V6h6v2M4 12h16M12 11v2"/></svg>`,
    code: `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="icon-stroke" d="M9 8l-4 4 4 4M15 8l4 4-4 4M13 6l-2 12"/><circle class="icon-dot" cx="12" cy="12" r=".9"/></svg>`,
    mail: `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="icon-fill" d="M4 6h16v12H4z"/><path class="icon-stroke" d="M4.5 7l7.5 6 7.5-6"/><path class="icon-scan" d="M7 16h10"/></svg>`,
    document: `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="icon-fill" d="M7 3.5h7l3 3V20H7z"/><path class="icon-stroke" d="M14 3.5V7h3M9.5 11h5M9.5 14h5M9.5 17h3"/><circle class="icon-dot" cx="16.5" cy="18" r=".9"/></svg>`,
    topology: `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="icon-stroke" d="M7 7h10v4H7zM4 17h6v3H4zM14 17h6v3h-6zM12 11v3M7 14h10M7 14v3M17 14v3"/><circle class="icon-dot" cx="12" cy="9" r=".8"/></svg>`,
    server: `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="icon-fill" d="M5 5h14v5H5zM5 14h14v5H5z"/><path class="icon-scan" d="M8 7.5h5M8 16.5h5"/><circle class="icon-dot" cx="16.5" cy="7.5" r=".8"/><circle class="icon-dot" cx="16.5" cy="16.5" r=".8"/></svg>`,
    link: `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="icon-stroke" d="M10 7.5l1-1a4 4 0 0 1 5.7 5.7l-1.5 1.5a4 4 0 0 1-5.7 0M14 16.5l-1 1a4 4 0 0 1-5.7-5.7l1.5-1.5a4 4 0 0 1 5.7 0"/><path class="icon-scan" d="M9.5 14.5l5-5"/></svg>`,
    search: `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle class="icon-stroke" cx="10.5" cy="10.5" r="5.5"/><path class="icon-stroke" d="M15 15l4 4"/><path class="icon-scan" d="M7.5 10.5h6"/></svg>`,
    signal: `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="icon-stroke" d="M4 12h3l2-5 4 10 2-5h5"/><circle class="icon-dot" cx="19" cy="12" r="1"/></svg>`
  };

  const svgContent = icons[name];
  if (!svgContent) return null;

  return (
    <span 
      className={`animated-icon animated-icon-ready ${className}`} 
      {...props}
      dangerouslySetInnerHTML={{ __html: svgContent }} 
    />
  );
}
