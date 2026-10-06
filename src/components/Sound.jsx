import { useState } from 'react'
import { sound } from '../data/content'
import Head from './Head'
import Reveal from './Reveal'
import Waveform from './Waveform'
import { PlayIcon, usePlayer, useTrack } from './Player'

function Row({ stage, ver }) {
  const id = `sound-${stage}-${ver}`
  const { active, missing, toggle } = useTrack(id)
  const { id: cur, playing } = usePlayer()
  const hot = playing && cur?.startsWith('sound-') // switching A/B keeps the playhead position
  return (
    <div className={`flex items-center gap-5 border-t border-bone/10 py-8 transition-opacity duration-500 md:gap-10 ${hot && !active ? 'opacity-40' : ''}`}>
      <button onClick={() => toggle(id, sound[stage][ver], hot)} aria-pressed={active} aria-label={`${active ? 'Pause' : 'Play'} ${stage} ${ver}`}
        className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-bone/50 transition hover:bg-bone hover:text-ink md:h-20 md:w-20"><PlayIcon playing={active} size={24} /></button>
      <div className="w-20 md:w-28"><p className="text-xl font-medium uppercase tracking-[.15em]">{ver}</p>{missing && <p role="status" className="mt-1 text-[10px] text-steel">Audio not found</p>}</div>
      <Waveform seed={stage === 'mixing' ? 3 : 8} n={72} dull={ver === 'before'} active={active} className="h-24 flex-1 md:h-36" />
    </div>
  )
}

export default function Sound() {
  const [stage, setStage] = useState('mixing')
  return (
    <section id="sound" className="bg-ink2 px-6 py-28 md:px-12 md:py-44">
      <Head n="04" label="The sound" title="Hear the difference." />
      <Reveal>
        <div role="tablist" aria-label="Processing stage" className="mb-10 flex gap-8">
          {['mixing', 'mastering'].map((s) => (
            <button key={s} role="tab" aria-selected={stage === s} onClick={() => setStage(s)}
              className={`pb-2 text-sm uppercase tracking-[.25em] transition ${stage === s ? 'border-b border-bone text-bone' : 'border-b border-transparent text-steel hover:text-bone'}`}>{s}</button>
          ))}
        </div>
        <p className="mb-10 max-w-lg text-steel">{sound[stage].note}</p>
        {/* REPLACE the before/after audio URLs in src/data/content.js → sound */}
        <Row stage={stage} ver="before" />
        <Row stage={stage} ver="after" />
        <div className="border-t border-bone/10" />
      </Reveal>
    </section>
  )
}
