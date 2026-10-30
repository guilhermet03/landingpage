import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react/dist/ssr";


export function Footer(){

    return(
        <section className="bg-blue-700 py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">
                            Nome do site
                        </h3>
                        <p className="mb-4">
                            descrição
                        </p>
                        <a 
                            target="_blank"
                            href={`https://wa.me/5561998107824?text=Olá vim pelo site e gostaria de mais informações.`}
                            className="bg-green-500 px-4 py-2 rounded-md">
                            Contato via Whatsapp
                        </a>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">
                            Contatos
                        </h3>
                        <p>Email: teste@test.com</p>
                        <p>Telefone: (xx) 123456789</p>
                        <p>Rua X, Centro, Patos de Minas | MG </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">
                            Redes Sociais
                        </h3>
                        <div className="flex gap-4">
                            <a href="#"
                            target="_blank">
                                <FacebookLogoIcon className="w-8 h-8"/>
                            </a>
                            <a href="#"
                            target="_blank">
                                <InstagramLogoIcon className="w-8 h-8"/>
                            </a>
                            <a href="#"
                            target="_blank">
                                <YoutubeLogoIcon className="w-8 h-8"/>
                            </a>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}