import { Request, Response } from 'express';
import { NextFunction } from 'connect';
import * as jwt from 'jsonwebtoken';

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