import { Router, Request, Response } from 'express';
import { NextFunction } from 'connect';
import * as jwt from 'jsonwebtoken';
import { createFeed, getAllFeeds, getFeeds, deleteFeed } from '../../../../bussinessLogic/feeds'
const router: Router = Router();

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  console.log("Feed Service requireAuth is called.");

  if (!req.headers || !req.headers.authorization) {
    console.log("Feed Service requireAuth --> No authorization headers.");
    return res.status(401).send({message: 'No authorization headers.'});
  }

  const tokenBearer = req.headers.authorization.split(' ');
  if (tokenBearer.length != 2) {
    console.log("Feed Service requireAuth --> Malformed token.");
    return res.status(401).send({message: 'Malformed token.'});
  }
  const jwtSecret = process.env.JWT_SECRET;
  const token = tokenBearer[1];
  return jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      console.log("Feed Service requireAuth --> Failed to authenticate.");
      return res.status(500).send({auth: false, message: 'Failed to authenticate.'});
    }
    return next();
  });
}

// Create feed with 
router.post('/',
    requireAuth,
    async (req: Request, res: Response) => {
      const authHeader = req.headers.authorization;
      const authSplit = authHeader.split(" ");
      const token = authSplit[1];

      const item = req.body.item;

      try {
        const createdItem = await createFeed(item, token);
        console.log(new Date().toISOString(), "The item is successfuly saved in db", createdItem);

        res.status(201).send(createdItem);
      } catch(e) {
        console.log(new Date().toISOString(), "An error occured during write process to db: ", e);

        res.status(500).send("");
      }
});


// Get all feeds
router.get('/',
    //requireAuth,
    async (req: Request, res: Response) => {
      let feeds;
      try {
        feeds = await getAllFeeds();
        console.log(new Date().toISOString(), "Items are successfully fetched from db");

      } catch(e) {
        console.log(new Date().toISOString(), "An error occured during fetch process to db: ", e);

        return res.status(500).send("");
      }
      return res.status(200).send(feeds.Items);

});

// Get all feeds which belongs to one account
router.get('/:email',
    requireAuth,
    async (req: Request, res: Response) => {
      const {email} = req.params;
      let feeds;

      try {
        feeds = await getFeeds(email);
        console.log(new Date().toISOString(), "Items are successfully fetched from db for user:", email);

      } catch(e) {
        console.log(new Date().toISOString(), "An error occured during fetch process to db: ", e);

       return res.status(500).send("");
      }
      return res.status(200).send(feeds.Items);
});

router.delete('/:feedId',
  requireAuth,
  async (req: Request, res: Response) => {
    const authHeader = req.headers.authorization;
    const authSplit = authHeader.split(" ");
    const token = authSplit[1];
    const {feedId} = req.params;

    try{
      await deleteFeed(feedId, token);
      console.log('Deleted feedId: ', { feedId });
    
      return res.status(200).send(feedId);
    } catch(err) {
      console.log('Unable to delete item. Error msg:', err.message);
    
      return res.status(400).send('');
    }
});




export const FeedRouter: Router = router;
