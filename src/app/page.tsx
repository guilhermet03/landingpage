import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";

export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Footer/>
    </main>
    </>
  )
}