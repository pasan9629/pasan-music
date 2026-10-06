import { motion } from 'framer-motion'
import { site } from '../data/content'
import Waveform from './Waveform'
const ease = [.2, .7, .2, 1]
// The one orchestrated moment: a flat line of silence swells into sound while the name resolves out of blur.
export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-12 pt-32 md:px-12">
      <motion.div aria-hidden className="absolute inset-x-4 top-[14%] h-[38vh] md:inset-x-12"
        initial={{ scaleY: .015, opacity: .1 }} animate={{ scaleY: 1, opacity: .22 }} transition={{ duration: 3, delay: .3, ease }}>
        <Waveform seed={4} n={96} active slow className="h-full" />
      </motion.div>
      <p className="eyebrow mb-6">From silence to sound</p>
      <h1 aria-label="Pasan" className="font-display text-[27vw] font-bold leading-[.78] tracking-[-.06em] md:text-[22vw]">
        {[...'PASAN'].map((c, i) => (
          <motion.span key={i} aria-hidden className="inline-block" initial={{ opacity: 0, y: '30%', filter: 'blur(16px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 1.5, delay: .6 + i * .13, ease }}>{c}</motion.span>
        ))}
      </h1>
      <motion.div className="mt-10 flex flex-col justify-between gap-10 md:mt-14 md:flex-row md:items-end"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 1.8 }}>
        <div>
          <p className="text-sm tracking-[.2em] text-steel">{site.roles}</p>
          <p className="mt-3 font-serif text-3xl italic md:text-5xl">“{site.tagline}”</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#work" className="btn btn-solid">Listen to my work</a>
          <a href="#contact" className="btn">Work with me</a>
        </div>
      </motion.div>
    </section>
  )
}
