// Tipos para os dias da semana
interface WeekDay {
  abbr: string;
  num: number;
  active: boolean;
}

// Abreviações dos dias da semana em português
const DAY_ABBREVIATIONS = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

/**
 * Gera os dias da semana atual com o dia atual marcado como ativo
 * @returns Array com os dias da semana atual
 *
 * @example
 * ```typescript
 * const weekDays = getCurrentWeekDays();
 * // Retorna algo como:
 * // [
 * //   { abbr: 'DOM', num: 10, active: false },
 * //   { abbr: 'SEG', num: 11, active: false },
 * //   { abbr: 'TER', num: 12, active: false },
 * //   { abbr: 'QUA', num: 13, active: true },  // Dia atual
 * //   { abbr: 'QUI', num: 14, active: false },
 * //   { abbr: 'SEX', num: 15, active: false },
 * //   { abbr: 'SAB', num: 16, active: false }
 * // ]
 * ```
 */
export function getCurrentWeekDays(): WeekDay[] {
  const today = new Date();
  const currentDay = today.getDay(); // 0 = Domingo, 1 = Segunda, etc.

  // Encontrar o início da semana (domingo)
  const startOfWeek = new Date(today);
  const daysFromSunday = today.getDay();
  startOfWeek.setDate(today.getDate() - daysFromSunday);

  const weekDays: WeekDay[] = [];

  // Gerar os 7 dias da semana
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startOfWeek);
    currentDate.setDate(startOfWeek.getDate() + i);

    weekDays.push({
      abbr: DAY_ABBREVIATIONS[i] || '',
      num: currentDate.getDate(),
      active: i === currentDay, // Marca como ativo se for o dia atual
    });
  }

  return weekDays;
}

/**
 * Gera os dias da semana para uma data específica
 * @param date - Data de referência
 * @returns Array com os dias da semana
 *
 * @example
 * ```typescript
 * const specificDate = new Date('2024-01-15'); // Segunda-feira
 * const weekDays = getWeekDaysForDate(specificDate);
 * // Retorna a semana que contém 15 de janeiro, com segunda-feira marcada como ativa
 * ```
 */
export function getWeekDaysForDate(date: Date): WeekDay[] {
  const targetDay = date.getDay();

  // Encontrar o início da semana (domingo)
  const startOfWeek = new Date(date);
  const daysFromSunday = date.getDay();
  startOfWeek.setDate(date.getDate() - daysFromSunday);

  const weekDays: WeekDay[] = [];

  // Gerar os 7 dias da semana
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startOfWeek);
    currentDate.setDate(startOfWeek.getDate() + i);

    weekDays.push({
      abbr: DAY_ABBREVIATIONS[i] || '',
      num: currentDate.getDate(),
      active: i === targetDay, // Marca como ativo se for o dia da data de referência
    });
  }

  return weekDays;
}

/**
 * Formata uma data para exibição
 * @param date - Data a ser formatada
 * @returns String formatada (ex: "12 de Janeiro")
 *
 * @example
 * ```typescript
 * const formatted = formatDate(new Date());
 * // Retorna: "13 de Janeiro" (ou o mês atual)
 * ```
 */
export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
  };

  return date.toLocaleDateString('pt-BR', options);
}

/**
 * Verifica se uma data é hoje
 * @param date - Data a ser verificada
 * @returns true se for hoje, false caso contrário
 *
 * @example
 * ```typescript
 * const isTodayDate = isToday(new Date('2024-01-13'));
 * // Retorna true se hoje for 13 de janeiro de 2024
 * ```
 */
export function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

/**
 * Obtém o nome do mês atual
 * @returns Nome do mês em português
 *
 * @example
 * ```typescript
 * const monthName = getCurrentMonthName();
 * // Retorna: "Janeiro" (ou o mês atual)
 * ```
 */
export function getCurrentMonthName(): string {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { month: 'long' };
  return today.toLocaleDateString('pt-BR', options);
}

// Dados estáticos para compatibilidade (deprecated - usar getCurrentWeekDays() em vez disso)
const currentWeekDays = getCurrentWeekDays();

export { currentWeekDays, type WeekDay };
