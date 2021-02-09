import * as uuid from 'uuid';
import { TodoItem } from '../models/TodoItem'
import { FeedAccess } from '../dataLayer/feedAccess'
import { parseUserId } from '../auth/utils';

const feedAccess = new FeedAccess();
//const bucketAccess = new BucketAccess();

export async function createFeed( 
  item: any,
  jwtToken: string
): Promise<TodoItem> {

  const email = parseUserId(jwtToken)

  const newItem = {
    email,
    item,
    createdAt: new Date().toISOString(),
    id: uuid.v4()
  }

  return await feedAccess.createFeed(newItem);
}


export async function getFeeds(): Promise<any> {
  return await feedAccess.getTodos();
}