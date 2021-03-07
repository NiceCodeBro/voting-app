import { Router, Request, Response } from 'express';
import { requireAuth } from '../../../utils/requireAuth';
import { createFeed, getAllFeeds, getFeeds, deleteFeed, updateFeed, getFeed } from '../../../../bussinessLogic/feeds';
import { parseJwtToken } from '../../../../auth/utils';
const router: Router = Router();

// Create feed with 
router.post('/',
    requireAuth,
    async (req: Request, res: Response) => {
      const token = parseJwtToken(req.headers.authorization);
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
router.get('/belongTo/:email',
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
    const token = parseJwtToken(req.headers.authorization);
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

// update a specific feed item
router.patch('/:feedId',
  requireAuth,
  async (req: Request, res: Response) => {
    const token = parseJwtToken(req.headers.authorization);
    const {feedId} = req.params;

    const item = req.body.item;

    try {
      await updateFeed(item, feedId, token);
      return res.status(200).send({id: feedId, item});
    } catch (err) {
      console.log('error on updating a feed:', err)
      return res.status(400).send('');
    }
});

// get a specific feed item
router.get('/:feedId',
  requireAuth,
  async (req: Request, res: Response) => {
    const token = parseJwtToken(req.headers.authorization);
    const {feedId} = req.params;

    try {
      const item = await getFeed(feedId, token);
      console.log(item)
      return res.status(200).send(item);
    } catch (err) {
      console.log('error on getting a feed:', err)
      return res.status(400).send('');
    }
});


export const FeedRouter: Router = router;
