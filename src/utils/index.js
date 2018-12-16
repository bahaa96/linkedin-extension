export function isElement(object) {
  return !!(object && object.nodeType == 1);
}

export function commas(text) {
  return text.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

export const formatHeaders = (headers) => {
  const out = {};
  const deletedHeaders = ["User-Agent", "Referer", "Accept-Encoding", "Cookie"];
  headers.map(({name, value}) => {
    if (!deletedHeaders.includes(name)) {
      out[name] = value;
    }
  });
  return out;
};