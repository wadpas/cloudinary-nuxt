export function getLocalStorageData<T>(key: string) {
  if (import.meta.client) {
    const data = localStorage.getItem(key)
    return data ? (JSON.parse(data) as T) : null
  }
}

export function setLocalStorageData<T>(key: string, data: T) {
  if (import.meta.client) {
    localStorage.setItem(key, JSON.stringify(data))
  }
}
