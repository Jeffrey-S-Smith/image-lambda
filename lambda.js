const AWS_SDK = require('aws-sdk');

const s3Client = new AWS_SDK.S3();

exports.handler = async (event) => {
    
    const {
      bucket,
      object
    } = event.Records[0].s3;
    
    let retrieveImages = await s3Client.getObject({
      Bucket: bucket.name,
      Key: 'images.json'
    }).promise();
    
    try {
      s3Client.getObject();
      // s3Client.putObject(Body:[]);
      
    }catch(err){
      // if (err.code = "No such thing", putObject(Body: []));
    }
    
    
    // let jsonObject = JSON.parse(uploadedFile.Body.toString());
    
    // jsonObject.key2 = 'value2';
    
    // let newObject = await s3Client.putObject({
    //   Bucket: bucket.name,
    //   Key: 'images.json/data.json',
    //   Body: JSON.stringify(jsonObject.Body), // what goes here?
    // }).promise();
    
    
    

    
    //   let image1 = json.images[0];
    //   let image2 = json.images[1];

 
    
    // // TODO implement
    //   const response = {
    //     statusCode: 200,
    //     body: JSON.stringify(image1),
    // };
    // return response;
};
