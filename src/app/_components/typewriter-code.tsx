"use client"

import { useEffect, useState } from "react"

type Token = {
  text: string; 
  className?: string 
}

const kw = "text-sky-400"
const str = "text-emerald-400"
const com = "text-slate-500 italic"
const fn = "text-amber-300"
const plain = "text-slate-200"

const lines: Token[][] = [
  [
    { text: "const ", className: kw },
    { text: "dev", className: plain },
    { text: " = {", className: plain },
  ],
  [
    { text: "  nome: ", className: plain },
    { text: '"Seu Nome"', className: str },
    { text: ",", className: plain },
  ],
  [
    { text: "  stack: ", className: plain },
    { text: '["Next.js", "React", "TypeScript"]', className: str },
    { text: ",", className: plain },
  ],
  [
    { text: "  entrega: ", className: plain },
    { text: '"site rápido e responsivo"', className: str },
    { text: ",", className: plain },
  ],
  [{ text: "}", className: plain }],
  [{ text: "", className: plain }],
  [
    { text: "dev", className: plain },
    { text: ".", className: plain },
    { text: "criarSite", className: fn },
    { text: "(", className: plain },
    { text: '"sua empresa"', className: str },
    { text: ")", className: plain },
  ],
  [{ text: "// ✔ no ar em poucos dias", className: com }],
]

const lineLengths = lines.map((l) => l.reduce((s, t) => s + t.text.length, 0))
const total = lineLengths.reduce((s, n) => s + n, 0)

export function TypewriterCode() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    let current = 0

    const tick = () => {
      current += 1
      setCount(current)
      if (current < total) {
        timer = setTimeout(tick, 28 + Math.random() * 40)
      }
    }

    timer = setTimeout(tick, 900)
    return () => clearTimeout(timer)
  }, [])

  let active = lines.length - 1
  let acc = 0
  for (let i = 0; i < lines.length; i++) {
    if (count < acc + lineLengths[i]) {
      active = i
      break
    }
    acc += lineLengths[i]
  }

  let start = 0

  return (
    <div
      className="rounded-xl border border-slate-700/70 bg-slate-900/90 shadow-2xl shadow-blue-950/40 backdrop-blur animate-float"
      role="img"
      aria-label="Trecho de código em TypeScript: um objeto dev com nome, stack e entrega, seguido da chamada dev.criarSite para sua empresa."
    >
      <div className="flex items-center gap-2 border-b border-slate-700/70 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 font-mono text-xs text-slate-400">dev.ts</span>
      </div>

      <pre
        aria-hidden="true"
        className="overflow-x-auto p-4 font-mono text-[13px] leading-7 sm:text-sm min-h-[15rem]"
      >
        {lines.map((tokens, i) => {
          const lineStart = start
          start += lineLengths[i]
          if (i > active) return null

          let remaining = Math.max(0, Math.min(count - lineStart, lineLengths[i]))

          return (
            <div key={i} className="flex">
              <span className="mr-4 w-5 select-none text-right text-slate-600">
                {i + 1}
              </span>
              <code>
                {tokens.map((t, j) => {
                  const shown = t.text.slice(0, remaining)
                  remaining = Math.max(0, remaining - t.text.length)
                  return (
                    <span key={j} className={t.className}>
                      {shown}
                    </span>
                  )
                })}
                {i === active && (
                  <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-sky-400 animate-blink" />
                )}
              </code>
            </div>
          )
        })}
      </pre>
    </div>
  )
}