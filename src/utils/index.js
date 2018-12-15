export function commas(text) {
  return text.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}