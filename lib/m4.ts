/**
 * Gera dados para representar um botão acessível,
 * incluindo descrição e código HTML.
 */
export function gerarBotaoAcessivel() {
  return {
    descricao: "Botão acessível com rótulo 'Enviar'",
    codigo_html: "<button aria-label='Enviar formulário' role='button'>Enviar</button>"
  };
}

/**
 * Simula a transcrição de um áudio a partir da URL informada,
 * retornando a URL e o texto transcrito.
 */
export function transcreverAudio(audio_url: string) {
  if (!audio_url) {
    throw new Error('URL do áudio não fornecida');
  }
  return {
    audio_url,
    transcricao: "Som de passos seguido de uma porta abrindo."
  };
}

/**
 * Simula a tradução de um texto para LIBRAS,
 * retornando a descrição e o link do vídeo.
 */
export function traduzirLibras(texto: string) {
  return {
    texto_original: texto,
    descricao_libras: `Tradução para LIBRAS da frase: "${texto}"`,
    link_video: `https://mock.barreirazero.com/libras/${encodeURIComponent(texto)}.mp4`
  };
}

/**
 * Retorna um conjunto de frases educacionais
 * traduzidas para LIBRAS, com links de vídeo.
 */
export function frasesEducacionais() {
  return {
    frases: [
      { portugues: "Bom dia, turma!", libras: "https://mock.barreirazero.com/libras/bom-dia.mp4" },
      { portugues: "Vamos aprender matemática.", libras: "https://mock.barreirazero.com/libras/matematica.mp4" }
    ]
  };
}