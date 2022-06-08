require('dotenv').config()
const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')

const bucketRegion = process.env.AWS_BUCKET_REGION
const bucketName = process.env.AWS_BUCKET_NAME
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
    bucketRegion,
    accessKeyId,
    secretKey
})

//uploads a file to S3
function uploadFile(file) {
    
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        bucket: bucketName,
        body: fileStream,
        key: file.filename
    }

    return s3.upload(uploadParams).promise()

}


//not done yet!!


//downloads a file from S3