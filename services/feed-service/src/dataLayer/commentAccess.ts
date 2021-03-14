import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { CommentItem } from '../models/CommentItem'

const dynamodb = require('aws-sdk/clients/dynamodb');

const config = {
  region: process.env.AWS_REGION,
  endpoint: process.env.DYNAMODB_END_POINT,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
};

// Provides an access to DB
export class CommentAccess {
  constructor(
    private readonly docClient: DocumentClient = createDynamoDBClient(),
    private readonly commentTableName = process.env.COMMENT_TABLE_NAME) {
  }

  async createComment(aComment: CommentItem ): Promise<CommentItem> {
    await this.docClient.put({
        TableName: this.commentTableName,
        Item: aComment
      }, function(err, data) {
        if (err) console.log(new Date().toISOString(), 'Error occured on putting an item to db', {error: err, item: aComment});
        else     console.log(new Date().toISOString(), 'Data has been successfully added to db', {item: data});
      }).promise()

    return aComment;
  }

  async getComments(aFeedId: string): Promise<any> {
    return await this.docClient.query({
      TableName : this.commentTableName,
      KeyConditionExpression: 'feedId = :feedId',
      ExpressionAttributeValues: {
          ':feedId': aFeedId
      },
      ScanIndexForward: false
    }, function(err, data) {
      if (err) console.log(new Date().toISOString(),  'Error occured on getting a single toDoItem',{error: err});
      else     console.log(new Date().toISOString(), 'Data has been fetched from db');
    }).promise();
  }
}

function createDynamoDBClient() {
  return new dynamodb.DocumentClient(config);
}