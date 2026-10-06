import { services } from '../data/content'
import Head from './Head'
import Reveal from './Reveal'
export default function Services() {
  return (
    <section id="services" className="px-6 py-28 md:px-12 md:py-44">
      <Head n="02" label="Services" title="What I make." />
      <ol className="border-b border-bone/10">
        {services.map((s, i) => (
          <Reveal key={s.title}>
            <li className="group grid gap-4 border-t border-bone/10 py-9 transition-colors duration-500 hover:bg-bone/[.03] md:grid-cols-[6rem_1fr_1fr] md:items-baseline md:gap-10 md:px-4 md:py-12">
              <span className="font-serif text-2xl italic text-steel">0{i + 1}</span>
              <h3 className="text-3xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-3 md:text-5xl">{s.title}</h3>
              <p className="max-w-md leading-relaxed text-steel">{s.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
