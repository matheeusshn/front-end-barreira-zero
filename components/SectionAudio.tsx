import React, { useState } from 'react'
import { SpeakerWaveIcon } from '@heroicons/react/24/outline' // Ícone para representar áudio
import { motion } from 'framer-motion' // Importa animações

// Seção responsável por transcrever um áudio a partir de uma URL
export default function SectionAudio() {
  const [urlAudio, setUrlAudio] = useState('')
  const [transcricao, setTranscricao] = useState('')

  // Função que consome a rota de transcrição de áudio da API
  const handleTranscricao = async () => {
    if (!urlAudio) return
    const res = await fetch("/api/audio?audio_url=${encodeURIComponent(urlAudio)}")
    const data = await res.json()
    setTranscricao(data.transcricao)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl transition-all duration-300 font-sans"
    >
      {/* Título da seção com estilo moderno e cor de destaque */}
      <div className="flex items-center gap-2 mb-6">
        <SpeakerWaveIcon className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700">
          Transcrição de Áudio
        </h2>
      </div>

      {/* Área de input + botão responsivos em colunas ou linha, dependendo do tamanho da tela */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        {/* Campo para digitar a URL do áudio */}
        <input
          type="text"
          value={urlAudio}
          onChange={(e) => setUrlAudio(e.target.value)}
          placeholder="Cole a URL do áudio aqui"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        {/* Botão de transcrição com hover e animação */}
        <button
          onClick={handleTranscricao}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Transcrever
        </button>
      </motion.div>

      {/* Exibição do resultado da transcrição, se houver */}
      {transcricao && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg"
        >
          <p className="text-gray-800">
            <strong>Transcrição:</strong> {transcricao}
          </p>
        </motion.div>
      )}
    </motion.section>
  )
}