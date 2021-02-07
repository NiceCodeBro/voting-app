import { Router, Request, Response } from 'express';
import { VoteRouter } from './vote/routes/vote.router';

const router: Router = Router();

router.use('/vote', VoteRouter);

router.get('/', async (req: Request, res: Response) => {
  res.send(`V0`);
});

export const IndexRouter: Router = router;
