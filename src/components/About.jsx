import { about } from '../data/content'
import Head from './Head'
import Reveal from './Reveal'
export default function About() {
  return (
    <section id="about" className="px-6 py-28 md:px-12 md:py-44">
      <Head n="03" label="About" title="The person behind the sound." />
      <div className="grid gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden border border-bone/10 bg-ink2">
            {about.portrait
              ? <img src={about.portrait} alt="Portrait of Pasan Mahela" loading="lazy" className="h-full w-full object-cover grayscale" />
              : <div className="grid h-full place-items-center p-8 text-center text-sm text-steel">PORTRAIT PLACEHOLDER<br />Set about.portrait in src/data/content.js</div>}
          </div>
        </Reveal>
        <Reveal delay={.1} className="md:col-span-6 md:col-start-7">
          <blockquote className="font-serif text-4xl italic leading-tight md:text-6xl">“{about.quote}”</blockquote>
          <div className="mt-12 max-w-xl space-y-6 text-lg leading-relaxed text-bone/75">{about.paragraphs.map((t) => <p key={t}>{t}</p>)}</div>
        </Reveal>
      </div>
    </section>
  )
}
