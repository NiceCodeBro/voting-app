import {Router, Request, Response} from 'express';
import {NextFunction} from 'connect';
import * as jwt from 'jsonwebtoken';
import * as c from '../../../../config/config';
import { createFeed } from '../../../../bussinessLogic/feeds'
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

  const token = tokenBearer[1];
  return jwt.verify(token, c.config.jwt.secret, (err, decoded) => {
    if (err) {
      console.log("Feed Service requireAuth --> Failed to authenticate.");
      return res.status(500).send({auth: false, message: 'Failed to authenticate.'});
    }
    return next();
  });
}


// Create feed with metadata
router.post('/',
    //requireAuth,
    async (req: Request, res: Response) => {
      console.log('selim');
      await createFeed('');
      res.status(201).send('selim');
    });

export const VoteRouter: Router = router;
