/**
 * Centralized API configuration for Render Cloud Deployment & Local Development
 */

export const RENDER_BACKEND_URL = 'https://quan-ly-khach-san-if4s.onrender.com';

/**
 * Returns the base backend API URL without trailing slash.
 * Priority:
 * 1. import.meta.env.VITE_API_URL (if provided and not placeholder)
 * 2. RENDER_BACKEND_URL (Cloud production backend on Render)
 */
export const getApiBase = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl && typeof envUrl === 'string' && !envUrl.includes('-xxxx.')) {
    return envUrl.replace(/\/$/, '');
  }
  return RENDER_BACKEND_URL;
};

/**
 * Returns the base WebSocket URL.
 */
export const getWsBase = () => {
  const envWs = import.meta.env.VITE_WS_URL;
  if (envWs && typeof envWs === 'string' && !envWs.includes('-xxxx.')) {
    return envWs.replace(/\/$/, '');
  }
  const apiBase = getApiBase();
  return apiBase.replace(/^http/, 'ws');
};

export default getApiBase;
