/**
 * Recebe um data no formato dd/mm/yyyy e retorna yyyy-mm-dd.
 *
 * @param string date - Data no formato 'dd/mm/yyyy'.
 * @return string - Data no formato 'yyyy-mm-dd'.
 */
export function dateToEN(date: string) {
  return date.split('/').reverse().join('-');
}
