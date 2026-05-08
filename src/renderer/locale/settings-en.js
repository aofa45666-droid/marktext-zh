// English settings locale - returns key as-is
const en = new Proxy({}, { get: (_, key) => key })
export default en
