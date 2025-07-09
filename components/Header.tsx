import React from 'react'
import { motion } from 'framer-motion' // Animação com Framer Motion

// Cabeçalho principal da landing page com título, subtítulo e imagem ilustrativa
export default function Header() {
  return (
    <section className="text-center lg:text-left py-16 px-6 bg-gradient-to-r from-indigo-50 to-white shadow-md rounded-xl font-sans">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Texto com animação */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start items-center gap-3 mb-2"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
              Resolvendo Barreiras com <span className="text-indigo-600">Tecnologia</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl"
          >
            Uma solução de acessibilidade integrando <strong>LIBRAS</strong>, transcrição de áudio e muito mais.
          </motion.p>
        </div>

        {/* Imagem ilustrativa */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          src="assets/images/imagema.jpg"
          alt="Inclusão e acessibilidade digital"
          className="w-full max-w-md rounded-xl shadow-lg"
        />
      </div>
    </section>
  )
}