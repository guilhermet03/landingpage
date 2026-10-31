"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react"
import { whatsappLink } from "@/lib/contact"

const SITE_NAME = "Guilherme Teles"

const links = [
  { label: "Início", href: "#" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
]

const sectionIds = ["sobre", "servicos", "contato"]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("#")

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4

      if (atBottom) {
        setActive("#contato")
        return
      }

      let current = "#"
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          current = `#${id}`
        }
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-slate-950/80 text-slate-100 backdrop-blur-md transition-colors duration-300 ${
        scrolled || open
          ? "border-slate-800 shadow-lg shadow-black/20"
          : "border-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* logo */}
        <a
          href="#"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
          aria-label={`${SITE_NAME}, voltar ao início`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 font-mono text-sm font-bold text-sky-400 transition duration-300 group-hover:rotate-6 group-hover:border-sky-400 group-hover:shadow-lg group-hover:shadow-sky-500/20">
            {"</>"}
          </span>
          <span className="text-lg font-bold tracking-tight">{SITE_NAME}</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {links.map((link) => {
              const isActive = active === link.href
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative py-1 text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-sky-400 after:transition-transform after:duration-300 hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400 ${
                      isActive
                        ? "text-sky-400 after:scale-x-100"
                        : "text-slate-300 after:scale-x-0 hover:after:scale-x-100"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href={whatsappLink()}
            className="flex items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
          >
            <WhatsappLogoIcon className="h-4 w-4" />
            Orçamento
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 transition duration-300 hover:border-sky-400 hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-sky-400 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="menu-mobile"
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-300 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav aria-label="Menu mobile" className="overflow-hidden">
          <ul className="container mx-auto flex flex-col gap-1 px-4 pb-4 pt-2">
            {links.map((link) => {
              const isActive = active === link.href
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "location" : undefined}
                    className={`block rounded-md px-3 py-3 font-medium transition-colors duration-300 hover:bg-slate-900 hover:text-sky-300 ${
                      isActive ? "bg-slate-900 text-sky-400" : "text-slate-300"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
            <li className="pt-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={whatsappLink()}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-md bg-green-500 px-4 py-3 font-semibold text-white transition duration-300 hover:bg-green-400"
              >
                <WhatsappLogoIcon className="h-5 w-5" />
                Pedir orçamento
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
