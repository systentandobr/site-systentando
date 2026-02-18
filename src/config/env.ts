// Configurações de ambiente
export const ENV_CONFIG = {
  // API de Segurança
  SYS_SEGURANCA_API_KEY: import.meta.env.VITE_SYS_SEGURANCA_API_KEY || 'development-local-test-key',
  SYS_SEGURANCA_BASE_URL: import.meta.env.VITE_SYS_SEGURANCA_BASE_URL || 'https://auth.systentando.com',
  SYS_SEGURANCA_DOMAIN: import.meta.env.VITE_SYS_SEGURANCA_DOMAIN || 'systentando-web',
  
  // API Principal
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api-prd.systentando.com/',
  BACKEND_BASE_URL: import.meta.env.VITE_BACKEND_BASE_URL || import.meta.env.VITE_API_BASE_URL || 'https://api-prd.systentando.com/api',
  RUN_MOCK_MODE: import.meta.env.VITE_RUN_MOCK_MODE === 'true' || false,
  
  // Groq AI
  GROQ_API_KEY: import.meta.env.VITE_GROQ_API_KEY || '',
} as const;
