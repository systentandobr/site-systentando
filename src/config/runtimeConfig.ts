// Configuração de variáveis de ambiente em runtime
// Permite carregar variáveis via window.__ENV__ para funcionar no Docker

declare global {
  interface Window {
    __ENV__?: {
      VITE_API_BASE_URL?: string;
      VITE_AGNO_API_URL?: string;
      VITE_PYTHON_CHATBOT_API_URL?: string;
      VITE_SYS_SEGURANCA_API_KEY?: string;
      VITE_SYS_SEGURANCA_BASE_URL?: string;
      VITE_SYS_SEGURANCA_DOMAIN?: string;
      VITE_BACKEND_BASE_URL?: string;
      VITE_RUN_MOCK_MODE?: string;
      VITE_GOOGLE_MAPS_API_KEY?: string;
      VITE_GROQ_API_KEY?: string;
      [key: string]: string | undefined;
    };
  }
}

/**
 * Obtém uma variável de ambiente em runtime
 * Prioridade: window.__ENV__ > import.meta.env > defaultValue
 */
export const getEnvVar = (key: string, defaultValue?: string): string => {
  // Primeiro tenta ler de window.__ENV__ (runtime, Docker)
  if (typeof window !== 'undefined' && window.__ENV__?.[key]) {
    return window.__ENV__[key]!;
  }
  
  // Fallback para import.meta.env (build-time, desenvolvimento)
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env?.[key]) {
      return import.meta.env[key] as string;
    }
  } catch {
    // Ignora erro se import.meta não estiver disponível
  }
  
  // Retorna valor padrão ou string vazia
  return defaultValue || '';
};

/**
 * Obtém uma variável de ambiente como boolean
 */
export const getEnvVarBool = (key: string, defaultValue: boolean = false): boolean => {
  const value = getEnvVar(key);
  if (!value) return defaultValue;
  return value.toLowerCase() === 'true' || value === '1';
};

