import * as uuid from 'uuid';
import { TodoItem } from '../models/TodoItem'
import { FeedAccess } from '../dataLayer/feedAccess'
//import { parseUserId } from '../auth/utils';

const feedAccess = new FeedAccess();
//const bucketAccess = new BucketAccess();

export async function createFeed(
  jwtToken: string
): Promise<TodoItem> {

  //const userId = parseUserId(jwtToken)
  
  const newItem = {
    //...createTodoRequest,
    //userId,
    done: false,
    createdAt: new Date().toISOString(),
    id: uuid.v4()
  }

  return await feedAccess.createFeed(newItem);
}