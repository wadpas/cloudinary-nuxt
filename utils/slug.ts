import CyrillicToTranslit from 'cyrillic-to-translit-js'
const cyrillicToTranslit = CyrillicToTranslit({ preset: 'uk' })

export function toUpSlug(str: string) {
  if (!str) return ''
  return cyrillicToTranslit
    .transform(str.trim(), '-')
    .replaceAll('.', '')
    .replaceAll(',', '')
    .replaceAll(':', '')
    .replaceAll(';', '')
    .replaceAll('?', '')
    .replaceAll('!', '')
    .replaceAll('"', '')
    .replaceAll("'", '')
    .replaceAll('«', '')
    .replaceAll('»', '-')
}

export function toSlug(str: string) {
  return toUpSlug(str).toLowerCase()
}
