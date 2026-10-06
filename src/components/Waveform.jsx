// Deterministic pseudo-waveform. seed changes the shape. dull = flat/"unmixed" look.
const bars = (seed, n) => Array.from({ length: n }, (_, i) => .12 + (Math.sin(seed * 91.7 + i * 1.7) * Math.sin(i * .31 + seed) * .5 + .5) * .88)
export default function Waveform({ seed = 1, n = 48, active = false, dull = false, slow = false, className = '' }) {
  return (
    <div aria-hidden className={`flex items-center gap-[3px] ${slow ? 'wf-slow' : ''} ${className}`}>
      {bars(seed, n).map((h, i) => (
        <span key={i} className={`wf-bar flex-1 rounded-full ${dull ? 'bg-steel/50' : 'bg-bone'} ${active ? 'wf-live' : ''}`}
          style={{ height: `${(dull ? Math.min(h, .42) + .08 : h) * 100}%`, '--d': `${(i % 9) * 90}ms` }} />
      ))}
    </div>
  )
}
