import { Router, Request, Response } from 'express';
import { getComments } from '../../../../bussinessLogic/comment';
const router: Router = Router();



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
