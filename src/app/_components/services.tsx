"use client"

import useEmblaCarousel from "embla-carousel-react"
import {
  AppWindow,
  ChevronLeft,
  ChevronRight,
  Clock,
  Database,
  LayoutTemplate,
  Server,
} from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react"
import { whatsappLink } from "@/lib/contact"

const services = [
  {
    title: "Landing Page",
    description:
      "Uma página direta ao ponto para apresentar sua empresa e transformar visitantes em contatos.",
    duration: "1 semana",
    icon: <LayoutTemplate />,
  },
  {
    title: "Sistema Simples",
    description:
      "Painéis, cadastros e agendas sob medida para tirar a planilha do caminho e organizar o dia a dia.",
    duration: "2 a 3 semanas",
    icon: <AppWindow />,
  },
  {
    title: "Sistema Avançado",
    description:
      "Login, banco de dados, pagamentos e integrações para o sistema crescer junto com o seu negócio.",
    duration: "1 a 2 meses",
    icon: <Database />,
  },
  {
    title: "Servidores",
    description:
      "Hospedagem, domínio, certificado SSL e deploy configurados para o seu site ficar no ar sem susto.",
    duration: "2 a 3 dias",
    icon: <Server />,
  },
]

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  })

  function scrollPrev() {
    emblaApi?.scrollPrev()
  }

  function scrollNext() {
    emblaApi?.scrollNext()
  }

  return (
    <section id="servicos" className="scroll-mt-4 bg-slate-950 py-20 text-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="mb-3 text-4xl font-bold" data-aos="fade-up">
          O que eu desenvolvo
        </h2>
        <p
          className="mb-12 max-w-xl text-slate-400"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Do site de uma página ao sistema completo. Os prazos abaixo são uma
          estimativa e mudam conforme o tamanho do projeto.
        </p>

        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          <div className="overflow-hidden pt-2" ref={emblaRef}>
            <div className="flex">
              {services.map((item) => (
                <div
                  key={item.title}
                  className="min-w-0 flex-[0_0_100%] px-3 md:flex-[0_0_calc(100%/3)]"
                >
                  <article className="group flex h-full flex-col space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-xl hover:shadow-sky-900/20">
                    <div className="flex flex-1 items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 transition duration-300 group-hover:scale-110 group-hover:bg-sky-500/20">
                        {item.icon}
                      </span>
                      <div>
                        <h3 className="my-1 text-xl font-bold">{item.title}</h3>
                        <p className="select-none text-sm text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Clock className="h-5 w-5" />
                        <span>{item.duration}</span>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={whatsappLink(
                          `Olá, vim pelo site e gostaria de um orçamento de ${item.title}.`
                        )}
                        className="flex items-center justify-center gap-2 rounded-md px-4 py-1 transition duration-300 hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-green-300"
                      >
                        <WhatsappLogoIcon className="h-5 w-5" />
                        Pedir orçamento
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Serviço anterior"
            className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-sky-400 md:-left-5"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            type="button"
            aria-label="Próximo serviço"
            className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-sky-400 md:-right-5"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

        </div>
      </div>
    </section>
  )
}
