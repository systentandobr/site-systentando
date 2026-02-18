/**
 * Utilitário para verificar se a versão da aplicação está atualizada
 * e detectar cache desatualizado do navegador
 */

import { getEnvVar } from "@/config/runtimeConfig";

export interface VersionInfo {
  version: string;
  buildTime: string;
  buildHash: string;
}

/**
 * Obtém a versão atual do código carregado no navegador
 * Esta versão é injetada durante o build via import.meta.env
 */
export function getCurrentVersion(): VersionInfo | null {
  try {
    // Vite injeta essas variáveis durante o build
    const version = getEnvVar('VITE_APP_VERSION') || 'unknown';
    const buildTime = getEnvVar('VITE_BUILD_TIME') || new Date().toISOString();
    const buildHash = getEnvVar('VITE_BUILD_HASH') || 'unknown';

    return {
      version,
      buildTime,
      buildHash,
    };
  } catch (error) {
    console.error('[VersionCheck] Erro ao obter versão atual:', error);
    return null;
  }
}

/**
 * Busca a versão mais recente do servidor
 * Tenta buscar o arquivo version.json gerado durante o build
 */
export async function fetchServerVersion(): Promise<VersionInfo | null> {
  try {
    // Adicionar timestamp para evitar cache
    const timestamp = Date.now();
    const response = await fetch(`/version.json?t=${timestamp}`, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      console.warn('[VersionCheck] Arquivo version.json não encontrado ou erro na requisição');
      return null;
    }

    // Verificar se o conteúdo é JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.warn('[VersionCheck] Resposta do servidor não é JSON:', contentType);
      return null;
    }

    const data = await response.json();
    return data as VersionInfo;
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error('[VersionCheck] Erro de sintaxe ao processar JSON da versão:', error);
    } else {
      console.error('[VersionCheck] Erro ao buscar versão do servidor:', error);
    }
    return null;
  }
}

/**
 * Compara duas versões e retorna se são diferentes
 */
export function compareVersions(
  current: VersionInfo | null,
  server: VersionInfo | null
): boolean {
  if (!current || !server) {
    return false;
  }

  // Comparar por buildHash primeiro (mais confiável)
  if (current.buildHash !== 'unknown' && server.buildHash !== 'unknown') {
    return current.buildHash !== server.buildHash;
  }

  // Fallback: comparar por buildTime
  if (current.buildTime && server.buildTime) {
    return current.buildTime !== server.buildTime;
  }

  // Último fallback: comparar por version
  return current.version !== server.version;
}

/**
 * Verifica se há uma nova versão disponível
 * Retorna true se a versão do servidor for diferente da versão atual
 */
export async function checkForNewVersion(): Promise<boolean> {
  const currentVersion = getCurrentVersion();
  const serverVersion = await fetchServerVersion();

  if (!currentVersion || !serverVersion) {
    // Se não conseguir verificar, assumir que está atualizado
    return false;
  }

  return compareVersions(currentVersion, serverVersion);
}

/**
 * Força o reload da página para carregar a nova versão
 */
export function forceReload(message?: string): void {
  if (message) {
    console.log(`[VersionCheck] ${message}`);
  }

  // Limpar todos os caches antes de recarregar
  if ('caches' in window) {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
  }

  // Forçar reload sem cache
  window.location.reload();
}
