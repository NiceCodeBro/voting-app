import { stringList } from 'aws-sdk/clients/datapipeline';
import { DocumentClient } from 'aws-sdk/clients/dynamodb'

const dynamodb = require('aws-sdk/clients/dynamodb');

const config = {
  region: process.env.AWS_REGION,
  endpoint: process.env.DYNAMODB_END_POINT,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
};

// Provides an access to DB
export class FeedAccess {
  constructor(
    private readonly docClient: DocumentClient = createDynamoDBClient(),
    private readonly feedTableName = process.env.FEED_TABLE_NAME) {
  }

  async createFeed(feedItem: any): Promise<any> {
    await this.docClient.put({
        TableName: this.feedTableName,
        Item: feedItem
      }, function(err, data) {
        if (err) console.log(new Date().toISOString(), 'Error occured on putting an item to db', {error: err, item: feedItem});
        else     console.log(new Date().toISOString(), 'Data has been successfully added to db', {item: data});
      }).promise()

    return feedItem;
  }

  async getAllFeeds(): Promise<any> {
    return await this.docClient.scan({
      TableName : this.feedTableName
    }, function(err, data) {
      if (err) console.log(new Date().toISOString(), 'Error occured on getting a single toDoItem');
      else     console.log(new Date().toISOString(), 'Data has been fetched from db');
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
      if (err) console.log(new Date().toISOString(),  'Error occured on getting a single toDoItem',{error: err, email: aEmail});
      else     console.log(new Date().toISOString(), 'Data has been fetched from db', {item: {"email": aEmail}});
    }).promise();
  }

  async deleteFeed(feedId: string, email: string): Promise<any> {
    await this.docClient.delete({
      TableName: this.feedTableName,
      Key: {
        email: email,
        id: feedId
      }
    }, function(err, data) {
      if (err) console.log('Error occured on deleting an item to db',{error: err, item: {feedId, email}});     // an error occurred
      else     console.log('Data has been successfully deleted from db', {item: {"feedId": feedId, 'email':email}});
    }).promise();
  }


  private async update(params: any) : Promise<any>{
    await this.docClient.update(params, function(err, data) {
      if (err) {
          console.log("Unable to update item. Error JSON:", {error: JSON.stringify(err, null, 2)});
      } else {
          console.log("UpdateItem succeeded:", {data: JSON.stringify(data, null, 2)});
      }
    }).promise();
  }

  async updateTodo(feedItem: object, feedId: string, email: string): Promise<any> {
    const updateExpression = "set #item = :item";

    const params = {
      TableName: this.feedTableName,
      Key: {
        email: email,
        id: feedId
      },
      UpdateExpression: updateExpression,
      ExpressionAttributeValues: {
        ":item": feedItem
      },
      ExpressionAttributeNames: {
        "#item": "item"
      },
      ReturnValues: "UPDATED_NEW"
    }

    await this.update(params);

    return feedItem;
  }
}

function createDynamoDBClient() {
  return new dynamodb.DocumentClient(config);
}