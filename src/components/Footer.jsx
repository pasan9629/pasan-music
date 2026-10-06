import { site } from '../data/content'
export default function Footer() {
  return (
    <footer className="overflow-hidden px-6 pb-8 pt-16 md:px-12">
      <p className="font-display text-[15vw] font-bold leading-[.8] tracking-[-.05em] text-bone/90">{site.brand}</p>
      <div className="mt-10 flex flex-col justify-between gap-2 text-xs text-steel sm:flex-row">
        <p>{site.roles}</p><p>© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  )
}
