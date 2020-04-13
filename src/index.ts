import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import logger from './logger';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(morgan('combined'));

app.listen(port, () =>
  logger.info(`App listening at http://localhost:${port}`),
);

app.get('/', (req, res) => res.send('Hello World!'));
