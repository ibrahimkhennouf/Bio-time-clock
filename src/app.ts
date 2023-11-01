import 'dotenv/config';
import express, { Application } from 'express';

import cors from 'cors';

import connectDB from './config/dataBase';

import routes from './routers';
import swaggerDocs from './config/swagger';

//For env File
const app: Application = express();
const port = process.env.PORT || 5000;

//connect to db
connectDB();

//middlewares
app
  .use(express.json())
  .use(cors({ origin: true, credentials: true }))
  .use(express.urlencoded({ extended: true }))
  .use('/api/v1', routes);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
  swaggerDocs(app);
});
