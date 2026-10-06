// Shows your image if `src` is set; otherwise generated placeholder artwork.
export default function Cover({ src, seed = 1, title = '', className = '' }) {
  if (src) return <img src={src} alt={`${title} cover artwork`} loading="lazy" className={`object-cover ${className}`} />
  const r = (n) => Math.round((Math.sin(seed * n) * .5 + .5) * 100)
  return (
    <div role="img" aria-label={`${title} placeholder artwork`} className={`relative overflow-hidden ${className}`}
      style={{ background: `radial-gradient(circle at ${r(3)}% ${r(7)}%, #38383a 0, #121212 55%, #060606 100%)` }}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-40" aria-hidden>
        {[12, 22, 32, 44].map((x, i) => <circle key={i} cx={r(2)} cy={r(5)} r={x + seed * 2} fill="none" stroke="#c4c4c4" strokeWidth=".15" />)}
      </svg>
      <span className="absolute bottom-3 left-4 font-serif text-xl italic text-bone/70">{title}</span>
    </div>
  )
}
