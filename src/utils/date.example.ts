/**
 * Exemplo de uso das funções de data
 * Este arquivo demonstra como usar as funções do utils/date.ts
 */

import {
  getCurrentWeekDays,
  getWeekDaysForDate,
  formatDate,
  isToday,
  getCurrentMonthName,
  type WeekDay,
} from './date';

// Exemplo 1: Obter os dias da semana atual
const currentWeek = getCurrentWeekDays();

// Exemplo 2: Obter os dias da semana para uma data específica
const specificDate = new Date('2024-01-15'); // Segunda-feira
const weekForDate = getWeekDaysForDate(specificDate);

// Exemplo 3: Formatar data
const today = new Date();
const formattedDate = formatDate(today);

// Exemplo 4: Verificar se é hoje
const testDate = new Date();
const isTodayDate = isToday(testDate);

// Exemplo 5: Nome do mês atual
const monthName = getCurrentMonthName();

// Exemplo 6: Uso em componente React (simulado)
function simulateReactComponent() {
  const weekDays = getCurrentWeekDays();

  // Simular renderização
  weekDays.forEach((_day: WeekDay) => {
    // const _status = _day.active ? 'ATIVO' : 'inativo';
  });
}

simulateReactComponent();

// Exemplo 7: Navegação entre semanas
export function getPreviousWeek() {
  const today = new Date();
  today.setDate(today.getDate() - 7);
  return getWeekDaysForDate(today);
}

export function getNextWeek() {
  const today = new Date();
  today.setDate(today.getDate() + 7);
  return getWeekDaysForDate(today);
}

// Exemplo 8: Filtro de dias ativos
export const activeDays = currentWeek.filter((day: WeekDay) => day.active);

// Exemplo 9: Contagem de dias por status
export const activeCount = currentWeek.filter((day: WeekDay) => day.active).length;
export const inactiveCount = currentWeek.filter((day: WeekDay) => !day.active).length;

export { currentWeek, weekForDate, formattedDate, isTodayDate, monthName };
