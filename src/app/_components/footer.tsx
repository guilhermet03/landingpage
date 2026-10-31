import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr"
import { whatsappLink } from "@/lib/contact"

export function Footer() {
  return (
    <footer id="contato" className="border-t border-slate-800 bg-slate-900 py-16 text-slate-100">
      <div className="container mx-auto px-4">
        <div
          className="mb-12 mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up"
        >
          <div>
            <h3 className="mb-2 text-2xl font-semibold">NexBite</h3>
            <p className="mb-4 max-w-sm text-slate-400">
              Desenvolvedor web. Crio sites, sistemas e servidores para empresas
              que querem aparecer na internet e vender mais.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={whatsappLink()}
              className="inline-block rounded-md bg-green-500 px-4 py-2 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
            >
              Chamar no WhatsApp
            </a>
          </div>

          <div>
            <h3 className="mb-2 text-2xl font-semibold">Contato</h3>
            <p>Email: teste@test.com</p>
            <p>Telefone: (xx) 123456789</p>
            <p>Rua X, Centro, Patos de Minas | MG</p>
          </div>

          <div>
            <h3 className="mb-2 text-2xl font-semibold">Redes sociais</h3>
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition duration-300 hover:-translate-y-1 hover:text-sky-400"
              >
                <FacebookLogoIcon className="h-8 w-8" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition duration-300 hover:-translate-y-1 hover:text-sky-400"
              >
                <InstagramLogoIcon className="h-8 w-8" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="transition duration-300 hover:-translate-y-1 hover:text-sky-400"
              >
                <YoutubeLogoIcon className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>

        <p className="border-t border-slate-800 pt-6 font-mono text-sm text-slate-500">
          $ git commit -m &quot;obrigado pela visita&quot;
        </p>
      </div>
    </footer>
  )
}
