const HOME_PATH = '/';

export function getNormalizedPath(pathname = window.location.pathname): string {
  return pathname.replace(/\/+$/, '') || HOME_PATH;
}

export function isHomePath(pathname = window.location.pathname): boolean {
  return getNormalizedPath(pathname) === HOME_PATH;
}

export function goHome(): void {
  if (!isHomePath()) {
    window.history.pushState({}, '', HOME_PATH);
  }
}
