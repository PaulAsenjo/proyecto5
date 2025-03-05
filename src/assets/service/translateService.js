
const translate = require('translate');
translate.engine = 'google';
translate.key = "f6e9cd67ec5499409bd135773ecb9df5361e3f40"; // Reemplaza con tu API key

export async function traducirTexto(texto, idiomaDestino) {
  try {
    const traduccion = await translate(texto, { to: idiomaDestino });
    return traduccion;
  } catch (error) {
    console.error('Error al traducir:', error);
    return null;
  }
}