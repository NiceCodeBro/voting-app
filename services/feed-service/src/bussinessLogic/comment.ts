import * as uuid from 'uuid';
import { CommentItem } from '../models/CommentItem'
import { CommentAccess } from '../dataLayer/commentAccess'
import { String } from 'aws-sdk/clients/cloudtrail';

const commentAccess = new CommentAccess();

// it creates a commen and saves it into db through commentAccess
export async function createComment(
  comment: String,
  feedId: string
): Promise<CommentItem> {

 // const email = parsePartitionKey(jwtToken);

  const newComment = {
    feedId,
    id: uuid.v4(),
    createdAt: new Date().toISOString(),
    comment
  };

  return await commentAccess.createComment(newComment);
}

export async function getComments(aFeedId: string): Promise<any> {
  return await commentAccess.getComments(aFeedId);
}
