/**
 * Utilitários para formatação de dados em formulários
 */

/**
 * Formata CEP (00000-000)
 */
export const formatCEP = (value: string): string => {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 5) return numbers;
  return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`;
};

/**
 * Formata telefone brasileiro
 * (00) 00000-0000 ou (00) 0000-0000
 */
export const formatPhone = (value: string): string => {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 10) {
    return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
};

/**
 * Remove formatação de CEP
 */
export const unformatCEP = (value: string): string => {
  return value.replace(/\D/g, '');
};

/**
 * Remove formatação de telefone
 */
export const unformatPhone = (value: string): string => {
  return value.replace(/\D/g, '');
};

/**
 * Valida formato de CEP
 */
export const isValidCEP = (cep: string): boolean => {
  const cleaned = unformatCEP(cep);
  return /^\d{8}$/.test(cleaned);
};

/**
 * Valida formato de telefone brasileiro
 */
export const isValidPhone = (phone: string): boolean => {
  const cleaned = unformatPhone(phone);
  return /^\d{10,11}$/.test(cleaned);
};

/**
 * Valida coordenadas geográficas
 */
export const isValidLatitude = (lat: number): boolean => {
  return lat >= -90 && lat <= 90;
};

export const isValidLongitude = (lng: number): boolean => {
  return lng >= -180 && lng <= 180;
};

/**
 * Valida formato de email
 */
export const isValidEmail = (email: string): boolean => {
  if (!email || email.trim() === '') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * Aplica máscara de telefone durante digitação
 * Retorna o valor formatado ou o valor original se não for possível formatar
 */
export const applyPhoneMask = (value: string): string => {
  if (!value) return '';
  return formatPhone(value);
};

/**
 * Valida email e retorna mensagem de erro se inválido
 */
export const validateEmail = (email: string): string | null => {
  if (!email || email.trim() === '') {
    return null; // Email é opcional, não retorna erro se vazio
  }
  if (!isValidEmail(email)) {
    return 'Email inválido. Por favor, insira um email válido.';
  }
  return null;
};

/**
 * Valida telefone e retorna mensagem de erro se inválido
 */
export const validatePhone = (phone: string): string | null => {
  if (!phone || phone.trim() === '') {
    return 'Telefone é obrigatório';
  }
  if (!isValidPhone(phone)) {
    return 'Telefone inválido. Use o formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX';
  }
  return null;
};

/**
 * Formata valor monetário para exibição (R$ 1.234,56)
 */
export const formatCurrency = (value: number | string): string => {
  const numValue = typeof value === 'string' ? parseFloat(value.replace(/[^\d,.-]/g, '').replace(',', '.')) : value;
  if (isNaN(numValue) || numValue === 0) return 'R$ 0,00';
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numValue);
};

/**
 * Aplica máscara de moeda durante digitação (R$ 1.234,56)
 * Aceita valores já formatados ou apenas números
 */
export const applyCurrencyMask = (value: string): string => {
  if (!value) return '';
  
  // Remove tudo exceto números (incluindo R$, espaços, pontos, vírgulas)
  const numbers = value.replace(/\D/g, '');
  
  if (!numbers || numbers === '0') return '';
  
  // Converte para número e divide por 100 para ter centavos
  // Exemplo: digita "1234" -> 1234/100 = 12.34 -> "R$ 12,34"
  const numValue = parseInt(numbers, 10) / 100;
  
  if (isNaN(numValue) || numValue === 0) return '';
  
  // Formata como moeda brasileira
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numValue);
};

/**
 * Remove formatação de moeda e retorna número
 * Aceita tanto valores formatados (R$ 1.234,56) quanto valores com apenas números
 */
export const unformatCurrency = (value: string): number => {
  if (!value) return 0;
  
  // Remove tudo exceto números
  const numbers = value.replace(/\D/g, '');
  if (!numbers) return 0;
  
  // Se o valor já estava formatado pela máscara (que divide por 100),
  // precisamos multiplicar por 100 para obter o valor original em centavos
  // Mas se o usuário digitou diretamente um número, não precisamos fazer isso
  // Vamos assumir que valores formatados vêm da máscara, então dividimos por 100
  // Na verdade, a máscara já divide por 100, então quando extraímos os números,
  // precisamos dividir por 100 novamente para obter o valor correto
  
  // Como a máscara divide por 100, os números extraídos já representam centavos
  // Então dividimos por 100 para obter o valor em reais
  const numValue = parseInt(numbers, 10) / 100;
  return isNaN(numValue) ? 0 : numValue;
};

/**
 * Valida valor monetário
 */
export const validateCurrency = (value: string): string | null => {
  if (!value || value.trim() === '') {
    return null; // Valor opcional
  }
  const numValue = unformatCurrency(value);
  if (isNaN(numValue) || numValue < 0) {
    return 'Valor monetário inválido';
  }
  return null;
};

/**
 * Formata CPF (000.000.000-00)
 */
export const formatCPF = (value: string): string => {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 3) return numbers;
  if (numbers.length <= 6) return `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
  if (numbers.length <= 9) return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`;
  return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9, 11)}`;
};

/**
 * Remove formatação de CPF
 */
export const unformatCPF = (value: string): string => {
  return value.replace(/\D/g, '');
};

/**
 * Valida formato de CPF (apenas formato, não valida dígitos verificadores)
 */
export const isValidCPFFormat = (cpf: string): boolean => {
  const cleaned = unformatCPF(cpf);
  return /^\d{11}$/.test(cleaned);
};

/**
 * Valida CPF completo (formato e dígitos verificadores)
 */
export const isValidCPF = (cpf: string): boolean => {
  const cleaned = unformatCPF(cpf);
  
  if (cleaned.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cleaned)) return false; // Rejeita CPFs com todos os dígitos iguais
  
  let sum = 0;
  let remainder;
  
  // Valida primeiro dígito verificador
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cleaned.substring(i - 1, i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleaned.substring(9, 10))) return false;
  
  // Valida segundo dígito verificador
  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cleaned.substring(i - 1, i)) * (12 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleaned.substring(10, 11))) return false;
  
  return true;
};

/**
 * Valida CPF e retorna mensagem de erro se inválido
 */
export const validateCPF = (cpf: string): string | null => {
  if (!cpf || cpf.trim() === '') {
    return null; // CPF é opcional
  }
  if (!isValidCPFFormat(cpf)) {
    return 'CPF inválido. Use o formato 000.000.000-00';
  }
  if (!isValidCPF(cpf)) {
    return 'CPF inválido. Verifique os dígitos verificadores';
  }
  return null;
};

