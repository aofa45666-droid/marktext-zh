'use strict'

const nodeMajor = Number(process.versions.node.match(/^(\d+)\./)[1])
if (nodeMajor < 14) {
  console.error('[ERROR] Node.js v14 or above is required.\n')
  process.exit(1)
}
