import { useEffect, useState } from "react";

export default function SectionAcessibilidade() {
const [data, setData] = useState<{
    descricao: string;
    codigo_html: string;
} | null>(null);

useEffect(() => {
    fetch("http://localhost:3001/api/acessibilidade/botao")
    .then((res) => res.json())
    .then(setData);
}, []);

return (
    <section className="py-10 px-4">
    <h2 className="text-2xl font-bold mb-4">Acessibilidade com ARIA</h2>
    {data ? (
        <div className="bg-gray-100 p-4 rounded-md">
        <p className="mb-2">{data.descricao}</p>
        <pre className="bg-white p-2 rounded text-sm overflow-auto">
            {data.codigo_html}
        </pre>
        </div>
    ) : (
        <p>Carregando...</p>
    )}
    </section>
);
}
