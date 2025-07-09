import type { NextApiRequest, NextApiResponse } from 'next'
import { traduzirLibras, frasesEducacionais } from '../../lib/m4'

// Rota API: traduz texto para LIBRAS ou retorna frases educacionais
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { texto, educacional } = req.query

  // Se 'educacional=true', retorna frases educacionais em LIBRAS
  if (educacional === 'true') {
    const resultado = frasesEducacionais()

    // Verifica se a função retornou um objeto com array de frases
    if (!resultado || !Array.isArray(resultado.frases)) {
      return res.status(200).json({ frases: [] })
    }

    return res.status(200).json(resultado)
  }

  // Valida se o texto foi fornecido na requisição
  if (typeof texto !== 'string') {
    return res.status(400).json({ erro: 'Texto não fornecido' })
  }

  // Gera dados da tradução de LIBRAS para o texto informado
  const data = traduzirLibras(texto)

  // Verifica se houve erro ao gerar a tradução
  if (!data) {
    return res.status(500).json({ erro: 'Erro ao traduzir para LIBRAS' })
  }

  res.status(200).json(data)
}