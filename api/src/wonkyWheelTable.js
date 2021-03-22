const AWS = require('aws-sdk');
AWS.config.update({region: process.env.AWS_REGION})
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'})

if (process.env.IS_OFFLINE) {
  var TABLE_NAME = `${process.env.WONKYWHEEL_TABLE}-offline`;
} else {
  var TABLE_NAME = process.env.WONKYWHEEL_TABLE;
}

const get = async username => {
  console.log(TABLE_NAME);
  const params = {
    'TableName': TABLE_NAME,
    'Key': {
      'username': {'S': username} 
    }
  };
  const data = await dynamodb.getItem(params).promise();
  return data;
};

const put = async item => {
  const params = {
    'TableName': TABLE_NAME,
    'Item': item
  };
  await dynamodb.putItem(params).promise();
};

module.exports = {
  get,
  put,
};
