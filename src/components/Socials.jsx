import { socials } from '../data/content'
import Head from './Head'
export default function Socials() {
  return (
    <section className="px-6 pb-28 md:px-12 md:pb-44">
      <Head n="06" label="Socials" title="Follow the work." />
      <ul className="border-b border-bone/10">
        {socials.map((s) => (
          <li key={s.name}>
            <a href={s.href} target="_blank" rel="noreferrer" className="group flex items-baseline justify-between gap-6 border-t border-bone/10 py-7 transition-colors hover:bg-bone/[.03] md:px-4">
              <span className="text-4xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-3 md:text-7xl">{s.name}</span>
              <span className="hidden text-steel sm:block">{s.handle}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
