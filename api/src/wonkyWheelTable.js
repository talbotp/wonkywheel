const AWS = require('aws-sdk');
AWS.config.update({region: process.env.AWS_REGION})
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'})

if (process.env.IS_OFFLINE) {
  var TABLE_NAME = `${process.env.WONKYWHEEL_TABLE}-offline`;
} else {
  var TABLE_NAME = process.env.WONKYWHEEL_TABLE;
}

const getData = async username => {
  const params = {
    'TableName': TABLE_NAME,
    'Key': {
      'username': {'S': username} 
    }
  };
  const data = await dynamodb.getItem(params).promise();
  return data;
};

const putData = async item => {
  const params = {
    'TableName': TABLE_NAME,
    'Item': item
  };
  await dynamodb.putItem(params).promise();
};

module.exports = {
  getData,
  putData,
};
