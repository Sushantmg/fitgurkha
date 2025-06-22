// src/lib/cookieStorage.ts

export function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined; // SSR safety

  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) {
    try {
      return decodeURIComponent(match[2]);
    } catch {
      return undefined;
    }
  }
  return undefined;
}

export function setCookie(name: string, value: string, days = 7) {
  if (typeof document === "undefined") return; // SSR safety

  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
}

export function removeCookie(name: string) {
  if (typeof document === "undefined") return; // SSR safety

  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
}
