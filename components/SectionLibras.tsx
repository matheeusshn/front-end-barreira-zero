import { useState } from 'react'

export default function SectionLibras() {
    const [text, setText] = useState('')
    const [data, setData] = useState<any>(null)

const handleTranslate = async () => {
    const res = await fetch("http://localhost:3001/api/libras/traduzir?texto=${encodeURIComponent(text)}")
    const json = await res.json()
    setData(json)
    }

    return (
    <section className="py-10 px-4">
    <h2 className="text-2xl font-bold mb-4">Tradução para LIBRAS</h2>
<input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite o texto"
        className="border rounded p-2 w-full max-w-md"
    />
    <button onClick={handleTranslate} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Traduzir
    </button>

    {data && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
        <p><strong>Texto:</strong> {data.texto_original}</p>
        <p><strong>Descrição:</strong> {data.descricao_libras}</p>
        <video controls className="mt-2 rounded w-full max-w-md">
            <source src={data.link_video} type="video/mp4" />
        </video>
        </div>
    )}
    </section>
    )
}
