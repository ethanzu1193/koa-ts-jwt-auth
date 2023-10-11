export const logger = {
  info: (text: string) => console.log('\x1b[37m%s \x1b[2m%s\x1b[0m', '>', text),
  error: (text: string) => console.log('\x1b[31m%s \x1b[31m%s\x1b[0m', '>', text),
  warn: (text: string) => console.log('\x1b[36m%s \x1b[36m%s\x1b[0m', '>', text),
}