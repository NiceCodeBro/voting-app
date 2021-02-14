import cors from 'cors';
import express from 'express';
import { IndexRouter } from './controllers/v0/index.router';
import bodyParser from 'body-parser';

(async () => {
  const app = express();
  const port = process.env.PRODUCTION_PORT || 8081;

  app.use(bodyParser.json());

  app.use(cors({
    allowedHeaders: [
      'Origin', 'X-Requested-With',
      'Content-Type', 'Accept',
      'X-Access-Token', 'Authorization',
    ],
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: '*',
  }));

  app.use('/api/v0/', IndexRouter);

  // Root URI call
  app.get( '/', async ( req, res ) => {
    res.send( '/api/v0/' );
  } );


  // Start the Server
  app.listen( port, () => {
    console.log( `server running on ${port}` );
    console.log( `press CTRL+C to stop server` );
  } );
})();
