import { ArrowRight, Check } from 'lucide-react'
import { ArrowLink, Eyebrow, PageIntro, PageShell } from '@/components/site-header'

const products = [
  ['VORTEX 5W-30', 'Full synthetic engine oil', 'API SP / ILSAC GF-6A', 'Modern protection for engines that demand a cleaner, sharper response.', 'Designed for turbocharged gasoline engines, hybrid powertrains, and everyday performance vehicles.'],
  ['CORE 10W-40', 'Advanced synthetic blend', 'API SN / ACEA A3/B4', 'Confident protection for the rhythm of daily driving.', 'A versatile formula for passenger vehicles, warm climates, and extended road cycles.'],
  ['FORGE HD 15W-40', 'Heavy duty diesel oil', 'API CK-4 / ACEA E9', 'Built to keep commercial power moving under pressure.', 'High-load protection for fleets, agricultural machinery, and demanding diesel applications.'],
]

export default function ProductsPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="Torque product house" title={<>Formulas for<br /><span className="text-[#e7442e]">forward motion.</span></>} description="A considered range of engine oils and working fluids, each developed around the exact demands of the machine it serves." />
      <section className="bg-[#f5f6f7] px-6 py-20 lg:px-12 lg:py-32">
        <div className="mb-14 flex items-end justify-between gap-8"><div><Eyebrow>Explore the range</Eyebrow><h2 className="text-5xl font-black tracking-[-0.07em] lg:text-7xl">Performance,<br /><span className="text-black/25">bottled.</span></h2></div><p className="hidden max-w-xs text-sm leading-relaxed text-black/55 md:block">One standard across every formula: reliable protection without compromise.</p></div>
        <div className="grid gap-5 lg:grid-cols-3">
          {products.map(([name, type, spec, desc, detail], index) => <article key={name} className="group bg-white p-5 transition hover:-translate-y-2"><div className="relative mb-8 flex h-80 items-center justify-center overflow-hidden bg-[#e6e8e9]"><img src="/product-bottles.jpg" alt="Torque lubricant bottles" className="size-full object-cover mix-blend-multiply opacity-80 transition duration-700 group-hover:scale-105" /><span className="absolute left-5 top-5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">0{index + 1} / formula</span></div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e7442e]">{type}</p><h3 className="mt-3 text-3xl font-black tracking-[-0.05em]">{name}</h3><p className="mt-5 text-sm leading-relaxed text-black/55">{desc}</p><p className="mt-5 border-t border-black/10 pt-5 text-sm leading-relaxed text-black/60">{detail}</p><div className="mt-7 flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{spec}</span><a href="/contact" aria-label={`Ask about ${name}`} className="flex size-10 items-center justify-center rounded-full bg-[#e7442e] text-white"><ArrowRight /></a></div></article>)}
        </div>
      </section>
      <section className="bg-[#171a1d] px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><Eyebrow>One range, three disciplines</Eyebrow><h2 className="text-5xl font-black leading-[0.9] tracking-[-0.07em] lg:text-7xl">The right oil<br /><span className="text-white/35">changes everything.</span></h2></div><div className="grid gap-8 md:grid-cols-3">{['Engine cleanliness', 'Thermal control', 'Long-life protection'].map((item) => <div key={item} className="border-t border-white/20 pt-5"><Check className="mb-8 text-[#ff8069]" /><h3 className="text-xl font-bold">{item}</h3><p className="mt-3 text-sm leading-relaxed text-white/45">Balanced chemistry keeps the system working at its best.</p></div>)}</div></div>
        <div className="mt-16"><ArrowLink href="/contact">Talk to a specialist</ArrowLink></div>
      </section>
    </PageShell>
  )
}
