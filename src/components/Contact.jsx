import { useState } from 'react'
import { site, projectTypes, budgets } from '../data/content'
import Reveal from './Reveal'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget))
    const body = `Name: ${d.name}\nEmail: ${d.email}\nWhatsApp: ${d.whatsapp}\nProject: ${d.type}\nBudget: ${d.budget}\n\n${d.message}`
    // No backend needed: opens the visitor's email app. To receive submissions directly,
    // replace this with a fetch() POST to your Formspree / Web3Forms endpoint.
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Project inquiry: ' + d.type)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  const L = ({ id, label, children }) => <label htmlFor={id} className="block"><span className="eyebrow">{label}</span>{children}</label>
  return (
    <section id="contact" className="px-6 py-28 md:px-12 md:py-44">
      <Reveal>
        <p className="eyebrow mb-5">05 — Work with me</p>
        <h2 className="font-display text-6xl font-bold leading-[.9] tracking-tighter md:text-[9rem]">Have an idea?<br />Let’s make it real.</h2>
      </Reveal>
      <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <form onSubmit={submit} className="grid gap-8 sm:grid-cols-2">
            <L id="name" label="Name"><input id="name" name="name" required autoComplete="name" className="field" /></L>
            <L id="email" label="Email"><input id="email" name="email" type="email" required autoComplete="email" className="field" /></L>
            <L id="whatsapp" label="WhatsApp"><input id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" className="field" placeholder="+94 ..." /></L>
            <L id="type" label="Project type"><select id="type" name="type" className="field">{projectTypes.map((t) => <option key={t} className="bg-ink">{t}</option>)}</select></L>
            <div className="sm:col-span-2"><L id="budget" label="Budget range"><select id="budget" name="budget" className="field">{budgets.map((t) => <option key={t} className="bg-ink">{t}</option>)}</select></L></div>
            <div className="sm:col-span-2"><L id="message" label="Message"><textarea id="message" name="message" rows="4" required className="field resize-none" placeholder="Tell me about the project, the mood, the deadline." /></L></div>
            <div className="sm:col-span-2"><button className="btn btn-solid w-full sm:w-auto">Send inquiry</button>
              {sent && <p role="status" className="mt-4 text-sm text-steel">Your email app should open with the message ready to send.</p>}</div>
          </form>
        </Reveal>
        <Reveal delay={.1} className="md:col-span-4 md:col-start-9">
          <p className="mb-6 text-lg text-steel">Prefer a quick chat? Message me directly.</p>
          <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.waMessage)}`} target="_blank" rel="noreferrer" className="btn btn-solid w-full">Chat on WhatsApp</a>
          <a href={`mailto:${site.email}`} className="link-u mt-8 inline-block text-steel">{site.email}</a>
        </Reveal>
      </div>
    </section>
  )
}
