// Patch native module binding.gyp files for Node.js v20+/Python 3.14+ compatibility
const fs = require('fs')
const path = require('path')

const modules = ['native-keymap', 'fontmanager-redux', 'ced', 'keytar']

for (const mod of modules) {
  const gypFile = path.join(__dirname, '..', 'node_modules', mod, 'binding.gyp')
  if (fs.existsSync(gypFile)) {
    let content = fs.readFileSync(gypFile, 'utf8')
    const original = content
    // Replace openssl_fips condition which is undefined in newer node-gyp
    content = content.replace(/['"]?openssl_fips['"]?\s*!=\s*['"]\s*['"]/g, '"0" != ""')
    if (content !== original) {
      fs.writeFileSync(gypFile, content)
      console.log(`patched ${mod}/binding.gyp`)
    } else {
      console.log(`no openssl_fips in ${mod}/binding.gyp`)
    }
  } else {
    console.log(`${mod}/binding.gyp not found`)
  }
}
