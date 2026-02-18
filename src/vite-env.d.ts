/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_VERSION?: string
  readonly VITE_BUILD_TIME?: string
  readonly VITE_BUILD_HASH?: string
  readonly VITE_API_BASE_URL?: string
  readonly VITE_API_KEY?: string
  readonly VITE_SYS_SEGURANCA_DOMAIN?: string
  readonly VITE_SYS_SEGURANCA_BASE_URL?: string
  readonly VITE_SYS_SEGURANCA_API_KEY?: string
  readonly VITE_GOOGLE_MAPS_API_KEY?: string
  readonly VITE_GROQ_API_KEY?: string
  readonly VITE_RUN_MOCK_MODE?: string
  // Adicione outras variáveis de ambiente aqui conforme necessário
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}
