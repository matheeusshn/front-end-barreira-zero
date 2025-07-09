import React, { useEffect, useState } from 'react'
import { BookOpenIcon } from '@heroicons/react/24/outline' // Ícone representando conteúdo educacional
import { motion } from 'framer-motion'

// Seção que exibe frases educacionais com links para vídeos em LIBRAS
export default function SectionFrases() {
  const [frases, setFrases] = useState<Array<{ portugues: string; libras: string }>>([])

  // Requisição à API para buscar frases educativas com vídeo em LIBRAS
  useEffect(() => {
    fetch('/api/libras?educacional=true')
      .then(res => res.json())
      .then(data => setFrases(data?.frases || [])) // garante que frases seja um array
      .catch(() => setFrases([])) // fallback em caso de erro
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl transition-all duration-300"
    >
      {/* Título da seção */}
      <div className="flex items-center gap-2 mb-6">
        <BookOpenIcon className="w-6 h-6 text-indigo-700" />
        <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700">
          Frases Educacionais em LIBRAS
        </h2>
      </div>

      {/* Verifica se há frases para mostrar */}
      {frases.length > 0 ? (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {frases.map((frase, idx) => (
            <li
              key={idx}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              {/* Frase em português */}
              <span className="text-gray-800 text-base sm:text-lg">{frase.portugues}</span>

              {/* Link para o vídeo em LIBRAS */}
              <a
                href={frase.libras}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 sm:mt-0 text-indigo-600 hover:text-indigo-800 font-medium underline transition"
              >
                Ver em LIBRAS
              </a>
            </li>
          ))}
        </motion.ul>
      ) : (
        // Mensagem caso não haja frases disponíveis
        <p className="text-gray-500 italic">Nenhuma frase disponível no momento.</p>
      )}
    </motion.section>
  )
}