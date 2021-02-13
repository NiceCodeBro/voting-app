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
        if (err) console.log('Error occured on putting an item to db',{error: err, item: feedItem});    // an error occurred
        else     console.log('Data has been successfully added to db', {item: data});   // successful response
      }).promise()

    return feedItem;
  }

  async getAllFeeds(): Promise<any> {
    return await this.docClient.scan({
      TableName : this.feedTableName
    }, function(err, data) {
      if (err) console.log('Error occured on getting a single toDoItem');
      else     console.log('Data has been fetched from db');
    }).promise();
  }

  async getFeeds(aEmail: string): Promise<any> {
    return await this.docClient.query({
      TableName : this.feedTableName,
      KeyConditionExpression: 'email = :email',
      ExpressionAttributeValues: {
          ':email': aEmail
      },
      ScanIndexForward: false
    }, function(err, data) {
      if (err) console.log('Error occured on getting a single toDoItem',{error: err, email: aEmail});   // an error occurred
      else     console.log('Data has been fetched from db', {item: {"email": aEmail}});
    }).promise();
  }
}

function createDynamoDBClient() {
  return new dynamodb.DocumentClient(config);
}