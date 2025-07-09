import type { NextApiRequest, NextApiResponse } from 'next';
import { transcreverAudio } from '../../lib/m4';

// Rota API: simula a transcrição de áudio via query parameter
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { audio_url } = req.query;
// Verifica se a URL do áudio foi informada corretamente
  if (typeof audio_url !== 'string') {
    return res.status(400).json({ erro: 'URL do áudio não fornecida' });
  }
  const data = transcreverAudio(audio_url);
  res.status(200).json(data);
}