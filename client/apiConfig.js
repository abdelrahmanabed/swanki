import getConfig from 'next/config';
export function getApiBaseUrl() {
    const { publicRuntimeConfig } = getConfig();
    return publicRuntimeConfig.API_BASE_URL || 'http://localhost:5000';
  }