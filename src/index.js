'use strict'

const aws = require('aws-sdk')

async function main() {
  const s3 = new aws.S3()

  await s3.createBucket({ Bucket: 'jt-bucket-123' }).promise()

  console.log('done.')
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
