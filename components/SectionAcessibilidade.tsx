import React, { useEffect, useState } from 'react'
import { EyeIcon } from '@heroicons/react/24/outline' // Ícone representando acessibilidade
import { motion } from 'framer-motion' // Framer Motion para animação

// Seção que exibe um exemplo de botão acessível com descrição e código
export default function SectionAcessibilidade() {
  const [botao, setBotao] = useState<any>(null)

  // Busca o botão com atributos ARIA a partir da API
  useEffect(() => {
    fetch('/api/acessibilidade')
      .then(res => res.json())
      .then(setBotao)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl transition-all duration-300 font-sans"
    >
      {/* Título da seção com tamanho e destaque visual */}
      <div className="flex items-center gap-2 mb-6">
        <EyeIcon className="w-6 h-6 text-indigo-700" />
        <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700">
          Acessibilidade com ARIA
        </h2>
      </div>

      {/* Se o botão for carregado, exibe descrição e código */}
      {botao ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-4 text-gray-700"
        >
          {/* Texto explicativo sobre o recurso acessível */}
          <p className="text-base sm:text-lg leading-relaxed">{botao.descricao}</p>

          {/* Exibição do código HTML acessível, com estilização de bloco de código */}
          <pre className="bg-gray-100 border border-gray-300 p-4 rounded-lg text-sm sm:text-base font-mono whitespace-pre-wrap overflow-auto">
            {botao.codigo_html}
          </pre>
        </motion.div>
      ) : (
        // Mensagem de carregamento caso os dados ainda não estejam disponíveis
        <p className="text-gray-500 italic">Carregando recurso acessível...</p>
      )}
    </motion.section>
  )
}