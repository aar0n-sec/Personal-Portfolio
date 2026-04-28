const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/rgba\(0,212,255,/g, 'rgba(var(--accent-rgb),');
css = css.replace(/rgba\(0, 212, 255,/g, 'rgba(var(--accent-rgb),');
css = css.replace(/rgba\(2,8,16,/g, 'rgba(var(--bg-rgb),');
css = css.replace(/rgba\(2, 8, 16,/g, 'rgba(var(--bg-rgb),');
css = css.replace(/rgba\(6,14,26,/g, 'rgba(var(--surface-rgb),');
css = css.replace(/rgba\(6, 14, 26,/g, 'rgba(var(--surface-rgb),');
css = css.replace(/rgba\(168,85,247,/g, 'rgba(var(--accent4-rgb),');
css = css.replace(/rgba\(168, 85, 247,/g, 'rgba(var(--accent4-rgb),');
css = css.replace(/rgba\(0,255,136,/g, 'rgba(var(--accent2-rgb),');
css = css.replace(/rgba\(0, 255, 136,/g, 'rgba(var(--accent2-rgb),');
css = css.replace(/rgba\(255,60,110,/g, 'rgba(var(--accent3-rgb),');
css = css.replace(/rgba\(255, 60, 110,/g, 'rgba(var(--accent3-rgb),');

fs.writeFileSync('src/index.css', css);
console.log('Done refactoring index.css');
