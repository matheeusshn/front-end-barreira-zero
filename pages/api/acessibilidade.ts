import type { NextApiRequest, NextApiResponse } from 'next';
import { gerarBotaoAcessivel } from '../../lib/m4';

// Rota API: retorna dados para um botão acessível
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = gerarBotaoAcessivel();
  res.status(200).json(data);
}