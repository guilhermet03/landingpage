import Image from "next/image"
import pcImage1 from "../../../public/about1.png"
import pcImage2 from "../../../public/about2.png"
import { Check } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import { whatsappLink } from "@/lib/contact"

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"]

export function About() {
  return (
    <section className="bg-slate-900 py-20 text-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div
            className="relative"
            data-aos="fade-up-right"
            data-aos-delay="200"
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-3xl border border-slate-700">
              <Image
                src={pcImage1}
                alt="Setup de desenvolvimento com código aberto no computador"
                fill
                sizes="(max-width: 1024px) 100px, 50px"
                quality={100}
                className="object-cover transition duration-500 hover:scale-105"
                priority
              />
            </div>

            <div className="absolute -bottom-8 right-4 h-40 w-40 overflow-hidden rounded-lg border-4 border-slate-900">
              <Image
                src={pcImage2}
                alt="Detalhe do projeto de um site em desenvolvimento"
                fill
                sizes="160px"
                quality={100}
                className="object-cover transition duration-500 hover:scale-110"
              />
            </div>
          </div>

          <div
            className="mt-10 space-y-6"
            data-aos="fade-up-left"
            data-aos-delay="200"
          >
            <h2 className="text-4xl font-bold">Quem escreve o seu código</h2>

            <p className="max-w-xl text-slate-300">
              Sou desenvolvedor web e cuido do projeto inteiro: layout,
              programação, hospedagem e ajustes depois da entrega. Você fala com
              quem programa, sem intermediários e sem ficar perdido em termos
              técnicos.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="shrink-0 text-emerald-400" />
                Código limpo, organizado e fácil de dar manutenção
              </li>
              <li className="flex items-center gap-2">
                <Check className="shrink-0 text-emerald-400" />
                Site responsivo, rápido e bem posicionado no Google
              </li>
              <li className="flex items-center gap-2">
                <Check className="shrink-0 text-emerald-400" />
                Suporte e ajustes depois que o site vai ao ar
              </li>
            </ul>

            <div className="flex flex-wrap gap-2" aria-label="Tecnologias que uso">
              {stack.map((tech, i) => (
                <span
                  key={tech}
                  data-aos="zoom-in"
                  data-aos-delay={300 + i * 80}
                  className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1 font-mono text-sm text-sky-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={whatsappLink()}
              className="flex w-fit items-center gap-2 rounded-md bg-green-500 px-5 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
            >
              <WhatsappLogoIcon className="h-5 w-5" />
              Falar sobre o seu projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
