import Header from '../components/Header'
import SectionAcessibilidade from '../components/SectionAcessibilidade'
import SectionAudio from '../components/SectionAudio'
import SectionLibras from '../components/SectionLibras'
import SectionFrases from '../components/SectionFrases'
import Footer from '../components/Footer'
import Head from 'next/head'


// Página inicial: Landing Page que consome as rotas da API
export default function Home() {
return (
    <>
    <Head>
        <title>Barreira Zero</title>
        <meta name="description" content="Landing Page de Acessibilidade" />
    </Head>
    <main className="scroll-smooth">
        <Header />
        <SectionAcessibilidade />
        <SectionAudio />
        <SectionLibras />
        <SectionFrases />
        <Footer />
    </main>
    </>
)
}
