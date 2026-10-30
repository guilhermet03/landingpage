import { Section } from "lucide-react";
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import pcImage from '../../../public/Group.png'
import Image from "next/image";

export function Hero() {
    return (
        <section className="bg-gray-400 text-white relative overflow-hidden">
            
            <div>
                <Image
                src={pcImage}
                alt='foto do pc'
                fill
                sizes='100vw'
                priority
                className='object-contain opacity-60 lg:hidden'
                />
                <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
            </div>

            <div className="container mx-auto pt-16 pd-16 md:pd-0 px-4 relative">

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">

                    <div className="space-y-6 ">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                        TEXTO PRINCIPAL
                        </h1>
                        <p className="lg:text-lg">
                        DESCRIÇÃO DO PRODUTO
                        </p>

                            <a  
                            href=""
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center w-fit gap-2"
                            >
                            <WhatsappLogoIcon/>
                            Contato via Whatsapp
                            </a>

                            <div className="mt-8">
                                <p className="text-sm mb-4">
                                    <b className="bg-black text-white px-2 py-1 rounded-md">
                                        5%
                                    </b>
                                    de desconto na primeira compra
                                </p>
                            </div>
                    </div>

                    <div className="hidden md:block h-full relative">
                        <Image
                        src={pcImage}
                        alt='foto'
                        className='object-contain'
                        fill
                        sizes="(max-width 768px) 0vw, 50vw"
                        quality={100}
                        priority
                        />
                    </div>

                </article>
            </div>
            
        </section>
    )
}