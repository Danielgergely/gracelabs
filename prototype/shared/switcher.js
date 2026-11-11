export const VARIANTS = [
  { key: 'D', name: 'Light + Letter', module: './variants/combined.js' },
];

export function mountSwitcher(current) {
  const local = ['localhost', '127.0.0.1', ''].includes(location.hostname) || /^(192\.168|10)\./.test(location.hostname);
  if (VARIANTS.length < 2) return;
  if (!local && !new URLSearchParams(location.search).has('proto')) return;

  const i = VARIANTS.findIndex(v => v.key === current);
  const go = d => {
    const next = VARIANTS[(i + d + VARIANTS.length) % VARIANTS.length];
    const p = new URLSearchParams(location.search);
    p.set('variant', next.key);
    location.search = p.toString();
  };

  const bar = document.createElement('div');
  bar.innerHTML = `<button aria-label="Previous">‹</button><span>${VARIANTS[i].key} · ${VARIANTS[i].name}</span><button aria-label="Next">›</button>`;
  Object.assign(bar.style, {
    position: 'fixed', bottom: '18px', left: '50%', transform: 'translateX(-50%)', zIndex: 99999,
    display: 'flex', alignItems: 'center', gap: '10px', padding: '6px 8px',
    background: '#ff2d6f', color: '#fff', borderRadius: '999px', font: '600 13px/1 Inter, system-ui, sans-serif',
    boxShadow: '0 8px 30px rgba(0,0,0,.45)', userSelect: 'none',
  });
  bar.querySelectorAll('button').forEach((b, n) => {
    Object.assign(b.style, {
      width: '30px', height: '30px', borderRadius: '50%', border: 0, cursor: 'pointer',
      background: 'rgba(255,255,255,.2)', color: '#fff', font: '600 18px/1 Inter, sans-serif',
    });
    b.onclick = () => go(n ? 1 : -1);
  });
  bar.querySelector('span').style.padding = '0 6px';
  document.body.append(bar);

  addEventListener('keydown', e => {
    const t = e.target;
    if (t.closest?.('input,textarea,[contenteditable]')) return;
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  });
}
