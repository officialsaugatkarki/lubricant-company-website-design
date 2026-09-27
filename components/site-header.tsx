'use client'

import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const links = [
  ['Products', '/products'],
  ['Applications', '/applications'],
  ['Technology', '/technology'],
  ['About', '/about'],
  ['Contact', '/contact'],
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl">
      <div className="flex h-20 w-full items-center justify-between px-6 lg:px-12">
        <a href="/" className="flex items-center gap-3" aria-label="Torque home">
          <span className="flex size-9 items-center justify-center bg-[#e7442e] text-sm font-black italic text-white">TQ</span>
          <span><span className="block text-lg font-black tracking-[-0.08em]">TORQUE</span><span className="block text-[8px] font-semibold tracking-[0.28em] text-black/45">ENGINEERED MOTION</span></span>
        </a>
        <nav className="hidden items-center gap-8 text-xs font-semibold text-black/60 lg:flex">{links.map(([label, href]) => <a key={href} href={href} className="transition-colors hover:text-[#e7442e]">{label}</a>)}</nav>
        <a href="/contact" className="group hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] lg:flex">Find your lubricant <span className="flex size-9 items-center justify-center rounded-full bg-[#e7442e] text-white transition-transform group-hover:rotate-45"><ArrowRight /></span></a>
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <div className="border-t border-black/10 bg-white px-6 py-8 lg:hidden"><nav className="flex flex-col gap-6 text-2xl font-bold">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a href="/contact" className="text-[#e7442e]" onClick={() => setMenuOpen(false)}>Find your lubricant</a></nav></div>}
    </header>
  )
}

export function PageFooter() {
  return <footer className="border-t border-black/10 bg-white py-16"><div className="flex w-full flex-col justify-between gap-4 px-6 text-[10px] uppercase tracking-widest text-black/40 md:flex-row lg:px-12"><span>© 2026 Torque Lubricants. Engineered for motion.</span><div className="flex gap-6"><a href="/about" className="hover:text-[#e7442e]">About Torque</a><a href="/contact" className="hover:text-[#e7442e]">Contact</a><a href="/technology" className="hover:text-[#e7442e]">Technology</a></div></div></footer>
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen bg-white text-[#111315] selection:bg-[#e7442e] selection:text-white"><SiteHeader />{children}<PageFooter /></main>
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#e7442e]">{children}</p>
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description: string }) {
  return <section className="border-b border-black/10 px-6 pb-20 pt-40 lg:px-12 lg:pb-28 lg:pt-52"><div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"><div><Eyebrow>{eyebrow}</Eyebrow><h1 className="max-w-5xl text-[clamp(4rem,9vw,9rem)] font-black leading-[0.86] tracking-[-0.09em]">{title}</h1></div><p className="max-w-md text-lg leading-relaxed text-black/55">{description}</p></div></section>
}

export function ArrowLink({ children, href = '/contact' }: { children: React.ReactNode; href?: string }) {
  return <a href={href} className="group inline-flex items-center gap-4 bg-[#e7442e] px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#111315]">{children}<ArrowRight className="transition-transform group-hover:translate-x-1" /></a>
}
