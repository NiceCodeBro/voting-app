import * as uuid from 'uuid';
import { FeedItem } from '../models/FeedItem'
import { FeedAccess } from '../dataLayer/feedAccess'
import { parsePartitionKey } from '../auth/utils';

const feedAccess = new FeedAccess();

// it creates a feed item and saves it into db through feedAccess
export async function createFeed( 
  item: any,
  jwtToken: string
): Promise<FeedItem> {

  const email = parsePartitionKey(jwtToken);

  const newItem = {
    email,
    item,
    createdAt: new Date().toISOString(),
    id: uuid.v4()
  };

  return await feedAccess.createFeed(newItem);
}

// it requests all feeds from feedAcess
export async function getAllFeeds(): Promise<any> {
  return await feedAccess.getAllFeeds();
}

// it requests all feeds from feedAcess which belong to one registered user
export async function getFeeds(aEmail: string): Promise<any> {
  return await feedAccess.getFeeds(aEmail);
}

export async function deleteFeed(feedId: string, jwtToken: string): Promise<any> {
  const email = parsePartitionKey(jwtToken);

  return await feedAccess.deleteFeed(feedId, email);
}

export async function updateFeed(feedItem: object, feedId: string, jwtToken: string) {
  const email = parsePartitionKey(jwtToken);

  return await feedAccess.updateTodo(feedItem, feedId, email )
}