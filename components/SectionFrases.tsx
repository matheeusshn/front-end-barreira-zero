import { useEffect, useState } from "react";

export default function SectionFrases() {
    const [frases, setFrases] = useState<any[]>([]);

    useEffect(() => {
    fetch("http://localhost:3001/api/libras/frases")
        .then((res) => res.json())
        .then((json) => setFrases(json.frases || []));
    }, []);

    return (
    <section className="py-10 px-4">
        <h2 className="text-2xl font-bold mb-4">Frases Educacionais em LIBRAS</h2>
        <div className="grid gap-4 md:grid-cols-2">
        {frases.map((frase, idx) => (
            <div key={idx} className="bg-gray-100 p-4 rounded">
            <p className="font-semibold mb-2">{frase.portugues}</p>
            <video controls className="rounded w-full">
                <source src={frase.libras} type="video/mp4" />
            </video>
            </div>
        ))}
        </div>
    </section>
    );
}
