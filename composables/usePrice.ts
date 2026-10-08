// Western digits in both languages (client rule). Currency word is localized by i18n 'sar'.
export const fmt = (n: number) => Math.round(n).toLocaleString('en-US')
