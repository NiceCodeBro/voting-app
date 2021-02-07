import { DocumentClient } from 'aws-sdk/clients/dynamodb'

const dynamodb = require('aws-sdk/clients/dynamodb');

const config = {
    region: '',
    endpoint: '',
    accessKeyId: '',
    secretAccessKey: ''
};


export class FeedAccess {
  constructor(
    private readonly docClient: DocumentClient = createDynamoDBClient(),
    private readonly feedTableName = '') {
  }

  async createFeed(feedItem: any): Promise<any> {
    await this.docClient.put({
        TableName: this.feedTableName,
        Item: feedItem
      }, function(err, data) {
        if (err) console.log('Error occured on putting an item to db',{error: err, item: feedItem});                                   // an error occurred
        else     console.log('Data has been successfully added to db', {item: data});   // successful response
      }).promise()

    return feedItem;
  }
}

function createDynamoDBClient() {
  return new dynamodb.DocumentClient(config);
}