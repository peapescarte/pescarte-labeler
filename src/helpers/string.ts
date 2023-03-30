export const normalizeString = (string: string): string =>
  string
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

export const sanitizeString = (text: string): string => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Função que realiza busca por um termo em um texto, retorna verdadeiro se encontrar.
 * busca case-insensitive e ignora acentos
 * @param params (term: string, text: string)
 * @example
 * ```ts
 * search('string', 'texto com string de exemplo') // true
 * search('string', 'texto de exemplo') // false
 * ```
 */
export const search = (term: string, text: string): boolean => {
  if (!text || text === '' || !term || term === '') return false;

  const sanitized = sanitizeString(term);
  const match = new RegExp(normalizeString(sanitized), 'gi');

  const normalized = normalizeString(text);
  return match.test(normalized);
};
