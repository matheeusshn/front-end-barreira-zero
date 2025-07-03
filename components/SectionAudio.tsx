import { useState } from 'react'

export default function SectionAudio() {
const [url, setUrl] = useState('')
const [result, setResult] = useState<any>(null)

const handleSubmit = async () => {
    const res = await fetch("http://localhost:3001/api/audio/transcricao?audio_url=${encodeURIComponent(url)}")
    const data = await res.json()
    setResult(data)
}

return (
    <section className="py-10 px-4">
    <h2 className="text-2xl font-bold mb-4">Transcrição de Áudio</h2>
    <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="URL do áudio"
        className="border rounded p-2 w-full max-w-md"
    />
    <button onClick={handleSubmit} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Transcrever
    </button>
    {result && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
        <p><strong>Transcrição:</strong> {result.transcricao}</p>
        </div>
    )}
    </section>
  )
}