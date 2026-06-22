const configuredBasePath = '/wuwuyn';

function getBasePath() {
  const envBase = import.meta.env.BASE_URL?.replace(/\/$/, '') ?? '';

  return envBase || configuredBasePath;
}

export function withBasePath(path: string) {
  if (/^(https?:|data:|blob:|mailto:|#)/.test(path)) {
    return path;
  }

  const basePath = getBasePath();
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (normalizedPath === basePath || normalizedPath.startsWith(`${basePath}/`)) {
    return normalizedPath;
  }

  return `${basePath}${normalizedPath}`;
}
