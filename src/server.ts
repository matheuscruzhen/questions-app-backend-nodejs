import express from 'express';
import config from 'config';
import cors from 'cors';
import log from './utils/logger';
import connect from './utils/connect';
import routes from './routes';

const app = express();

app.use(cors());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(routes);

const port = config.get<string>('port');

app.listen(port, async () => {
  log.info(`Server running at http://localhost:${port}`);

  await connect();
});

app.use(express.json());
