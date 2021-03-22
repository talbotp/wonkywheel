'use strict';

const { get } = require('./wonkyWheelTable');

const convertEntries = dynamodbNumberMap => {
  const map = {};
  for (let key in dynamodbNumberMap) {
    map[key] = dynamodbNumberMap[key].N;
  }
  return map;
};

module.exports.handler = async event => {
  const username = event?.queryStringParameters?.username
  if (username === undefined) {
    console.log('Client Error: Missing username query string parameter.');
    return { statusCode: 400, message: 'Missing username query string parameter.' };
  }

  const data = await get(username);
  const standard = convertEntries(data.Item?.standard?.M);
  const lastLeaderboard = convertEntries(data.Item?.lastLeaderboard?.M);
  const currentLeaderboard = convertEntries(data.Item?.currentLeaderboard?.M);
  const top = data.Item?.top?.N;

  return {
    statusCode: 200,
    body: JSON.stringify({
      username: username,
      standard: standard,
      lastLeaderboard: lastLeaderboard,
      currentLeaderboard: currentLeaderboard,
      top: top,
    }, null, 2),
  };

};
