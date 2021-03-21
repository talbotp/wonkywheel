# WonkyWheel API

This service is completely serverless running in us-east-1.

## Database (DynamoDB)

| username      | standard                  | lastLeaderboard   | currentLeaderboard                     | 
| ------------- |-------------              |-----------        |-----                           |
| erobb221      | {closet: 20, noCam: 2}    | {makeup: 55}      | {noMic: 100, others:... }      |
| ...           | ...                       | ...               |  ...                           |

## Endpoints

* ```GET /wonkywheel?username=erobb221```
  This will fetch all of the data in DynamoDB the username.

* ```POST /entry```
  This will add a new entry to the community's current leaderboard.

## Extra Lambda Functions

* ```resetLeaderboard```
  At every 6AM on Mondays, the leaderboard is completely reset, this involves moving data from the currentLeaderboard into the lastLeaderboard, then deleting the currentLeaderboard.
