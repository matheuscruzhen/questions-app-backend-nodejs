import express from 'express';
import config from 'config';
import cors from 'cors';

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

const port = config.get<string>('port');

app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use(express.json());
