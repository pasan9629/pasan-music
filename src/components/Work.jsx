import { projects } from '../data/content'
import Cover from './Cover'
import Head from './Head'
import Reveal from './Reveal'
import Waveform from './Waveform'
import { PlayIcon, useTrack } from './Player'

function Card({ p, i }) {
  const id = `work-${i}`
  const { active, missing, toggle } = useTrack(id)
  return (
    <Reveal delay={(i % 3) * .08}>
      <article className="group">
        <div className="relative aspect-square overflow-hidden bg-ink2">
          <Cover src={p.cover} seed={i + 1} title={p.title} className="h-full w-full transition duration-[1400ms] ease-out group-hover:scale-[1.06] group-hover:brightness-50" />
          <button onClick={() => toggle(id, p.audio)} aria-pressed={active} aria-label={`${active ? 'Pause' : 'Play'} ${p.title}`}
            className="absolute inset-0 grid place-items-center">
            <span className={`grid h-16 w-16 place-items-center rounded-full border border-bone/70 bg-ink/50 backdrop-blur transition duration-500 group-hover:scale-100 group-hover:opacity-100 group-focus-within:opacity-100 ${active ? 'scale-100 opacity-100' : 'md:scale-75 md:opacity-0'}`}>
              <PlayIcon playing={active} />
            </span>
          </button>
          {active && <Waveform seed={i + 2} n={40} active className="pointer-events-none absolute inset-x-4 bottom-4 h-10" />}
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-medium tracking-tight">{p.title}</h3>
            <p className="mt-1 text-steel">{p.artist}</p>
          </div>
          <span className="mt-1 whitespace-nowrap border border-bone/20 px-3 py-1 text-[10px] uppercase tracking-[.2em] text-steel">{p.category}</span>
        </div>
        {missing && <p role="status" className="mt-2 text-xs text-steel">Audio file not found. Replace the URL in src/data/content.js.</p>}
      </article>
    </Reveal>
  )
}

export default function Work() {
  return (
    <section id="work" className="px-6 py-28 md:px-12 md:py-44">
      <Head n="01" label="Selected work" title="Records, scores and jingles." />
      <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">{projects.map((p, i) => <Card key={p.title} p={p} i={i} />)}</div>
    </section>
  )
}
