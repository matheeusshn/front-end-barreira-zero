import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid' // Ícone discreto

// Rodapé com informações de direitos autorais e desenvolvedor
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-10 mt-20 font-sans">
      {/* Texto de direitos autorais com contraste sutil */}
      <div className="flex justify-center items-center gap-2 mb-2">
        <HeartIcon className="w-4 h-4 text-pink-500" />
        <p className="text-sm sm:text-base">
          © 2025 <span className="font-semibold text-white">Barreira Zero</span>. Todos os direitos reservados.
        </p>
      </div>

      {/* Link do desenvolvedor com destaque no hover */}
      <p className="text-sm sm:text-base">
        Desenvolvido por{' '}
        <a
          href="https://www.linkedin.com/in/matheeusshn" // Substitua pelo seu perfil real
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-300 underline transition"
        >
          Matheus Henrique
        </a>
      </p>
    </footer>
  )
}