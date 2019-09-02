'use strict'

async function main() {
  console.log('hello')
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
