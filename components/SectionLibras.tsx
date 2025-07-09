import React, { useState } from 'react'
import { LanguageIcon } from '@heroicons/react/24/outline' // Ícone para representar tradução
import { motion } from 'framer-motion'

// Seção que permite traduzir texto digitado para LIBRAS
export default function SectionLibras() {
  const [texto, setTexto] = useState('')
  const [resultado, setResultado] = useState<any>(null)

  // Requisição à rota de tradução para LIBRAS da API
  const handleTraducao = async () => {
    if (!texto) return
    const res = await fetch("/api/libras?texto=${encodeURIComponent(texto)}")
    const data = await res.json()
    setResultado(data)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl transition-all duration-300 font-sans"
    >
      {/* Título da seção com visual moderno */}
      <div className="flex items-center gap-2 mb-6">
        <LanguageIcon className="w-6 h-6 text-indigo-700" />
        <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700">
          Tradução para LIBRAS
        </h2>
      </div>

      {/* Input + botão com layout adaptável */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Campo de texto com foco estilizado */}
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite o texto para traduzir"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        {/* Botão de tradução com efeito visual no hover */}
        <button
          onClick={handleTraducao}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Traduzir
        </button>
      </div>

      {/* Resultado da tradução com descrição e link para vídeo */}
      {resultado && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg space-y-2"
        >
          <p className="text-gray-800">
            <strong>Descrição:</strong> {resultado.descricao_libras}
          </p>
          <a
            href={resultado.link_video}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 underline font-medium transition"
          >
            Ver vídeo em LIBRAS
          </a>
        </motion.div>
      )}
    </motion.section>
  )
}