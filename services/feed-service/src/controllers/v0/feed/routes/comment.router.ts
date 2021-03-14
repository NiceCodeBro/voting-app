import { Router, Request, Response } from 'express';
import { parseJwtToken } from '../../../../auth/utils';
import { getComments, createComment } from '../../../../bussinessLogic/comment';
import { requireAuth } from '../../../utils/requireAuth';

const router: Router = Router();

// Create a comment to a feed
router.post('/',
    requireAuth,
    async (req: Request, res: Response) => {

      const comment = req.body.comment;
      const feedId = req.body.feedId;

      try {
        const createdItem = await createComment(comment, feedId);

        res.status(201).send(createdItem);
      } catch(e) {
        console.log(new Date().toISOString(), "An error occured during write process to db: ", e);

        res.status(500).send("");
      }
});

// Get all feeds
router.get('/:feedId',
    //requireAuth,
    async (req: Request, res: Response) => {
      const {feedId} = req.params;
      let comments;
      try {
        comments = await getComments(feedId);
        console.log(new Date().toISOString(), "Items are successfully fetched from db");

      } catch(e) {
        console.log(new Date().toISOString(), "An error occured during fetch process to db: ", e);

        return res.status(500).send("");
      }
      return res.status(200).send(comments.Items);
});


export const CommentRouter: Router = router;
