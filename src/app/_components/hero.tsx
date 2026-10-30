import { ArrowDown } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import { whatsappLink } from "@/lib/contact"
import { TypewriterCode } from "./typewriter-code"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-100">
      {/* grade sutil de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(148 163 184 / 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 70% 40%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 70% 40%, black 20%, transparent 75%)",
        }}
      />
      {/* brilho azul atrás do editor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl motion-safe:animate-glow"
      />

      <div className="container relative mx-auto px-4 py-20 lg:py-28">
        <article className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p
              className="w-fit rounded-md border border-slate-700 bg-slate-900 px-3 py-1 font-mono text-sm text-emerald-400"
              data-aos="fade-down"
            >
              $ npm run criar-site
            </p>

            <h1
              className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Sites rápidos, bonitos e feitos para vender.
            </h1>

            <p
              className="max-w-xl text-slate-300 lg:text-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Sou desenvolvedor web e crio landing pages, sistemas e servidores
              sob medida para a sua empresa. Do primeiro commit até o site no
              ar, com código limpo e layout que funciona em qualquer tela.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={whatsappLink()}
                className="flex w-fit items-center gap-2 rounded-md bg-green-500 px-5 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
              >
                <WhatsappLogoIcon className="h-5 w-5" />
                Chamar no WhatsApp
              </a>

              <a
                href="#servicos"
                className="flex w-fit items-center gap-2 rounded-md border border-slate-600 px-5 py-3 font-semibold text-slate-200 transition duration-300 hover:border-sky-400 hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                Ver serviços
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>

            <p
              className="pt-2 text-sm text-slate-400"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <b className="mr-2 rounded-md bg-blue-600 px-2 py-1 text-white">
                5%
              </b>
              de desconto no primeiro projeto
            </p>
          </div>

          <div data-aos="fade-left" data-aos-delay="300">
            <TypewriterCode />
          </div>
        </article>
      </div>
    </section>
  )
}
