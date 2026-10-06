import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
// One shared <audio> so only a single track plays at a time.
const Ctx = createContext(null)
export const usePlayer = () => useContext(Ctx)
export const useTrack = (id) => { const c = usePlayer(); return { active: c.id === id && c.playing, missing: c.missing === id, toggle: c.toggle } }

export function PlayerProvider({ children }) {
  const a = useRef(null)
  const [id, setId] = useState(null)
  const [playing, setPlaying] = useState(false)
  const [missing, setMissing] = useState(null)

  useEffect(() => {
    const el = (a.current = new Audio()); el.preload = 'none'
    const on = () => setPlaying(true), off = () => setPlaying(false)
    const err = () => { setPlaying(false); setMissing(el.dataset.id) }
    el.addEventListener('play', on); el.addEventListener('pause', off)
    el.addEventListener('ended', off); el.addEventListener('error', err)
    return () => el.pause()
  }, [])

  // keepTime: when switching versions (before/after) continue from the same position.
  const toggle = useCallback((nid, src, keepTime = false) => {
    const el = a.current; if (!el) return
    if (id === nid) { playing ? el.pause() : el.play().catch(() => {}); return }
    const t = keepTime ? el.currentTime : 0
    el.pause(); el.src = src; el.dataset.id = nid; setId(nid); setMissing(null)
    if (keepTime) el.addEventListener('loadedmetadata', () => { el.currentTime = t }, { once: true })
    el.play().catch(() => {})
  }, [id, playing])

  return <Ctx.Provider value={{ id, playing, missing, toggle }}>{children}</Ctx.Provider>
}

export function PlayIcon({ playing, size = 20 }) {
  return playing
    ? <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>
    : <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M8 5v14l11-7z"/></svg>
}
