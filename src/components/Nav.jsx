import { site } from '../data/content'
const links = [['Work', '#work'], ['Services', '#services'], ['About', '#about'], ['The Sound', '#sound'], ['Contact', '#contact']]
export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 mix-blend-difference">
      <nav aria-label="Primary" className="flex items-center justify-between px-6 py-5 text-[11px] uppercase tracking-[.28em] text-bone md:px-12">
        <a href="#top" className="font-bold">{site.brand}</a>
        <ul className="hidden gap-9 md:flex">{links.map(([l, h]) => <li key={h}><a href={h} className="link-u">{l}</a></li>)}</ul>
        <a href="#contact" className="md:hidden">Contact</a>
      </nav>
    </header>
  )
}
