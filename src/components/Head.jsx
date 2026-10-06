import Reveal from './Reveal'
export default function Head({ n, label, title }) {
  return (
    <Reveal className="mb-14 md:mb-24">
      <p className="eyebrow mb-5">{n} — {label}</p>
      <h2 className="font-display text-5xl font-medium leading-[.95] tracking-tight md:text-8xl">{title}</h2>
    </Reveal>
  )
}
