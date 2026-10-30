import Image from "next/image";
import pcImage1 from '../../../public/about1.png'
import pcImage2 from '../../../public/about2.png'
import { Check } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
export function About(){

    return(
        <section className="bg-gray-300 py-16">

            <div className="container px-4 mx-auto ">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 itenms-center">

                <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                    <Image
                    src={pcImage1}
                    alt="foto Primeiro Quadrado"
                    fill
                    quality={100}
                    className="object-cover hover:scale-110 duration-300"
                    priority
                    />
                </div>

                <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
                    <Image
                    src={pcImage2}
                    alt="foto Segundo Quadrado"
                    fill
                    quality={100}
                    className="object-cover hover:scale-110 duration-300"
                    priority
                    />
                </div>
                </div>

                <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
                    <h2 className="text-4xl font-bold">
                        sobre
                    </h2>

                    <p>
                        texto
                    </p>

                    <ul className="space-y-4">
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500 "/>
                            aberto desde
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500 "/>
                            equipe preparada
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500 "/>
                            aberto desde
                        </li>
                    </ul>

                    <a 
                    target="_blank"
                    href={`https://wa.me/5561998107824?text=Olá vim pelo site e gostaria de mais informações.`}
                    className="bg-green-500 text-white flex items-center w-fit gap-2 px-4 py-2">
                        <WhatsappLogoIcon className="w-5 h-5 text-white"/>
                        Contato via Whatsapp
                    </a>
                </div>
            </div>
            
            </div>
        </section>
    )
}