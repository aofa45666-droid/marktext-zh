// Patch native-keymap binding.gyp to work with newer Node.js/Python
const fs = require('fs')
const path = require('path')

const gypFile = path.join(__dirname, '..', 'node_modules', 'native-keymap', 'binding.gyp')
if (fs.existsSync(gypFile)) {
  let content = fs.readFileSync(gypFile, 'utf8')
  content = content.replace(/'openssl_fips" != ""/g, '"0" != ""')
  fs.writeFileSync(gypFile, content)
  console.log('patched native-keymap/binding.gyp')
}
