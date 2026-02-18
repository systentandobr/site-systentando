/**
 * Utilitário para fazer fetch de arquivos locais no projeto
 */

// Tipos para diferentes tipos de dados
export interface LocalDataConfig {
  basePath?: string;
  timeout?: number;
  retries?: number;
}

// Configuração padrão
const defaultConfig: LocalDataConfig = {
  basePath: '/data', // Pasta dentro de public/
  timeout: 5000,
  retries: 3,
};

/**
 * Faz fetch de um arquivo JSON local
 * @param filename Nome do arquivo (ex: 'plano_rotinas.json')
 * @param config Configuração opcional
 * @returns Promise com os dados do arquivo
 */
export async function fetchLocalJSON<T = any>(
  filename: string,
  config: LocalDataConfig = {}
): Promise<T> {
  const finalConfig = { ...defaultConfig, ...config };
  const url = `${finalConfig.basePath}/${filename}`;

  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= finalConfig.retries!; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), finalConfig.timeout);

      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data as T;
    } catch (error) {
      lastError = error as Error;
      console.warn(`Tentativa ${attempt} falhou para ${url}:`, error);

      if (attempt === finalConfig.retries) {
        throw new Error(
          `Falha ao carregar ${filename} após ${finalConfig.retries} tentativas: ${lastError.message}`
        );
      }

      // Aguarda um pouco antes da próxima tentativa
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
    }
  }

  throw lastError!;
}

/**
 * Faz fetch de um arquivo de texto local
 * @param filename Nome do arquivo
 * @param config Configuração opcional
 * @returns Promise com o conteúdo do arquivo
 */
export async function fetchLocalText(
  filename: string,
  config: LocalDataConfig = {}
): Promise<string> {
  const finalConfig = { ...defaultConfig, ...config };
  const url = `${finalConfig.basePath}/${filename}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.text();
}

/**
 * Verifica se um arquivo local existe
 * @param filename Nome do arquivo
 * @param config Configuração opcional
 * @returns Promise<boolean>
 */
export async function checkLocalFileExists(
  filename: string,
  config: LocalDataConfig = {}
): Promise<boolean> {
  try {
    const finalConfig = { ...defaultConfig, ...config };
    const url = `${finalConfig.basePath}/${filename}`;

    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Lista arquivos disponíveis na pasta de dados
 * @param config Configuração opcional
 * @returns Promise com lista de arquivos (se disponível)
 */
export async function listLocalFiles(config: LocalDataConfig = {}): Promise<string[]> {
  try {
    const finalConfig = { ...defaultConfig, ...config };
    const response = await fetch(`${finalConfig.basePath}/index.json`);

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    return data.files || [];
  } catch {
    return [];
  }
}

// Exemplos de uso
export const LocalDataExamples = {
  // Carregar plano de rotinas
  loadRoutinePlan: () => fetchLocalJSON('/plano_integrado_de_rotinas.json'),

  // Carregar configurações
  loadConfig: () => fetchLocalJSON('/config.json'),

  // Carregar dados de usuário
  loadUserData: () => fetchLocalJSON('/user_data.json'),

  // Carregar template
  loadTemplate: () => fetchLocalText('/template.txt'),
};
