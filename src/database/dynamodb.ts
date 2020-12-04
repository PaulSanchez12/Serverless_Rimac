import AWS from 'aws-sdk';

let options = {};

if (process.env.JEST_WORKER_ID) {
  options = {
    region: 'local-env',
    endpoint: 'http://localhost:8000',
    sslEnabled: false,
  };
}

if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://localhost:8000',
  };
} else {
  options = {
    region: 'us-east-1' 
  }
}

const client = new AWS.DynamoDB.DocumentClient(options);

export default client;