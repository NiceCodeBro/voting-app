import * as uuid from 'uuid';
import { FeedItem } from '../models/FeedItem'
import { FeedAccess } from '../dataLayer/feedAccess'
import { parseUserId } from '../auth/utils';

const feedAccess = new FeedAccess();

// it creates a feed item and saves it into db through feedAccess
export async function createFeed( 
  item: any,
  jwtToken: string
): Promise<FeedItem> {

  const email = parseUserId(jwtToken);

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